package com.huaxin.hx3d.energy.hj.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/22 9:55
 * @description：设备数据
 * @modified By：
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
/**
 * 设备信息
 */
public class PonitData implements Serializable {
    private String id;//计量点id
    private String name;//计量点名称
    private String date;//时间
    private double zxyg ;//	电量正向有功
    private double fxyg	;//	电量反向有功
    private double zxwg	;//	电量正向无功
    private double fxwg	;//	电量反向无功
    private double currentA	;//	电流A相
    private double currentB	;//	电流B相
    private double currentC	;//	电流C相
    private double voltageA	;//	电压A相
    private double voltageB	;//	电压B相
    private double voltageC	;//	电压C相
    private double factor	;//	功率因数
    private double powerYG	;//	有功功率
    private double powerWG	;//	无功功率
}
