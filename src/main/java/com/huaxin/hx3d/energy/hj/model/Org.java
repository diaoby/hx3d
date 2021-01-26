package com.huaxin.hx3d.energy.hj.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/22 9:37
 * @description：场站信息
 * @modified By：
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
/**
 * 场站信息
 */
public class Org implements Serializable {
    //场站ID
    private String orgId;
    //场站名称
    private String orgName;
    //经度
    private String orgLongitude;
    //维度
    private String orgLatitude;
    //对应多个设备
    private List<Ponit> ponitList;
}
