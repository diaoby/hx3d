package com.huaxin.hx3d.web.home.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.huaxin.hx3d.web.home.mapper.EnergyInfoMapper;
import com.huaxin.hx3d.web.home.model.EnergyInfo;
import com.huaxin.hx3d.web.home.service.IEnergyInfoService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@Service
public class EnergyInfoServiceImpl extends ServiceImpl<EnergyInfoMapper, EnergyInfo> implements IEnergyInfoService {
    /**
     * 获取能耗概况
     * @return
     */
    @Override
    public EnergyInfo getEnergyInfo() {
        QueryWrapper<EnergyInfo> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<EnergyInfo> energyInfoList = list(wrapper);
        if(null != energyInfoList && energyInfoList.size() > 0){
            return energyInfoList.get(0);
        }
        return new EnergyInfo();
    }

    /**
     * 删除冗余数据
     */
    @Override
    public void delEnergyInfoRedundantData() {
        //查询需要删除的冗余数据id list
        QueryWrapper<EnergyInfo> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<EnergyInfo> energyInfoList = list(wrapper);
        if(null != energyInfoList && energyInfoList.size() > 1) {
            List<String> delList = energyInfoList.stream().skip(1).map(EnergyInfo::getBoEnergyInfoId).collect(Collectors.toList());
            if (null != delList && delList.size() > 0) {
                this.baseMapper.deleteBatchIds(delList);
            }
        }
    }
}
