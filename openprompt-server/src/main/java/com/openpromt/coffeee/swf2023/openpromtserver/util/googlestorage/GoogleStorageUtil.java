package com.openpromt.coffeee.swf2023.openpromtserver.util.googlestorage;

import com.google.cloud.storage.Acl;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class GoogleStorageUtil {
    @Value("${spring.cloud.gcp.storage.bucket}")
    private String bucketName;

    private static final String baseUrl = "https://storage.googleapis.com/coffeee/";
    private final Storage storage;

    public String getGoogleStorageUrl(MultipartFile file) throws IOException {
        String uuid = UUID.randomUUID().toString(); // GCS에 저장될 파일 이름
        String type = file.getContentType(); // 파일 형식
        BlobInfo blobInfo = storage.create(
                BlobInfo.newBuilder(bucketName, uuid)
                        .setAcl(new ArrayList<>(Arrays.asList(Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER))))
                        .setContentType(type)
                        .build(),
                file.getInputStream()
        );
        return baseUrl + uuid;
    }

}
