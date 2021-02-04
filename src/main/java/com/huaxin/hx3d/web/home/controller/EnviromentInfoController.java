package com.huaxin.hx3d.web.home.controller;


import com.huaxin.hx3d.web.home.model.EnviromentInfo;
import com.huaxin.hx3d.web.home.service.IEnviromentInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  环境概况
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@RestController
@RequestMapping("/web/home/enviromentinfo")
@Api(tags = { "环境概况" })
@Slf4j
public class EnviromentInfoController {

    /**
     *
     */
    @Autowired
    private IEnviromentInfoService iEnviromentInfoService;

    /**
     * 获取环境概况
     * @return
     */
    @RequestMapping("/getenviromentinfo")
    @ApiOperation(value = "获取环境概况", notes = "获取环境概况")
    @CrossOrigin
    public EnviromentInfo getEnviromentInfo(){
        return iEnviromentInfoService.getEnviromentInfo();
    }

}
