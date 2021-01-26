package com.huaxin.hx3d.config;

import com.huaxin.hx3d.filter.HttpServletRequestReplacedFilter;
import com.huaxin.hx3d.interceptor.LoggingHttpRequestInterceptor;
import com.huaxin.hx3d.messageconverter.HxMappingJackson2HttpMessageConverter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import java.util.List;


/**
 * @author ：diaoby
 * @date ：Created in 2021/1/6 8:35
 * @description：spring RestTemplate配置类
 * @modified By：
 */
@Configuration
public class RestTemplateConfig {
    /**
     *
     */
    private static final int READ_TIME_OUT = 5000;
    /**
     *
     */
    private static final int CONNECT_TIME_OUT = 15000;


    @Bean
    public RestTemplate restTemplate(ClientHttpRequestFactory factory){
        RestTemplate restTemplate = new RestTemplate(factory);
        restTemplate.getInterceptors().add(new LoggingHttpRequestInterceptor());
        restTemplate.getMessageConverters().add(new HxMappingJackson2HttpMessageConverter());
//        restTemplate.getInterceptors().add(new BasicAuthenticationInterceptor("guguofeng","Hxpti@123"));
        return restTemplate;
    }

    /**
     *
     * @return
     */
    @Bean
    public ClientHttpRequestFactory simpleClientHttpRequestFactory(){
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setReadTimeout(READ_TIME_OUT);
        factory.setConnectTimeout(CONNECT_TIME_OUT);
        return  factory;
    }

    /**
     *
     * @return
     */
    @Bean
    public FilterRegistrationBean httpServletRequestReplacedRegistration() {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(new HttpServletRequestReplacedFilter());
        registration.addUrlPatterns("/*");
        registration.addInitParameter("paramName", "paramValue");
        registration.setName("httpServletRequestReplacedFilter");
        registration.setOrder(1);
        return registration;
    }

}
