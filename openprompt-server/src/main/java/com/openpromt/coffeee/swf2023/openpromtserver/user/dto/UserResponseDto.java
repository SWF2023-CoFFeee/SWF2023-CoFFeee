package com.openpromt.coffeee.swf2023.openpromtserver.user.dto;

import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.dto.OwnTicketResponseDto;
import com.openpromt.coffeee.swf2023.openpromtserver.user.util.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {

    private Long userId;
    private String username;
    private Role role;
    private List<OwnTicketResponseDto> tickets;
}
