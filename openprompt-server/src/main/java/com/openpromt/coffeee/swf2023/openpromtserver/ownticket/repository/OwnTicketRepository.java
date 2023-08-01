package com.openpromt.coffeee.swf2023.openpromtserver.ownticket.repository;

import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.entity.OwnTicket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnTicketRepository extends JpaRepository<OwnTicket, Long>, QueryDslOwnTicketRepository {
}
