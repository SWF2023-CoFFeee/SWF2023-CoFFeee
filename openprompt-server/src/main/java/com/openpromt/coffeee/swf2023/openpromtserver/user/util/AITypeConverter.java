package com.openpromt.coffeee.swf2023.openpromtserver.user.util;

import com.openpromt.coffeee.swf2023.openpromtserver.product.util.AIType;
import com.openpromt.coffeee.swf2023.openpromtserver.product.util.ProductType;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class AITypeConverter implements AttributeConverter<AIType, String> {

    @Override
    public String convertToDatabaseColumn(AIType attribute) {
        return attribute.getValue();
    }

    @Override
    public AIType convertToEntityAttribute(String dbData) {
        return AIType.ofCode(dbData);
    }
}
