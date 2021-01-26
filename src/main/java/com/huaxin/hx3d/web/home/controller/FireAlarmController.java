package com.huaxin.hx3d.web.home.controller;


import com.huaxin.hx3d.web.home.model.FireAlarm;
import com.huaxin.hx3d.web.home.service.IFireAlarmService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 *  火情告警
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@RestController
@RequestMapping("/web/home/firealarm")
@Api(tags = { "火情告警" })
@Slf4j
public class FireAlarmController {
    /**
     *
     */
    @Autowired
    private IFireAlarmService iFireAlarmService;

    /**
     *
     * @return
     */
    @RequestMapping("/getfirealarmlist")
    @ApiOperation(value = "火情告警", notes = "火情告警")
    public List<FireAlarm> getFireAlarmList(){
        return iFireAlarmService.getFireAlarmList();
    }
}
