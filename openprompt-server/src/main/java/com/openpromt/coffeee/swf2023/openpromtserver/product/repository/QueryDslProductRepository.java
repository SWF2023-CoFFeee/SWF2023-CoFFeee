package com.openpromt.coffeee.swf2023.openpromtserver.product.repository;

import com.openpromt.coffeee.swf2023.openpromtserver.product.entity.Product;
import com.openpromt.coffeee.swf2023.openpromtserver.product.util.ProductType;

import java.util.List;

public interface QueryDslProductRepository {

    List<Product> findListByProductType(ProductType product_type);

    List<Product> findListByCopyright_Id(Long copyright_id);
}
