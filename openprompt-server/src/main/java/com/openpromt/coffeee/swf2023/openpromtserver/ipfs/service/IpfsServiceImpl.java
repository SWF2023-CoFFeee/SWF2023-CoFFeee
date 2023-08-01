package com.openpromt.coffeee.swf2023.openpromtserver.ipfs.service;


//import com.openpromt.coffeee.swf2023.openpromtserver.config.IpfsConfig;
import com.openpromt.coffeee.swf2023.openpromtserver.config.IpfsConfig;
import io.ipfs.api.IPFS;
import io.ipfs.api.MerkleNode;
import io.ipfs.api.NamedStreamable;
import io.ipfs.multihash.Multihash;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

@RequiredArgsConstructor
@Service
public class IpfsServiceImpl implements IpfsService{

    private final IpfsConfig ipfsConfig;

    @Override
    public String saveFile(MultipartFile file) {
        try {
            InputStream stream = new ByteArrayInputStream(file.getBytes());
            NamedStreamable.InputStreamWrapper inputStreamWrapper = new NamedStreamable.InputStreamWrapper(stream);
            IPFS ipfs = ipfsConfig.ipfs;

            MerkleNode merkleNode = ipfs.add(inputStreamWrapper).get(0);
            return merkleNode.hash.toBase58();
        }catch (Exception e){
            throw new RuntimeException("Error while communication with the IPFS node", e);
        }
    }

    @Override
    public byte[] loadFile(String hash) {
        try {
            IPFS ipfs = ipfsConfig.ipfs;

            Multihash filePointer = Multihash.fromBase58(hash);
            return ipfs.cat(filePointer);
        }catch (Exception e){
            throw new RuntimeException("Error while communicating with the IPFS node", e);
        }
    }
}
