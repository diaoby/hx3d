package com.huaxin.hx3d.config;

import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/13 14:06
 * @description：mybatisplus分页插件MybatisPlusConfig
 * @modified By：
 */
@Configuration
public class MybatisPlusConfig {
    /**
     * 分页插件
     */
    @Bean
    public PaginationInterceptor paginationInterceptor() {
        return new PaginationInterceptor();
    }
}
