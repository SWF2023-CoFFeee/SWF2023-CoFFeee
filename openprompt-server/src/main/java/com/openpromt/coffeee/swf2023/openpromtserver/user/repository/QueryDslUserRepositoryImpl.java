package com.openpromt.coffeee.swf2023.openpromtserver.user.repository;

import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.entity.OwnTicket;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

import static com.openpromt.coffeee.swf2023.openpromtserver.user.entity.QUser.user;
import static com.openpromt.coffeee.swf2023.openpromtserver.ownticket.entity.QOwnTicket.ownTicket;

@Slf4j
@RequiredArgsConstructor
public class QueryDslUserRepositoryImpl implements QueryDslUserRepository{

    private final JPAQueryFactory jpaQueryFactory;
    @Override
    public List<OwnTicket> ticketList(String username) {
        return jpaQueryFactory
                .select(ownTicket)
                .from(user)
                .where(user.username.eq(username))
                .fetch();
    }
}
