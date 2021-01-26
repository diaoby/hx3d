package com.huaxin.hx3d.web.home.service;

import com.huaxin.hx3d.web.home.model.EnviromentInfo;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  获取环境概况服务类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
public interface IEnviromentInfoService extends IService<EnviromentInfo> {
    /**
     * 获取获取环境概况
     * @return
     */
    EnviromentInfo getEnviromentInfo();

    /**
     * 删除环境概况删除冗余数据
     */
    void delEnviromentInfoRedundantData();
}
