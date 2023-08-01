package com.openpromt.coffeee.swf2023.openpromtserver.product.entity;

import com.openpromt.coffeee.swf2023.openpromtserver.copyright.entity.Copyright;
import com.openpromt.coffeee.swf2023.openpromtserver.product.dto.GetProductDetailResponse;
import com.openpromt.coffeee.swf2023.openpromtserver.product.dto.GetProductListResponse;
import com.openpromt.coffeee.swf2023.openpromtserver.product.dto.RegistProductRequest;
import com.openpromt.coffeee.swf2023.openpromtserver.product.util.AIType;
import com.openpromt.coffeee.swf2023.openpromtserver.product.util.ProductType;
import com.openpromt.coffeee.swf2023.openpromtserver.product.util.ProductTypeConverter;
import com.openpromt.coffeee.swf2023.openpromtserver.user.util.AITypeConverter;
import com.openpromt.coffeee.swf2023.openpromtserver.util.auditing.BaseEntity;
import com.openpromt.coffeee.swf2023.openpromtserver.util.googlestorage.GoogleStorageUtil;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.boot.context.properties.bind.DefaultValue;

import javax.persistence.*;
import java.io.IOException;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @JoinColumn(name = "copyrightId")
    @ManyToOne(fetch = FetchType.LAZY)
    private Copyright copyrightId;

    private String title;
    private String description;
    private String thumbnail;
    private String address;

    @ColumnDefault("0")
    private int likes;

    private int price;

    private String productType;

    private String AItype;

    private boolean status;

    public static GetProductListResponse productToListResponse(Product e) {
        return GetProductListResponse.builder()
                .thumbnail(e.getThumbnail())
                .product_title(e.getTitle())
                .like(e.getLikes())
                .username(e.copyrightId.getUser().getUsername())
                .price(e.getPrice())
                .AI_type(e.getAItype())
                .build();
    }
    public static GetProductDetailResponse productToDetailResponse(Product e){
        return GetProductDetailResponse.builder()
                .product_type(e.getProductType())
                .description(e.getDescription())
                .price(e.getPrice())
                .username(e.getCopyrightId().getUser().getUsername())
                .title(e.getTitle())
                .thumbnail(e.getThumbnail())
                .AI_type(e.getAItype())
                .build();
    }

    public static Product registProductRequestToProduct(RegistProductRequest request) throws IOException {
        return Product.builder()
                .address(request.getSeller_addr())
                .productType(request.getProduct_type())
                .title(request.getProduct_title())
                .description(request.getDescription())
                .price(request.getPrice())
                .AItype(request.getAI_type())
                .build();
    }

    public void cancelSellingProduct(){
        this.status=false;
    }

    public void updateCopyright(Copyright copyright) {
        this.copyrightId = copyright;
    }

    public void updateThumbnail(String googleStorageUrl) {
        this.thumbnail = googleStorageUrl;
    }
}
