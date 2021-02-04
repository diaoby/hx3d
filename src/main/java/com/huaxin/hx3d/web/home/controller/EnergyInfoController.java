package com.huaxin.hx3d.web.home.controller;


import com.huaxin.hx3d.web.home.model.EnergyInfo;
import com.huaxin.hx3d.web.home.service.IEnergyInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  能耗概况
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@RestController
@RequestMapping("/web/home/energyinfo")
@Api(tags = { "能耗概况" })
@Slf4j
public class EnergyInfoController {

    /**
     *
     */
    @Autowired
    private IEnergyInfoService iEnergyInfoService;

    /**
     * 获取能耗概况
     * @return
     */
    @RequestMapping("/getenergyinfo")
    @ApiOperation(value = "获取能耗概况", notes = "获取能耗概况")
    @CrossOrigin
    public EnergyInfo getEnergyInfo(){
        return iEnergyInfoService.getEnergyInfo();
    }

}
