package com.huaxin.hx3d.web.home.model;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/26 9:26
 * @description：温度面板
 * @modified By：
 */
@Data
@NoArgsConstructor
public class TemperatrueTest {
    //温度
    private Double tempValue;
    //设备状态
    private boolean tempStatus;
    //设备id
    private String id;
}
