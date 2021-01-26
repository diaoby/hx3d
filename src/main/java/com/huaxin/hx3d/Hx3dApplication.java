package com.huaxin.hx3d;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@SpringBootApplication
@MapperScan(value = {"com.huaxin.hx3d.web.*.mapper"})  //mybatis 需要扫描mapper接口 dao层
@EnableWebMvc
@EnableTransactionManagement    //启用事务管理
public class Hx3dApplication {

    public static void main(String[] args) {
        SpringApplication.run(Hx3dApplication.class, args);
    }

}
