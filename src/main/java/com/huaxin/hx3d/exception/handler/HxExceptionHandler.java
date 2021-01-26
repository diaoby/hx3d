package com.huaxin.hx3d.exception.handler;

import com.huaxin.hx3d.exception.HxGenerelException;
import com.huaxin.hx3d.exception.enums.ExceptionEnum;
import com.huaxin.hx3d.exception.model.ResultBody;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.NoHandlerFoundException;

import javax.servlet.http.HttpServletRequest;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/16 8:26
 * @description：异常统一处理handler
 * @modified By：
 */
@RestControllerAdvice
@Slf4j
public class HxExceptionHandler {
    /**
     * 处理其他异常
     * @param req
     * @param e
     * @return
     */
    @ExceptionHandler(value =Exception.class)
    @ResponseBody
    public ResultBody exceptionHandler(HttpServletRequest req, Exception e){
        log.error("未知异常！原因是:",e);
        return ResultBody.error(ExceptionEnum.INTERNAL_SERVER_ERROR,e);
    }

    /**
     * 处理自定义的业务异常
     * @param req
     * @param e
     * @return
     */
    @ExceptionHandler(value = HxGenerelException.class)
    @ResponseBody
    public ResultBody hxGenerelExceptionHandler(HttpServletRequest req, HxGenerelException e){
        log.error("发生业务异常！原因是：{}",e.getErrorMsg());
        return ResultBody.error(e.getErrorCode(),e.getErrorMsg());
    }

    /**
     * 处理空指针的异常
     * @param req
     * @param e
     * @return
     */
    @ExceptionHandler(value =NullPointerException.class)
    @ResponseBody
    public ResultBody nullPointerExceptionHandler(HttpServletRequest req, NullPointerException e){
        log.error("发生空指针异常！原因是:",e);
        return ResultBody.error(ExceptionEnum.BODY_NOT_MATCH);
    }

    /***
     * 404处理
     * @param e
     * @return
     */
    @ExceptionHandler(NoHandlerFoundException.class)
    @ResponseBody
    public ResultBody notFountHandler(HttpServletRequest request,NoHandlerFoundException e){
        log.error("发生404异常！原因是:",e);
        return ResultBody.error(ExceptionEnum.NOT_FOUND);
    }
}
