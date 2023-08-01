package com.openpromt.coffeee.swf2023.openpromtserver.ipfs.controller;

import com.openpromt.coffeee.swf2023.openpromtserver.copyright.dto.RegisterCopyrightRequest;
import com.openpromt.coffeee.swf2023.openpromtserver.ipfs.service.FileService;
import com.openpromt.coffeee.swf2023.openpromtserver.ipfs.service.IpfsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
@Slf4j
@RequestMapping("/api/v2/ipfs")
@RequiredArgsConstructor
@RestController
public class IpfsApiController {

    private final IpfsService ipfsService;
    private final FileService fileService;

    @PostMapping(value = "/upload")
    public String saveFile(@RequestParam("file")MultipartFile file){

        return ipfsService.saveFile(file);
    }

    @GetMapping(value = "/file/{hash}")
    public ResponseEntity<?> loadFile(@PathVariable("hash") String hash){
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Content-Type", MediaType.ALL_VALUE);
        byte[] bytes = ipfsService.loadFile(hash);
        return ResponseEntity.status(HttpStatus.OK).headers(httpHeaders).body(bytes);
    }
//
//    @PostMapping(value = "/test")
//    public String testSave(@RequestBody RegisterCopyrightRequest request, Principal principal) throws IOException {
//        MultipartFile multipartFile = fileService.convertJsonToMultipartfile(request, principal.getName());
//        return ipfsService.saveFile(multipartFile);
//    }
//
//    @GetMapping(value = "/test/file/{hash}")
//    public JSONObject testFile(@PathVariable("hash") String hash){
//        byte[] bytes = ipfsService.loadFile(hash);
//        JSONObject json = new JSONObject(new String(bytes));
//        Object prompts = json.get("prompt");
//        String promptsString = prompts.toString();
//        return json;
//    }
}
