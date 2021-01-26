package com.huaxin.hx3d.web.user.service;

import com.huaxin.hx3d.web.user.model.User;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-13
 */
public interface IUserService extends IService<User> {
   void publishUserEvent();
}
