package com.huaxin.hx3d.energy.bd.controller;

import com.alibaba.fastjson.JSONObject;
import com.huaxin.hx3d.energy.bd.service.BdEnergyService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * @author ：diaoby
 * @date ：Created in 2021/1/13 16:05
 * @description：柏顿
 * @modified By：
 */
@RestController
@Slf4j
@RequestMapping("/energy/bd")
@Api(tags = { "柏顿能源API" })
public class BdEnergyController {
    /**
     *
     */
    @Autowired
    private BdEnergyService bdEnergyService;
    /**
     *查询标签实时数据
     * @return
     */
    @RequestMapping("/querytags")
    @ApiOperation(value = "查询标签实时数据", notes = "查询标签实时数据")
    public JSONObject getQueryTags(){
        return bdEnergyService.getQueryTags();
    }


    /**
     *查询标签历史数据
     * @return
     */
    @ApiOperation(value = "查询标签历史数据", notes = "查询标签历史数据")
    @RequestMapping("/queryhistorydata")
    public JSONObject queryHistoryData(){
        return bdEnergyService.queryHistoryData();
    }

    /**
     *获取站点单元树
     * @return
     */
    @RequestMapping("/getsiteunittree")
    @ApiOperation(value = "获取站点单元树", notes = "获取站点单元树")
    public JSONObject getSiteUnitTree(){
        return bdEnergyService.getSiteUnitTree();
    }


    /**
     *获取站点单元详细信息
     * @return
     */
    @RequestMapping("/getsiteunitinfo/{id}")
    @ApiOperation(value = "获取站点单元详细信息", notes = "获取站点单元详细信息")
    public JSONObject getSiteUnitInfo(@PathVariable(name = "id") String id){
        return bdEnergyService.getSiteUnitInfo(id);
    }


    /**
     *执行站点单元方法
     * @return
     */
    @RequestMapping("/invokemethod/{method}/{id}/{value}")
    @ApiOperation(value = "执行站点单元方法", notes = "执行站点单元方法")
    public JSONObject invokemethod(@PathVariable(name = "method") String method,
                                   @PathVariable(name = "id") String id,
                                   @PathVariable(name = "value") String value){
        return bdEnergyService.invokemethod(method,id,value);
    }


}
