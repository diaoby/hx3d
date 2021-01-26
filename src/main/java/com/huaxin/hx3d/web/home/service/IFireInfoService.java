package com.huaxin.hx3d.web.home.service;

import com.huaxin.hx3d.web.home.model.FireInfo;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  消防概况服务类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
public interface IFireInfoService extends IService<FireInfo> {
    /**
     * 获取消防概况
     * @return
     */
    FireInfo getFireInfo();

    /**
     * 删除冗余数据
     */
    void delFireInfoRedundantData();
}
