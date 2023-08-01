package com.openpromt.coffeee.swf2023.openpromtserver.user.service;


import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.dto.OwnTicketResponseDto;
import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.entity.OwnTicket;
import com.openpromt.coffeee.swf2023.openpromtserver.user.dto.JoinRequestDto;
import com.openpromt.coffeee.swf2023.openpromtserver.user.dto.LoginRequestDto;
import com.openpromt.coffeee.swf2023.openpromtserver.user.dto.LoginResponseDto;
import com.openpromt.coffeee.swf2023.openpromtserver.user.entity.User;
import com.openpromt.coffeee.swf2023.openpromtserver.user.repository.UserRepository;
import com.openpromt.coffeee.swf2023.openpromtserver.user.util.Role;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Transactional
@Service
public class UserService {

    private final UserRepository userRepository;

    public Long join(JoinRequestDto requestDto){
        String rawPassword = requestDto.getPassword();
        String encPassword = rawPassword;
        requestDto.setEncPassword(encPassword);
        requestDto.setRole(Role.USER);
        User user = userRepository.save(requestDto.toEntity());

        return user.getUserId();
    }

    public LoginResponseDto login(LoginRequestDto requestDto, HttpServletResponse httpServletResponse) throws NoSuchFieldException {
        User user = userRepository.findByUsername(requestDto.getUsername()).orElseThrow(()->new NoSuchFieldException("잘못된 계정정보입니다."));
        if(!requestDto.getPassword().equals(user.getPassword()))
            throw new NoSuchFieldException();
        return LoginResponseDto.builder()
                .user_id(user.getUserId())
                .username(user.getUsername())
                .role(user.getRole())
//                .token(jwtProvider.createToken(user.getUsername(), user.getRole()))
                .build();
    }

    public List<OwnTicketResponseDto> getTicketsByUsername(String username){
        List<OwnTicket> tickets = userRepository.ticketList(username);
        return OwnTicketResponseDto.convertToDtoList(tickets);
    }

}
