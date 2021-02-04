package com.huaxin.hx3d.web.home.controller;


import com.huaxin.hx3d.web.home.model.EleException;
import com.huaxin.hx3d.web.home.service.IEleExceptionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 *  近一周用电异常
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@RestController
@RequestMapping("/web/home/eleexception")
@Api(tags = { "近一周用电异常" })
@Slf4j
public class EleExceptionController {

    /**
     *
     */
    @Autowired
    private IEleExceptionService iEleExceptionService;

    /**
     * 获取近一周用电异常
     * @return
     *
     */
    @RequestMapping("/geteleexception")
    @ApiOperation(value = "获取近一周用电异常", notes = "获取近一周用电异常")
    @CrossOrigin
    public List<EleException> getEleException(){
        return iEleExceptionService.getEleException();
    }

}
