package com.openpromt.coffeee.swf2023.openpromtserver.user.dto;

import com.openpromt.coffeee.swf2023.openpromtserver.user.entity.User;
import com.openpromt.coffeee.swf2023.openpromtserver.user.util.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDto {

    private Long user_id;
    private String username;
    private Role role;
    private String token;

    public LoginResponseDto(User user){
        this.username = user.getUsername();
        this.user_id = user.getUserId();
        this.role = user.getRole();
    }
}
