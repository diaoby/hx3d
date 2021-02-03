package com.huaxin.hx3d.web.home.service;

import com.huaxin.hx3d.web.home.model.WindowInfo;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author diaoby
 * @since 2021-02-03
 */
public interface IWindowInfoService extends IService<WindowInfo> {

    WindowInfo getWindow();
}
