package com.huaxin.hx3d.quartz.service;

import com.huaxin.hx3d.web.home.service.IPartInfoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * @author ：diaoby----单机版本
 *      分布式参考：https://www.cnblogs.com/tqlin/p/11064519.html
 * @date ：Created in 2021/1/13 16:43
 * @description：spring 定时 demo
 * @modified By：
 */
@Slf4j
@Component
public class ScheduledTask {

    private int count = 0;


    /**
     *设置没6秒执行一次
     */
//    @Scheduled(cron = "*/6 * * * * ?")
    private void process(){
        log.info("this is scheduler task running " + (count++));
    }


}
