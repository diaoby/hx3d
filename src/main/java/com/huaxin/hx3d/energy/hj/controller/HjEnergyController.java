package com.huaxin.hx3d.energy.hj.controller;

import com.huaxin.hx3d.energy.hj.model.User;
import com.huaxin.hx3d.energy.hj.service.HjEnergyService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * @author ：diaoby
 * @date ：Created in 2021/1/22 16:05
 * @description：恒敬
 * @modified By：
 */
@RestController
@Slf4j
@RequestMapping("/energy/hj")
@Api(tags = { "恒敬能源API" })
public class HjEnergyController {
    /**
     * 
     */
    @Autowired
    private HjEnergyService hjEnergyService;

    /**
     *查询当前用户所有设备信息
     * @return
     */
    @RequestMapping("/querydata")
    @CrossOrigin
    @ApiOperation(value = "查询当前用户所有设备信息", notes = "查询当前用户所有设备信息")
    public User getData(){
        User user = hjEnergyService.getUserData();
        return user;
    }

}
