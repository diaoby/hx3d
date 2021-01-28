package com.huaxin.hx3d.config;

import com.huaxin.hx3d.filter.HttpServletRequestReplacedFilter;
import com.huaxin.hx3d.interceptor.LoggingHttpRequestInterceptor;
import com.huaxin.hx3d.messageconverter.HxMappingJackson2HttpMessageConverter;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;


/**
 * @author ：diaoby
 * @date ：Created in 2021/1/6 8:35
 * @description：spring RestTemplate配置类
 * @modified By：
 */
@Configuration
public class RestTemplateConfig {

    /**
     * 服务器返回数据(response)的时间，超过该时间抛出read timeout
     */
    private static final int SOCKET_TIME_OUT = 10000;
    /**
     * 从连接池中获取连接的超时时间，超过该时间未拿到可用连接，
     * 会抛出org.apache.http.conn.ConnectionPoolTimeoutException:
     *  Timeout waiting for connection from pool
     */
    private static final int CONNECTION_REQUEST_TIME_OUT = 1000;
    /**
     * 连接上服务器(握手成功)的时间，超出该时间抛出connect timeout
     */
    private static final int CONNECT_TIME_OUT = 5000;

    /**
     * 连接池最大连接数
     */
    private static final int MAX_TOTAL = 200;
    /**
     * 默认最大路由
     */
    private static final int DEFAULT_MAX_PERROUTE = 100;


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
        HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory(httpClient());
        return  factory;
    }

    /**
     * http链接池
     * 服务器返回数据(response)的时间，超过该时间抛出read timeout
     * @return
     */
    @Bean
    public HttpClient httpClient() {
        Registry<ConnectionSocketFactory> registry = RegistryBuilder.<ConnectionSocketFactory>create()
                .register("http", PlainConnectionSocketFactory.getSocketFactory())
                .register("https", SSLConnectionSocketFactory.getSocketFactory())
                .build();
        PoolingHttpClientConnectionManager connectionManager = new PoolingHttpClientConnectionManager(registry);
        //设置整个连接池最大连接数 根据自己的场景决定
        connectionManager.setMaxTotal(MAX_TOTAL);
        //路由是对maxTotal的细分
        connectionManager.setDefaultMaxPerRoute(DEFAULT_MAX_PERROUTE);
        RequestConfig requestConfig = RequestConfig.custom()
                .setSocketTimeout(SOCKET_TIME_OUT) //服务器返回数据(response)的时间，超过该时间抛出read timeout
                .setConnectTimeout(CONNECT_TIME_OUT)//连接上服务器(握手成功)的时间，超出该时间抛出connect timeout
                .setConnectionRequestTimeout(CONNECTION_REQUEST_TIME_OUT)//从连接池中获取连接的超时时间，超过该时间未拿到可用连接，会抛出org.apache.http.conn.ConnectionPoolTimeoutException: Timeout waiting for connection from pool
                .build();
        return HttpClientBuilder.create()
                .setDefaultRequestConfig(requestConfig)
                .setConnectionManager(connectionManager)
                .build();
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
