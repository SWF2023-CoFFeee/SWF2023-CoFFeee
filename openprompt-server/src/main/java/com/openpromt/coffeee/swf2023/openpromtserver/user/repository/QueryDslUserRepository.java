package com.openpromt.coffeee.swf2023.openpromtserver.user.repository;

import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.entity.OwnTicket;

import java.util.List;

public interface QueryDslUserRepository {
    List<OwnTicket> ticketList(String username);
}
