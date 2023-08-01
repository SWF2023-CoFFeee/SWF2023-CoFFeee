package com.openpromt.coffeee.swf2023.openpromtserver.copyright.service;


import com.openpromt.coffeee.swf2023.openpromtserver.copyright.dto.RegisterCopyrightRequest;
import com.openpromt.coffeee.swf2023.openpromtserver.copyright.dto.RegisterCopyrightResponse;
import com.openpromt.coffeee.swf2023.openpromtserver.copyright.entity.Copyright;
import com.openpromt.coffeee.swf2023.openpromtserver.copyright.repository.CopyrightRepository;
import com.openpromt.coffeee.swf2023.openpromtserver.copyright.util.RSAUtil;
import com.openpromt.coffeee.swf2023.openpromtserver.ipfs.service.FileService;
import com.openpromt.coffeee.swf2023.openpromtserver.ipfs.service.IpfsService;
import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.dto.OwnTicketResponseDto;
import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.service.OwnTicketService;
import com.openpromt.coffeee.swf2023.openpromtserver.user.entity.User;
import com.openpromt.coffeee.swf2023.openpromtserver.user.repository.UserRepository;
import com.openpromt.coffeee.swf2023.openpromtserver.user.service.UserService;
import com.openpromt.coffeee.swf2023.openpromtserver.util.jaccard.Jaccard;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.security.*;
import java.security.spec.InvalidKeySpecException;
import java.util.NoSuchElementException;

@RequiredArgsConstructor
@Service

public class CopyrightService {
    private final FileService fileService;
    private final IpfsService ipfsService;
    private final OwnTicketService ownTicketService;
    private final UserRepository userRepository;
    private final CopyrightRepository copyrightRepository;

    /**
     *
     * @param request
     * @param username
     * @return
     * @throws NoSuchAlgorithmException
     *
     * Encrypt 이후, DB에 저장시키고 Copyright_id값 가져오는 것까지 작성해놓았습니다.
     * IPFS에 값을 저장하고, RegisterCopyrightReponse에 맞춰 값을 리턴시켜주세요.
     */
    public String registCopyright(RegisterCopyrightRequest request, String username) throws NoSuchAlgorithmException, NoSuchPaddingException, IllegalBlockSizeException, BadPaddingException, InvalidKeyException, IOException, InvalidKeySpecException {
        User user = userRepository.findByUsername(username).orElseThrow(()->new NoSuchElementException());

        KeyPair keyPair = RSAUtil.genRSAKeyPair();
        PublicKey publicKey = keyPair.getPublic();
        PrivateKey privateKey = keyPair.getPrivate();

        Copyright newCopyright = new Copyright(request.getCopyright_title(), RSAUtil.getBase64PrivateKey(privateKey),RSAUtil.getBase64PublicKey(publicKey),user );
        String encryptPrompt = RSAUtil.encryptRSA(request.getPrompt(), publicKey);
        request.setPrompt(encryptPrompt); // 요청받은 prompt 부분 암호화
        String s = RSAUtil.getBase64PrivateKey(privateKey);
        PrivateKey p = RSAUtil.getPrivateKeyFromBase64Encrypted(s);

        System.out.println(RSAUtil.decryptRSA(encryptPrompt,p));

        MultipartFile multipartFile = fileService.convertJsonToMultipartfile(request, username); // 요청받은 request json을 Multipartfile로 변환
        String hash = ipfsService.saveFile(multipartFile); // IPFS 네트워크에 등록 후 hash값 반환
        newCopyright.updateCopyrightId(hash); // 등록하려는 저작권에 hash값 지정

        return copyrightRepository.save(newCopyright).getCopyrightId();
    }

    public List<RegisterCopyrightResponse> checkSimilarity(String username, RegisterCopyrightRequest request, int threshold) throws NoSuchAlgorithmException, InvalidKeySpecException, NoSuchPaddingException, IllegalBlockSizeException, UnsupportedEncodingException, BadPaddingException, InvalidKeyException {

        String newPrompt = request.getPrompt(); // 새로 추가하려는 프롬프트
        List<OwnTicketResponseDto> tickets = ownTicketService.getTicketsByUsername(username);
        List<RegisterCopyrightResponse> responses = null;

        for(int i=0; i<tickets.size(); i++){
            String hashcode = tickets.get(i).getCopyrightId().getCopyrightId(); // 가지고 있는 프롬프트의 IPFS 해시
            String existCopyrightName = tickets.get(i).getCopyrightId().getCopyrightTitle(); // 가지고 있는 프롬프트의 이름
            PrivateKey privateKey = RSAUtil.getPrivateKeyFromBase64Encrypted(tickets.get(i).getCopyrightId().getPrivKey());

            JSONObject json = new JSONObject(new String(ipfsService.loadFile(hashcode)));
            String encryptedPrompt = json.get("prompt").toString(); // 가지고 있는 프롬프트 (암호화된)
            /**
             * existPrompt 는 본래 암호화 되어 있기 때문에,
             * 이곳에 복호화 로직이 추가되어야한다.
             */
            String existPrompt = RSAUtil.decryptRSA(encryptedPrompt, privateKey);
            double Similarity = Jaccard.jaccardSimilarity(newPrompt, existPrompt);

            if(Similarity > threshold){
                // 유사도가 높아 등록불가한 사용권
                responses.add(RegisterCopyrightResponse.builder()
                        .copyright_name(existCopyrightName)
                        .similarity(Similarity)
                        .validate(false)
                        .build());
            }else{
                // 유사도 검증에 문제가 없어 등록이 가능한 사용권
                responses.add(RegisterCopyrightResponse.builder()
                        .copyright_name(existCopyrightName)
                        .similarity(Similarity)
                        .validate(true)
                        .build());
            }
        }
        return responses;
    }

    /**
     *  이거이거이거이거이거이거이거이거이거이거이거이거이거이거이거이거이거이거이거
     * @param copyright_id
     * @return
     */
    public String getDecryptedPrompt(String copyright_id, String username) throws NoSuchAlgorithmException, InvalidKeySpecException, IOException, ClassNotFoundException, NoSuchPaddingException, IllegalBlockSizeException, BadPaddingException, InvalidKeyException {
        Copyright copyright = copyrightRepository.findById(copyright_id).orElseThrow(NoSuchElementException::new);
        String base64PrivKey = copyright.getPrivKey();
        PrivateKey privateKey = RSAUtil.getPrivateKeyFromBase64Encrypted(base64PrivKey);

        byte[] data = ipfsService.loadFile(copyright_id);

//        RegisterCopyrightRequest metadata = (RegisterCopyrightRequest)DeserializationUtil.deserialize(data);
//        String decryptedPrompt = RSAUtil.decryptRSA(metadata.getPrompt(),privateKey);
//        return decryptedPrompt;
        return null;
    }
}
