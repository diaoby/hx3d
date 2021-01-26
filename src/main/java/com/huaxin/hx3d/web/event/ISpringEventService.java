package com.huaxin.hx3d.web.event;

import com.huaxin.hx3d.event.BaseEvent;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/21 16:14
 * @description：spring事件接口
 * @modified By：
 */
public interface ISpringEventService {
    /**
     * 获取事件类型,决定由哪个业务处理
     * @return
     */
    String getEventType();

    /**
     * 事件处理
     */
    void eventProcess(BaseEvent<?> baseEvent);

}
