package com.huaxin.hx3d.web.home.controller;


import com.huaxin.hx3d.web.home.model.PartInfo;
import com.huaxin.hx3d.web.home.service.IPartInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  园区概况
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@RestController
@RequestMapping("/web/home/partinfo")
@Api(tags = { "园区概况" })
@Slf4j
public class PartInfoController {
    /**
     *
     */
    @Autowired
    private IPartInfoService iPartInfoService;

    /**
     * 获取园区概况
     * @return
     */
    @RequestMapping("/getpartinfo")
    @ApiOperation(value = "获取园区概况", notes = "获取园区概况")
    public PartInfo getPartInfo(){
        return iPartInfoService.getPartInfo();
    }

}
