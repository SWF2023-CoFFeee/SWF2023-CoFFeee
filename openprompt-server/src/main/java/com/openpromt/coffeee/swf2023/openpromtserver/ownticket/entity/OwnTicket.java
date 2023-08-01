package com.openpromt.coffeee.swf2023.openpromtserver.ownticket.entity;

import com.openpromt.coffeee.swf2023.openpromtserver.copyright.entity.Copyright;
import com.openpromt.coffeee.swf2023.openpromtserver.ownticket.dto.OwnTicketResponseDto;
import com.openpromt.coffeee.swf2023.openpromtserver.product.entity.Product;
import com.openpromt.coffeee.swf2023.openpromtserver.user.entity.User;
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
public class OwnTicket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long own_id;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="userId")
    private User userId;

    @OneToOne
    @JoinColumn(name = "copyrightId")
    private Copyright copyrightId;

    public OwnTicket(User buyer, Copyright copyright_id) {
        this.userId = buyer;
        this.copyrightId = copyright_id;
    }

    public static OwnTicketResponseDto convertToDto(OwnTicket ownTicket){
        return OwnTicketResponseDto.builder()
                .own_id(ownTicket.getOwn_id())
                .userId(ownTicket.getUserId())
                .copyrightId(Copyright.convertToDto(ownTicket.getCopyrightId()))
                .build();
    }
}
