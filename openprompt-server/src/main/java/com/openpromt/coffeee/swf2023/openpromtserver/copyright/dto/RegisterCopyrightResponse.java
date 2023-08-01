package com.openpromt.coffeee.swf2023.openpromtserver.copyright.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterCopyrightResponse {
    private String copyright_name;
    private Double similarity;
    private Boolean validate;
}
