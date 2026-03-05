package com.nkignis;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.nkignis.mapper")
public class NkIgnisApplication {

    public static void main(String[] args) {
        SpringApplication.run(NkIgnisApplication.class, args);
    }
}
