package com.openpromt.coffeee.swf2023.openpromtserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class OpenpromtServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(OpenpromtServerApplication.class, args);
    }

}
