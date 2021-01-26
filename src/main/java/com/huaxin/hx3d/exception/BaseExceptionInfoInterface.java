package com.huaxin.hx3d.exception;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/16 8:26
 * @description：异常接口
 * @modified By：
 */
public interface BaseExceptionInfoInterface {
    /** 错误码*/
    String getResultCode();

    /** 错误描述*/
    String getResultMsg();
}
