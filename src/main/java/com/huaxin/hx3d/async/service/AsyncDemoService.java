package com.huaxin.hx3d.async.service;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/16 10:42
 * @description：异步线程demo
 * @modified By：
 */
@Component
@Slf4j
public class AsyncDemoService {

    /**
     *
     * @return
     */
    @Async("asyncExecutor")
    @SneakyThrows
    public void asyncDemo(){
        log.info("AsyncDemoService.asyncDemo===========start");
        Thread.sleep(3000);
        log.info("AsyncDemoService.asyncDemo===========end");
    }
}
