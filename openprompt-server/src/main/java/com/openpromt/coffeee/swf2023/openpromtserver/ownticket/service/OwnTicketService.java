package com.openpromt.coffeee.swf2023.openpromtserver.ownticket.service;

import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.dto.OwnTicketResponseDto;
import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.entity.OwnTicket;
import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.repository.OwnTicketRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Transactional
@Service
public class OwnTicketService {

    private final OwnTicketRepository ownTicketRepository;

    public List<OwnTicketResponseDto> getTicketsByUsername(String username){
        List<OwnTicket> tickets = ownTicketRepository.listByUsername(username);
        return OwnTicketResponseDto.convertToDtoList(tickets);
    }
}
