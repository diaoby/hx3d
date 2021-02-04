package com.huaxin.hx3d.web.home.controller;


import com.huaxin.hx3d.web.home.model.FireInfo;
import com.huaxin.hx3d.web.home.service.IFireInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  消防概况
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@RestController
@RequestMapping("/web/home/fireinfo")
@Api(tags = { "消防概况" })
@Slf4j
public class FireInfoController {

    /**
     *
     */
    @Autowired
    private IFireInfoService iFireInfoService;

    /**
     * 获取消防概况
     * @return
     */
    @RequestMapping("/getfireinfo")
    @ApiOperation(value = "获取消防概况", notes = "获取消防概况")
    @CrossOrigin
    public FireInfo getFireInfo(){
        return iFireInfoService.getFireInfo();
    }

}
