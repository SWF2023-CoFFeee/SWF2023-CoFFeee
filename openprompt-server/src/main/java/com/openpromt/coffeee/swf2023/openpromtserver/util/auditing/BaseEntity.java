package com.openpromt.coffeee.swf2023.openpromtserver.util.auditing;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity {

    @CreatedDate // Entity가 생성되어 저장될 때 시간이 자동 저장
    private LocalDateTime CRE_DTTM;

    @LastModifiedDate // Entity의 값을 변경할 때 시간이 자동 저장
    private LocalDateTime UPD_DTTM;

    @CreatedBy
    private Long CRE_ID;

    @LastModifiedBy
    private Long UPD_ID;
}
