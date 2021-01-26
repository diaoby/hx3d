package com.huaxin.hx3d.web.home.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.huaxin.hx3d.web.home.mapper.FireAlarmMapper;
import com.huaxin.hx3d.web.home.model.FireAlarm;
import com.huaxin.hx3d.web.home.service.IFireAlarmService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 *  火情告警服务实现类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@Service
public class FireAlarmServiceImpl extends ServiceImpl<FireAlarmMapper, FireAlarm> implements IFireAlarmService {
    /**
     * 一周 7天
     */
   private static  final int  NUM = 7;
    /**
     * 火情告警
     * @return
     */
    @Override
    public List<FireAlarm> getFireAlarmList() {
        QueryWrapper<FireAlarm> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("fire_alarm_day");
        List<FireAlarm> list = list(wrapper).stream().limit(NUM).collect(Collectors.toList());
        return list;
    }

    /**
     * 删除冗余数据
     */
    @Override
    public void delFireAlarmRedundantData() {
        //查询需要删除的冗余数据id list
        QueryWrapper<FireAlarm> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<FireAlarm> fireAlarmList = list(wrapper);
        if(null != fireAlarmList && fireAlarmList.size() > NUM) {
            List<String> delList = fireAlarmList.stream().skip(NUM).map(FireAlarm::getBoFireAlarmId).collect(Collectors.toList());
            if (null != delList && delList.size() > 0) {
                this.baseMapper.deleteBatchIds(delList);
            }
        }
    }
}
