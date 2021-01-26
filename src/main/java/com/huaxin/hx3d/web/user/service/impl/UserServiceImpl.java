package com.huaxin.hx3d.web.user.service.impl;

import com.huaxin.hx3d.event.BaseEvent;
import com.huaxin.hx3d.web.event.ISpringEventService;
import com.huaxin.hx3d.web.user.model.User;
import com.huaxin.hx3d.web.user.mapper.UserMapper;
import com.huaxin.hx3d.web.user.service.IUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;


/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-13
 */
@Service
@Slf4j
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService, ISpringEventService {
    /**
     * spring事件发布对象
     */
    @Autowired
    private ApplicationContext applicationContext;
    /**
     * 发布
     */
    public void publishUserEvent(){
        User user = User.builder().userId(100).userName("zhangshan").age(10).password("123456").build();
        BaseEvent baseEvent = new BaseEvent(this,"USER",user);
        log.info("publishUserEvent");
        applicationContext.publishEvent(baseEvent);
    }

    /**
     *
     * @return
     */
    @Override
    public String getEventType() {
        return "USER";
    }

    /**
     * 事件处理
     * @param baseEvent
     */
    @Override
    public void eventProcess(BaseEvent<?> baseEvent) {
        User user = (User) baseEvent.getT();
        log.info(user.toString());
    }
}
