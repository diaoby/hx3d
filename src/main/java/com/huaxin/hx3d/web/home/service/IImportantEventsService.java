package com.huaxin.hx3d.web.home.service;

import com.huaxin.hx3d.web.home.model.ImportantEvents;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  重要事情服务类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
public interface IImportantEventsService extends IService<ImportantEvents> {
    /**
     *重要事情
     * @return
     */
    ImportantEvents getImportantEvents();

    /**
     *删除冗余数据
     */
    void delImportantEventsRedundantData();
}
