package com.huaxin.hx3d.web.home.service;

import com.huaxin.hx3d.web.home.model.PartInfo;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
public interface IPartInfoService extends IService<PartInfo> {
    /**
     * 获取园区概况
     * @return
     */
    PartInfo getPartInfo();

    /**
     * 删除冗余数据
     */
    void delPartInfoRedundantData();
}
