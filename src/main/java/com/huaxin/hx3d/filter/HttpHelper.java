package com.huaxin.hx3d.filter;

import lombok.Cleanup;
import lombok.SneakyThrows;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.Charset;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/6 16:04
 * @description：用于读取Body
 * @modified By：
 */
public class HttpHelper {
    /**
     *
     * @param request
     * @return
     */
    @SneakyThrows(value = IOException.class)
    public static String getBodyString(HttpServletRequest request){
        StringBuilder sb = new StringBuilder();
        @Cleanup InputStream inputStream = request.getInputStream();
        @Cleanup BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, Charset.forName("UTF-8")));
        String line = "";
        while ((line = reader.readLine()) != null) {
            sb.append(line);
        }
        return sb.toString();
    }
}
