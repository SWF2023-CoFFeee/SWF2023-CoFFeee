package com.openpromt.coffeee.swf2023.openpromtserver.product.controller;

import com.openpromt.coffeee.swf2023.openpromtserver.product.dto.GetProductDetailResponse;
import com.openpromt.coffeee.swf2023.openpromtserver.product.dto.GetProductListResponse;
import com.openpromt.coffeee.swf2023.openpromtserver.product.dto.RegistProductRequest;
import com.openpromt.coffeee.swf2023.openpromtserver.product.service.ProductService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import java.security.spec.InvalidKeySpecException;
import java.util.List;


@Slf4j
@RequiredArgsConstructor
@RestController()
@Api("ProductApi : GetProductList, GetProductDetail, BuyCopyright, BuyTicket")
public class ProductApiController {


    private final ProductService productService;

    @ApiOperation(value = "PLP", notes = "Product-type을 parameter로 받아 리스트 리턴")
    @GetMapping("/product")
    public List<GetProductListResponse> getProductListByProductType(@RequestParam String product_type){

       return productService.getProductListByProductType(product_type);
    }

    @ApiOperation(value = "PDP", notes = "ProductId를 Pathvariable로 입력받아 detail 리턴")
    @GetMapping("/product/{productId}")
    public GetProductDetailResponse getProductDetail(@PathVariable("productId") Long product_id){
        return productService.getProductDetail(product_id);
    }

    @ApiOperation(value = "저작권 구매", notes = "product_id를 parameter로 입력받아 저작권 구매(cid 리턴)")
    @PatchMapping("/product/copyright")
    public String buyCopyright(@RequestParam String username, @RequestParam Long product_id) throws NoSuchPaddingException, IllegalBlockSizeException, NoSuchAlgorithmException, InvalidKeySpecException, IOException, BadPaddingException, InvalidKeyException, ClassNotFoundException {
        return productService.buyCopyright(product_id,username);
    }

    @PostMapping("/product/ticket")
    @ApiOperation(value = "사용권 구매", notes = "product_id를 parameter로 입력받아 사용권 구매(리턴 x)")
    public ResponseEntity<?> buyTicket(@RequestParam String username, @RequestParam Long product_id){
        productService.buyTicket(product_id,username);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    /**
     * 사용권, 저작권 판매 등록 필요
     */

    @PostMapping("/product")
    @ApiOperation(value = "Product 등록", notes = "product_id를 parameter로 입력받아 사용권 구매(리턴 x)")
    public void registProduct(@RequestPart(name ="thumbnail",required=false) MultipartFile file, @ModelAttribute  RegistProductRequest request)  throws IOException {
        productService.registerProduct(request,file);
        return;
    }
}
