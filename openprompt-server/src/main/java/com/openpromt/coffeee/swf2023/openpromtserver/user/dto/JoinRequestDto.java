package com.openpromt.coffeee.swf2023.openpromtserver.user.dto;

import com.openpromt.coffeee.swf2023.openpromtserver.user.entity.User;
import com.openpromt.coffeee.swf2023.openpromtserver.user.util.Role;
import lombok.*;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JoinRequestDto {

    private String username;
    private String password;
    private Role role;

    public User toEntity(){
        return User.builder()
                .username(username)
                .password(password)
                .role(role)
                .build();
    }

    public void setEncPassword(String encPassword) {
        this.password = encPassword;
    }

}
