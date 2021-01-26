package com.huaxin.hx3d.exception;

import lombok.Data;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/16 9:03
 * @description：自定义异常类
 * @modified By：
 */
@Data
public class HxGenerelException extends RuntimeException{
    /**
     * 错误码
     */
    protected String errorCode;
    /**
     * 错误信息
     */
    protected String errorMsg;

    /**
     *
     */
    public HxGenerelException() {
        super();
    }

    /**
     *
     * @param baseExceptionInfoInterface
     */
    public HxGenerelException(BaseExceptionInfoInterface baseExceptionInfoInterface) {
        super(baseExceptionInfoInterface.getResultCode());
        this.errorCode = baseExceptionInfoInterface.getResultCode();
        this.errorMsg = baseExceptionInfoInterface.getResultMsg();
    }

    /**
     *
     * @param baseExceptionInfoInterface
     * @param cause
     */
    public HxGenerelException(BaseExceptionInfoInterface baseExceptionInfoInterface, Throwable cause) {
        super(baseExceptionInfoInterface.getResultCode(), cause);
        this.errorCode = baseExceptionInfoInterface.getResultCode();
        this.errorMsg = baseExceptionInfoInterface.getResultMsg();
    }

    /**
     *
     * @param errorMsg
     */
    public HxGenerelException(String errorMsg) {
        super(errorMsg);
        this.errorMsg = errorMsg;
    }

    /**
     *
     * @param errorCode
     * @param errorMsg
     */
    public HxGenerelException(String errorCode, String errorMsg) {
        super(errorCode);
        this.errorCode = errorCode;
        this.errorMsg = errorMsg;
    }

    /**
     *
     * @param errorCode
     * @param errorMsg
     * @param cause
     */
    public HxGenerelException(String errorCode, String errorMsg, Throwable cause) {
        super(errorCode, cause);
        this.errorCode = errorCode;
        this.errorMsg = errorMsg;
    }

    /**
     *
     * @return
     */
    @Override
    public Throwable fillInStackTrace() {
        return this;
    }

}
