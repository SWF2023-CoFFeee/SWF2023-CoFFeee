package com.openpromt.coffeee.swf2023.openpromtserver.product.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistProductRequest {
    private String copyright_id;
    private String product_title;
    private String description;
    private String product_type;
    private int price;
    private String AI_type;
    private String seller_addr;
}
