package com.openpromt.coffeee.swf2023.openpromtserver.user.entity;

import com.openpromt.coffeee.swf2023.openpromtserver.copyright.entity.Copyright;
import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.entity.OwnTicket;
import com.openpromt.coffeee.swf2023.openpromtserver.user.dto.UserResponseDto;
import com.openpromt.coffeee.swf2023.openpromtserver.user.util.Role;
import com.openpromt.coffeee.swf2023.openpromtserver.util.auditing.BaseUserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Builder
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseUserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String username;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userId")
    private List<OwnTicket> tickets;

    public static UserResponseDto convertToDto(User user){
        return UserResponseDto.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .role(user.getRole())
                .build();
    }
}
