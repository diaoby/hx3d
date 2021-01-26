package com.huaxin.hx3d.web.home.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.huaxin.hx3d.web.home.mapper.FireInfoMapper;
import com.huaxin.hx3d.web.home.model.FireInfo;
import com.huaxin.hx3d.web.home.service.IFireInfoService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 *  消防概况服务实现类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@Service
public class FireInfoServiceImpl extends ServiceImpl<FireInfoMapper, FireInfo> implements IFireInfoService {
    /**
     * 获取消防概况
     * @return
     */
    @Override
    public FireInfo getFireInfo() {
        QueryWrapper<FireInfo> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<FireInfo> fireInfoList = list(wrapper);
        if(null != fireInfoList && fireInfoList.size() > 0){
            return fireInfoList.get(0);
        }
        return new FireInfo();
    }

    /**
     * 删除冗余数据
     */
    @Override
    public void delFireInfoRedundantData() {
        //查询需要删除的冗余数据id list
        QueryWrapper<FireInfo> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<FireInfo> fireInfoList = list(wrapper);
        if(null != fireInfoList && fireInfoList.size() > 1) {
            List<String> delList = fireInfoList.stream().skip(1).map(FireInfo::getBoFireInfoId).collect(Collectors.toList());
            if (null != delList && delList.size() > 0) {
                this.baseMapper.deleteBatchIds(delList);
            }
        }
    }
}
