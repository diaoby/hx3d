package com.huaxin.hx3d.web.vo;

import com.huaxin.hx3d.web.home.model.EnergyTest;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/22 14:08
 * @description：能源测试返回数据
 * @modified By：
 */
@Data
@Builder
public class EnergyTestVo {
    /**
     * 总能耗
     */
    private Double totalEnergy;
    /**
     * 所有设备能耗数据
     */
    private List<EnergyTest> energyTestsList;
}
