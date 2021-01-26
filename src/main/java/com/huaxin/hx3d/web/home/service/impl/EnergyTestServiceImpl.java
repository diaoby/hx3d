package com.huaxin.hx3d.web.home.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.huaxin.hx3d.web.home.model.EnergyInfo;
import com.huaxin.hx3d.web.home.model.EnergyTest;
import com.huaxin.hx3d.web.home.mapper.EnergyTestMapper;
import com.huaxin.hx3d.web.home.service.IEnergyTestService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.huaxin.hx3d.web.vo.EnergyTestVo;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-22
 */
@Service
public class EnergyTestServiceImpl extends ServiceImpl<EnergyTestMapper, EnergyTest> implements IEnergyTestService {
    /**
     *  设备数量
     */
    private static  final int  NUM = 4;
    /**
     *
     * @return
     */
    @Override
    public EnergyTestVo getEnergyTestVO() {
        QueryWrapper<EnergyTest> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<EnergyTest> energyTestList = list(wrapper);
        List<EnergyTest> collect = new ArrayList<>();
        if(null != energyTestList && energyTestList.size() > 0 ) {
            collect = energyTestList.stream().limit(NUM).collect(Collectors.toList());
        }
        double count = collect.stream().mapToDouble(EnergyTest::getEnergyNum).sum();
        EnergyTestVo ev = EnergyTestVo.builder().energyTestsList(collect).totalEnergy(count).build();
        return ev;
    }
}
