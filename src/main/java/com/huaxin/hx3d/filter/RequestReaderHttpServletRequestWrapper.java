package com.huaxin.hx3d.filter;

import lombok.SneakyThrows;

import javax.servlet.ReadListener;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/6 16:16
 * @description：防止流丢失
 * @modified By：
 */
public class RequestReaderHttpServletRequestWrapper extends HttpServletRequestWrapper {
    /**
     *
     */
    private final byte[] body;
    /**
     *  @param request
     */
    public RequestReaderHttpServletRequestWrapper(HttpServletRequest request) {
        super(request);
        this.body = HttpHelper.getBodyString(request).getBytes(Charset.forName("UTF-8"));
    }

    /**
     *
     * @return
     */
    @SneakyThrows(value=IOException.class)
    @Override
    public BufferedReader getReader() {
        return new BufferedReader(new InputStreamReader(getInputStream()));
    }

    /**
     *
     * @return
     * @throws IOException
     */
    @Override
    public ServletInputStream getInputStream() throws IOException {
        final ByteArrayInputStream bais = new ByteArrayInputStream(body);
        return new ServletInputStream(){

            @Override
            public int read() throws IOException {
                return bais.read();
            }

            @Override
            public boolean isFinished() {
                return false;
            }

            @Override
            public boolean isReady() {
                return false;
            }

            @Override
            public void setReadListener(ReadListener readListener) {

            }
        };
    }
}
