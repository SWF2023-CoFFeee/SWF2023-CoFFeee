package com.openpromt.coffeee.swf2023.openpromtserver.ownticket.repository;

import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.entity.OwnTicket;

import java.util.List;

public interface QueryDslOwnTicketRepository {
    List<OwnTicket> listByUsername(String username);
}
