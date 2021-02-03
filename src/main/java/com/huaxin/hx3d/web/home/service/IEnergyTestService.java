package com.huaxin.hx3d.web.home.service;

import com.alibaba.fastjson.JSONObject;
import com.huaxin.hx3d.web.home.model.EnergyTest;
import com.baomidou.mybatisplus.extension.service.IService;
import com.huaxin.hx3d.web.home.model.TemperatrueTest;
import com.huaxin.hx3d.web.vo.EnergyTestVo;

import java.util.List;

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

    /**
     *
     * @return
     */
    TemperatrueTest getTemperatrue(String id);

    /**
     * 控制类
     * @param method
     * @param id
     * @param value
     * @return
     */
    JSONObject invokemethod(String method, String id, String value);

    /**
     * 测试数据
     * @return
     */
    List getList();
}
