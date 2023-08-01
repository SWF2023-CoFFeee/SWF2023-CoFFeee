package com.openpromt.coffeee.swf2023.openpromtserver.product.repository;

import com.openpromt.coffeee.swf2023.openpromtserver.copyright.entity.Copyright;
import com.openpromt.coffeee.swf2023.openpromtserver.product.dto.GetProductDetailResponse;
import com.openpromt.coffeee.swf2023.openpromtserver.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findAllByProductType(String product_type);

    List<Product> findAllByCopyrightId(Copyright copyrightId);
}