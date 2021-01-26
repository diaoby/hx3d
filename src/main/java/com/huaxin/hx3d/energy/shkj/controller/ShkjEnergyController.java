package com.huaxin.hx3d.energy.shkj.controller;

import com.alibaba.fastjson.JSONObject;
import com.huaxin.hx3d.energy.shkj.service.ShkjEnergyService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/23 15:37
 * @description：索恒科技
 * @modified By：
 */
@RestController
@Slf4j
@RequestMapping("/energy/shkj")
@Api(tags = { "索恒科技API" })
public class ShkjEnergyController {

    /**
     *
     */
    @Autowired
    private ShkjEnergyService shkjEnergyService;

    /**
     *查询电表实时数据
     * @return
     */
    @RequestMapping("/queryelectric/{codes}")
    @ApiOperation(value = "查询电表实时数据", notes = "查询电表实时数据")
    public JSONObject queryElectric(@PathVariable(name = "codes") String codes) {
        return shkjEnergyService.queryElectric(codes);
    }

    /**
     *查询水表实时数据
     * @return
     */
    @RequestMapping("/querywatermeter/{codes}")
    @ApiOperation(value = "查询水表实时数据", notes = "查询水表实时数据")
    public JSONObject queryWaterMeter(@PathVariable(name = "codes") String codes) {
        return shkjEnergyService.queryWaterMeter(codes);
    }

    /**
     *查询热量表实时数据
     * @return
     */
    @RequestMapping("/querycoldheatmeter/{codes}")
    @ApiOperation(value = "查询热量表实时数据", notes = "查询热量表实时数据")
    public JSONObject queryColdHeatMeter(@PathVariable(name = "codes") String codes) {
        return shkjEnergyService.queryColdHeatMeter(codes);
    }

}
