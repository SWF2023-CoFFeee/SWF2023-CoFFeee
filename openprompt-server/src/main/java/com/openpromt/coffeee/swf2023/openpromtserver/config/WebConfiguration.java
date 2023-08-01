package com.openpromt.coffeee.swf2023.openpromtserver.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
//		System.out.println("CORS Setting");
//		default ����.
//		Allow all origins.
//		Allow "simple" methods GET, HEAD and POST.
//		Allow all headers.
//		Set max age to 1800 seconds (30 minutes).
        registry.addMapping("/**")
//                .allowedOriginPatterns("*")
                .allowedHeaders("*")
//                .allowCredentials(true)
                .allowedMethods("GET", "POST", "PUT", "PATCH", "OPTIONS")
                .allowedOrigins("http://localhost:3000","*")
//			.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "HEAD")
                .maxAge(1800);

    }


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

    }

}