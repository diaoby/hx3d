package com.huaxin.hx3d.web.home.controller;


import com.huaxin.hx3d.web.home.service.IEnergyTestService;
import com.huaxin.hx3d.web.vo.EnergyTestVo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

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
     * 获取能耗概况
     * @return
     */
    @RequestMapping("/getenergytest")
    @ApiOperation(value = "获取能耗概况", notes = "获取能耗概况")
    @CrossOrigin
    public EnergyTestVo getEnergyTestVO(){
        return iEnergyTestService.getEnergyTestVO();
    }
}
