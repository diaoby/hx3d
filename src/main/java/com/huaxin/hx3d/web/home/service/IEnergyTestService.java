package com.huaxin.hx3d.web.home.service;

import com.huaxin.hx3d.web.home.model.EnergyTest;
import com.baomidou.mybatisplus.extension.service.IService;
import com.huaxin.hx3d.web.vo.EnergyTestVo;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-22
 */
public interface IEnergyTestService extends IService<EnergyTest> {
    /**
     *
     * @return
     */
    EnergyTestVo getEnergyTestVO();
}
