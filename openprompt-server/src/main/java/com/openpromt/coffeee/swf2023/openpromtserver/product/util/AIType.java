package com.openpromt.coffeee.swf2023.openpromtserver.product.util;

import lombok.Getter;

import java.util.Arrays;

@Getter
public enum AIType {

    MID_JOURNEY("MID JOURNEY"),
    DALL_E2("DALL-E2"),
    STABLE_DIFFUSION("STABLE DIFFUSION"),
    CRAIYON("CRAIYON"),
    BING_CREATOR("BING CREATOR");
    private String value;

    AIType(String value){
        this.value = value;
    }

    public static AIType ofCode(String data){
        return Arrays.stream(AIType.values())
                .filter(v -> v.getValue().equals(data))
                .findAny()
                .orElseThrow(() -> new IllegalArgumentException(String.format("AIType에 존재하지 않는 Value입니다.")));
    }

}
