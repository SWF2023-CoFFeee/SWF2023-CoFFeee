package com.openpromt.coffeee.swf2023.openpromtserver.product.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GetProductDetailResponse {
    private String username;
    private String title;
    private String description;
    private int price;
    private String thumbnail;
    private String AI_type;
    private String product_type;
}
