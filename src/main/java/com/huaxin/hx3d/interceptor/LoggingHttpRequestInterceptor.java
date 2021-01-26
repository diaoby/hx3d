package com.huaxin.hx3d.interceptor;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;

import java.io.IOException;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/6 15:38
 * @description：拦截resttemplate 添加日志
 * @modified By：
 */
@Slf4j
public class LoggingHttpRequestInterceptor implements ClientHttpRequestInterceptor {
    /**
     *
     * @param httpRequest
     * @param body
     * @param execution
     * @return
     * @throws IOException
     */
    @Override
    public ClientHttpResponse intercept(HttpRequest httpRequest, byte[] body, ClientHttpRequestExecution execution) throws IOException {
        tranceRequest(httpRequest, body);
        ClientHttpResponse response = execution.execute(httpRequest, body);
        traceResponse(response);
        return response;
    }

    /**
     *
     * @param response
     */
    @SneakyThrows(value=IOException.class)
    private void traceResponse(ClientHttpResponse response) {
        log.info("============================response begin==========================================");
        log.info("Status code  : {}", response.getStatusCode());
        log.info("Status text  : {}", response.getStatusText());
        log.info("Headers      : {}", response.getHeaders());
//        log.info("Response body: {}", StreamUtils.copyToString(response.getBody(), Charset.defaultCharset()));
        log.info("=======================response end=================================================");
    }

    /**
     * 拦截请求
     * @param httpRequest
     * @param body
     */
    @SneakyThrows(value=IOException.class)
    private void tranceRequest(HttpRequest httpRequest, byte[] body) {
        log.info("======= request begin ========");
        log.info("uri : {}", httpRequest.getURI());
        log.info("method : {}", httpRequest.getMethod());
        log.info("headers : {}", httpRequest.getHeaders());
        log.info("request body : {}", new String(body, "UTF-8"));
        log.info("======= request end ========");
    }
}
