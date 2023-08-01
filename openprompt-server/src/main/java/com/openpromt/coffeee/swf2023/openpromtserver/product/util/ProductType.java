package com.openpromt.coffeee.swf2023.openpromtserver.product.util;

import lombok.Getter;

import java.util.Arrays;

@Getter
public enum ProductType {

    COPYRIGHT("Copyright"),
    TICKET("ticket");
    private String value;

    ProductType(String value){
        this.value = value;
    }

    public static ProductType ofCode(String data){
        return Arrays.stream(ProductType.values())
                .filter(v -> v.getValue().equals(data))
                .findAny()
                .orElseThrow(()->new IllegalArgumentException(String.format("ProductType에 존재하지 않는 Value입니다.")));
    }
}
