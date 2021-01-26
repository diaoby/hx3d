package com.huaxin.hx3d.exception.model;

import com.alibaba.fastjson.JSONObject;
import com.huaxin.hx3d.exception.BaseExceptionInfoInterface;
import com.huaxin.hx3d.exception.enums.ExceptionEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/16 9:08
 * @description：消息体
 * @modified By：
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResultBody {
    /**
     * 响应代码
     */
    private String code;

    /**
     * 响应消息
     */
    private String message;

    /**
     * 响应结果
     */
    private Object result;

    /**
     *
     * @param baseExceptionInfoInterface
     */
    public ResultBody(BaseExceptionInfoInterface baseExceptionInfoInterface) {
        this.code = baseExceptionInfoInterface.getResultCode();
        this.message = baseExceptionInfoInterface.getResultMsg();
    }

    /**
     * 成功
     *
     * @return
     */
    public static ResultBody success() {
        return success(ExceptionEnum.SUCCESS);
    }

    /**
     * 成功
     * @param data
     * @return
     */
    public static ResultBody success(Object data) {
        return error(ExceptionEnum.SUCCESS.getResultCode(),ExceptionEnum.SUCCESS.getResultMsg(),data);
    }

    /**
     * 失败
     */
    public static ResultBody error(BaseExceptionInfoInterface baseExceptionInfoInterface,Exception e) {
        return error(baseExceptionInfoInterface.getResultCode(),baseExceptionInfoInterface.getResultMsg(),e.getMessage());
    }

    /**
     * 失败
     */
    public static ResultBody error(BaseExceptionInfoInterface baseExceptionInfoInterface) {
        return error(baseExceptionInfoInterface,null);
    }

    /**
     * 失败
     */
    public static ResultBody error(String code, String message) {
        return error(code,message,"失败");
    }

    /**
     * 失败
     */
    public static ResultBody error( String message) {
        ResultBody rb = new ResultBody();
        return error("-1",message,"失败");
    }

    /**
     * 失败
     */
    public static ResultBody error(String code, String message,Object result) {
        ResultBody rb = new ResultBody();
        rb.setCode(code);
        rb.setMessage(message);
        rb.setResult(result);
        return rb;
    }


    /**
     *
     * @return
     */
    @Override
    public String toString() {
        return JSONObject.toJSONString(this);
    }

}
