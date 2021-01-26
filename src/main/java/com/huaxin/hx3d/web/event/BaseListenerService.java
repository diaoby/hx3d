package com.huaxin.hx3d.web.event;

import com.huaxin.hx3d.event.BaseEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.util.Iterator;
import java.util.Map;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/21 16:21
 * @description：事件监听基类
 * @modified By：
 */
@Component
public class BaseListenerService {
    /**
     *
     */
    @Autowired
    private ApplicationContext applicationContext;

    /**
     * BaseEvent任务监听触发  ---异步触发
     * @param baseEvent
     */
    @EventListener
    @Async
    public void process(BaseEvent baseEvent){
        Map<String, ISpringEventService> springEventServices = applicationContext.getBeansOfType(ISpringEventService.class);
        Iterator<Map.Entry<String, ISpringEventService>> iterator = springEventServices.entrySet().iterator();
        String eventType = baseEvent.getEventType();
        while(iterator.hasNext()) {
            Map.Entry<String, ISpringEventService> entry = iterator.next();
            ISpringEventService iSpringEventService = entry.getValue();
            if(eventType.equals(iSpringEventService.getEventType())) {
                iSpringEventService.eventProcess(baseEvent);
                break;
            }
        }
        commonProcess(baseEvent);
    }

    /**
     * 抽取公共部分，统一处理
     * @param baseEvent
     * @author diaoby
     */
    private void commonProcess(BaseEvent baseEvent) {

    }

}
