package com.huaxin.hx3d.web.scheduled;

import com.huaxin.hx3d.web.home.service.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/20 15:16
 * @description：定时任务
 * @modified By：
 */
@Slf4j
@Component
public class WebScheduledTask {
    /**
     *
     */
    @Autowired
    private IEleExceptionService iEleExceptionService;
    /**
     *
     */
    @Autowired
    private IEnergyInfoService iEnergyInfoService;

    /**
     *
     */
    @Autowired
    private IEnviromentInfoService iEnviromentInfoService;

    /**
     *
     */
    @Autowired
    private IImportantEventsService iImportantEventsService;
    /**
     *
     */
    @Autowired
    private IPartInfoService iPartInfoService;
    /**
     *
     */
    @Autowired
    private IFireInfoService iFireInfoService;
    /**
     *
     */
    @Autowired
    private IFireAlarmService iFireAlarmService;


    /**
     *园区概况删除冗余数据
     */
    @Scheduled(cron = "${energy.partinfo}")
    private void delPartInfoRedundantData(){
        log.info("园区概况删除冗余数据Start");
        long start  = System.currentTimeMillis();
        iPartInfoService.delPartInfoRedundantData();
        long end  = System.currentTimeMillis();
        log.info("园区概况删除冗余数据End,总计花费{}ms",(end-start));
    }

    /**
     *环境概况删除冗余数据
     */
    @Scheduled(cron = "${energy.enviromentinfo}")
    private void delEnviromentInfoRedundantData(){
        log.info("环境概况删除冗余数据Start");
        long start  = System.currentTimeMillis();
        iEnviromentInfoService.delEnviromentInfoRedundantData();
        long end  = System.currentTimeMillis();
        log.info("环境概况删除冗余数据End,总计花费{}ms",(end-start));
    }

    /**
     *重要事情删除冗余数据
     */
    @Scheduled(cron = "${energy.importantevents}")
    private void delImportantEventsRedundantData(){
        log.info("重要事情删除冗余数据Start");
        long start  = System.currentTimeMillis();
        iImportantEventsService.delImportantEventsRedundantData();
        long end  = System.currentTimeMillis();
        log.info("重要事情删除冗余数据End,总计花费{}ms",(end-start));
    }

    /**
     *近一周用电异常服务类删除冗余数据
     */
    @Scheduled(cron = "${energy.eleexception}")
    private void deliEleExceptionRedundantData(){
        log.info("获取近一周用电异常删除冗余数据Start");
        long start  = System.currentTimeMillis();
        iEleExceptionService.deliEleExceptionRedundantData();
        long end  = System.currentTimeMillis();
        log.info("获取近一周用电异常删除冗余数据End,总计花费{}ms",(end-start));
    }

    /**
     *能耗概况删除冗余数据
     */
    @Scheduled(cron = "${energy.energyinfo}")
    private void delEnergyInfoRedundantData(){
        log.info("能耗概况删除冗余数据Start");
        long start  = System.currentTimeMillis();
        iEnergyInfoService.delEnergyInfoRedundantData();
        long end  = System.currentTimeMillis();
        log.info("能耗概况删除冗余数据End,总计花费{}ms",(end-start));
    }

    /**
     *消防概况删除冗余数据
     */
    @Scheduled(cron = "${energy.fireinfo}")
    private void delFireInfoRedundantData(){
        log.info("消防概况删除冗余数据Start");
        long start  = System.currentTimeMillis();
        iFireInfoService.delFireInfoRedundantData();
        long end  = System.currentTimeMillis();
        log.info("消防概况删除冗余数据End,总计花费{}ms",(end-start));
    }

    /**
     *火情告警删除冗余数据
     */
    @Scheduled(cron = "${energy.firealarm}")
    private void delFireAlarmRedundantData(){
        log.info("火情告警删除冗余数据Start");
        long start  = System.currentTimeMillis();
        iFireAlarmService.delFireAlarmRedundantData();
        long end  = System.currentTimeMillis();
        log.info("火情告警删除冗余数据End,总计花费{}ms",(end-start));
    }


}
