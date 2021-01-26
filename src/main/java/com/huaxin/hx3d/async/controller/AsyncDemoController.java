package com.huaxin.hx3d.async.controller;

import com.huaxin.hx3d.async.service.AsyncDemoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/16 10:47
 * @description：异步线程controller
 * @modified By：
 */
@RestController
@Slf4j
@RequestMapping("/async/")
@Api(tags = { "异步线程" })
public class AsyncDemoController {
    /**
     *
     */
    @Autowired
    private AsyncDemoService asyncDemoService;

    /**
     *
     * @return
     */
    @RequestMapping("/test")
    @ApiOperation(value = "异步线程", notes = "异步线程")
    public String asyncDemo(){
        log.info("AsyncDemoController.asyncDemo===========start");
        int count  = 0;
        while(count<120){
            asyncDemoService.asyncDemo();
            count++;
        }
        log.info("AsyncDemoController.asyncDemo===========end");
        return "OK";
    }
}
