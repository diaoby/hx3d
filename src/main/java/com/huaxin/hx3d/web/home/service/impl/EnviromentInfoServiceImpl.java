package com.huaxin.hx3d.web.home.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.huaxin.hx3d.web.home.mapper.EnviromentInfoMapper;
import com.huaxin.hx3d.web.home.model.EnviromentInfo;
import com.huaxin.hx3d.web.home.service.IEnviromentInfoService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 *  获取环境概况服务实现类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@Service
public class EnviromentInfoServiceImpl extends ServiceImpl<EnviromentInfoMapper, EnviromentInfo> implements IEnviromentInfoService {
    /**
     * 获取获取环境概况
     * @return
     */
    @Override
    public EnviromentInfo getEnviromentInfo() {
        QueryWrapper<EnviromentInfo> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<EnviromentInfo> enviromentInfoList = list(wrapper);
        if(null != enviromentInfoList && enviromentInfoList.size() > 0){
            return enviromentInfoList.get(0);
        }
        return new EnviromentInfo();
    }

    /**
     * 删除获取环境概况冗余数据
     */
    @Override
    public void delEnviromentInfoRedundantData() {
        //查询需要删除的冗余数据id list
        QueryWrapper<EnviromentInfo> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<EnviromentInfo> enviromentInfoList = list(wrapper);
        if(null != enviromentInfoList && enviromentInfoList.size() > 1) {
            List<String> delList = enviromentInfoList.stream().skip(1).map(EnviromentInfo::getBoEnviromentInfoId).collect(Collectors.toList());
            if (null != delList && delList.size() > 0) {
                this.baseMapper.deleteBatchIds(delList);
            }
        }
    }
}
