package com.openpromt.coffeee.swf2023.openpromtserver.user.dto;

import lombok.*;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginRequestDto {

    private String username;
    private String password;

}
