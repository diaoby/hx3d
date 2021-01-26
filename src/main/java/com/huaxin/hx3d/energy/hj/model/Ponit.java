package com.huaxin.hx3d.energy.hj.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/22 9:41
 * @description：设置信息
 * @modified By：
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
/**
 * 设备信息
 */
public class Ponit implements Serializable {
    private String pointId;//计量ID(用于调用数据源)
    private String pointName;//计量名称
    private String pointType;//计量类型
    private String pointModel;//型号
    private String deviceId;//设备id
    private String deviceName;//设备名称
    private String deviceType;//设备类型
    private String deviceModel;//设备型号
    private String deviceNumber;//序列号
    private String ctm;
    private String ctd;
    private String vtm;
    private String vtd;
    private String deviceAddress;//通讯地址
    private String deviceStatute;//规约
    private String timeOffset;//采集间隔
    private List<PonitData> ponitDataList;
}
