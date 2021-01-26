package com.huaxin.hx3d.web.home.service;

import com.huaxin.hx3d.web.home.model.EnergyInfo;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  能耗概况服务类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
public interface IEnergyInfoService extends IService<EnergyInfo> {
    /**
     * 获取能耗概况
     * @return
     */
    EnergyInfo getEnergyInfo();

    /**
     * 删除冗余数据
     */
    void delEnergyInfoRedundantData();
}
