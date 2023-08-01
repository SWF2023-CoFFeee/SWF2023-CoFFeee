package com.openpromt.coffeee.swf2023.openpromtserver.product.dto;

import com.openpromt.coffeee.swf2023.openpromtserver.product.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GetProductListResponse {
    private String thumbnail;
    private String product_title;
    private String AI_type;
    private int price;
    private int like;
    private String username;
}
