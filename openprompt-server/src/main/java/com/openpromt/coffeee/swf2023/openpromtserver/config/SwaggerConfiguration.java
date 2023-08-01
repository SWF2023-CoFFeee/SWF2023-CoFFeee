package com.openpromt.coffeee.swf2023.openpromtserver.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.Contact;
import springfox.documentation.service.Parameter;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
@EnableSwagger2
public class SwaggerConfiguration {
    @Bean
    public Docket apiV1() {
        List<Parameter> globalParameters = new ArrayList<>();
        globalParameters.add(new ParameterBuilder()
                .name("Cookie") // Cookie 이름 설정
                .defaultValue("access_token={access_token_value}") // 기본 값 설정 (임의의 값으로 변경)
                .parameterType("cookie")
                .modelRef(new ModelRef("string"))
                .build());

        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())

//                        basePackage("com.hanjan.user"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(apiInfo());
    }


    private ApiInfo apiInfo() {
        return new ApiInfo(
                "Coffeee",
                "Seoul Web3.0 Festival",
                "version1.0",
                "",
                new Contact("Contact Me", "", ""),
                "Edit Licenses",
                "",
                new ArrayList<>()
        );
    }

}
