package com.huaxin.hx3d.web.home.controller;


import com.alibaba.fastjson.JSONObject;
import com.huaxin.hx3d.web.home.model.TemperatrueTest;
import com.huaxin.hx3d.web.home.service.IEnergyTestService;
import com.huaxin.hx3d.web.vo.EnergyTestVo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author diaoby
 * @since 2021-01-22
 */
@RestController
@RequestMapping("/web/home/energytest")
@Api(tags = { "能耗测试" })
@Slf4j
public class EnergyTestController {
    /**
     *
     */
    @Autowired
    private IEnergyTestService iEnergyTestService;

    /**
     * 测试
     * @return
     */
    @RequestMapping("/getlist")
    @ApiOperation(value = "测试", notes = "测试")
    @CrossOrigin
    public List getList(){
        return iEnergyTestService.getList();
    }

    /**
     * 获取能耗概况
     * @return
     */
    @RequestMapping("/getenergytest")
    @ApiOperation(value = "获取能耗概况", notes = "获取能耗概况")
    @CrossOrigin
    public EnergyTestVo getEnergyTestVO(){
        return iEnergyTestService.getEnergyTestVO();
    }

    /**
     * 获取设备温度信息
     * @return
     */
    @RequestMapping("/gettemperatrue/{id}")
    @ApiOperation(value = "获取设备温度信息", notes = "获取设备温度信息")
    @CrossOrigin
    public TemperatrueTest getTemperatrue(@PathVariable(name = "id") String id){
        return iEnergyTestService.getTemperatrue(id);
    }



    /**
     *执行站点单元方法
     * @return
     */
    @RequestMapping("/invokemethod/{method}/{id}/{value}")
    @ApiOperation(value = "执行站点单元方法", notes = "执行站点单元方法")
    @CrossOrigin
    public JSONObject invokemethod(@PathVariable(name = "method") String method,
                                   @PathVariable(name = "id") String id,
                                   @PathVariable(name = "value") String value){
        return iEnergyTestService.invokemethod(method,id,value);
    }

}
