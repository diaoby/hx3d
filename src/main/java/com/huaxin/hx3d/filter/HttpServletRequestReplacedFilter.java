package com.huaxin.hx3d.filter;

import lombok.SneakyThrows;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/6 16:21
 * @description：过滤器
 * @modified By：
 */
public class HttpServletRequestReplacedFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    @SneakyThrows
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) {
        ServletRequest requestWrapper = null;
        if(request instanceof HttpServletRequest) {
            requestWrapper = new RequestReaderHttpServletRequestWrapper((HttpServletRequest) request);
        }
        //获取请求中的流如何，将取出来的字符串，再次转换成流，然后把它放入到新request对象中。
        // 在chain.doFiler方法中传递新的request对象
        if(requestWrapper == null) {
            filterChain.doFilter(request, response);
        } else {
            filterChain.doFilter(requestWrapper, response);
        }

    }

    @Override
    public void destroy() {

    }
}
