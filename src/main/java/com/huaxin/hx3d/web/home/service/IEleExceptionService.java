package com.huaxin.hx3d.web.home.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.huaxin.hx3d.web.home.model.EleException;

import java.util.List;

/**
 * <p>
 *  获取近一周用电异常服务类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
public interface IEleExceptionService extends IService<EleException> {
    /**
     * 获取近一周用电异常
     * @return
     */
    List<EleException> getEleException();

    /**
     *删除冗余数据
     */
    void deliEleExceptionRedundantData();
}
