package com.openpromt.coffeee.swf2023.openpromtserver.ipfs.service;

import org.springframework.web.multipart.MultipartFile;

public interface IpfsService {
    String saveFile(MultipartFile file);

    byte[] loadFile(String hash);
}
