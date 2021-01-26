package com.huaxin.hx3d.web.home.service;

import com.huaxin.hx3d.web.home.model.FireAlarm;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  火情告警服务类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
public interface IFireAlarmService extends IService<FireAlarm> {
    /**
     * 火情告警
     * @return
     */
    List<FireAlarm> getFireAlarmList();

    /**
     * 删除冗余数据
     */
    void delFireAlarmRedundantData();
}
