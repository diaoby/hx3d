package com.huaxin.hx3d.event;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEvent;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/21 14:55
 * @description：事件基类
 * @modified By：
 */
@Slf4j
public class BaseEvent<T> extends ApplicationEvent {
    /**
     * 事件类型
     */
    private String eventType;
    /**
     * 传递T类型对象数据
     */
    private T t;

    /**
     *
     * @param eventType
     * @param t
     */
    public BaseEvent(Object source,String eventType, T t) {
        super(source);
        this.eventType = eventType;
        this.t = t;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public T getT() {
        return t;
    }

    public void setT(T t) {
        this.t = t;
    }
}
