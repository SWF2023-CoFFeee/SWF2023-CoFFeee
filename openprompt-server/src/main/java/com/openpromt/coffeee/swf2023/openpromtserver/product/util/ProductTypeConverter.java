package com.openpromt.coffeee.swf2023.openpromtserver.product.util;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class ProductTypeConverter implements AttributeConverter<ProductType, String> {

    @Override
    public String convertToDatabaseColumn(ProductType attribute) {
        return attribute.getValue();
    }

    @Override
    public ProductType convertToEntityAttribute(String dbData) {
        return ProductType.ofCode(dbData);
    }
}
