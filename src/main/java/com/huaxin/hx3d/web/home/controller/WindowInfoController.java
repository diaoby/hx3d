package com.huaxin.hx3d.web.home.controller;


import com.huaxin.hx3d.web.home.model.WindowInfo;
import com.huaxin.hx3d.web.home.service.IWindowInfoService;
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
 * @since 2021-02-03
 */
@RestController
@RequestMapping("/web/home/window")
@Api(tags = { "窗口监控ai" })
@Slf4j
public class WindowInfoController {

    @Autowired
    private IWindowInfoService iWindowInfoService;

    /**
     * 获取窗口开关数
     * @return
     */
    @RequestMapping("/getwindow")
    @ApiOperation(value = "获取窗口开关数", notes = "获取窗口开关数")
    @CrossOrigin
    public WindowInfo getWindow(){
        return iWindowInfoService.getWindow();
    }
}
