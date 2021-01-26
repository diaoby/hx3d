package com.huaxin.hx3d.web.home.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.huaxin.hx3d.web.home.model.PartInfo;
import com.huaxin.hx3d.web.home.mapper.PartInfoMapper;
import com.huaxin.hx3d.web.home.service.IPartInfoService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 * 取园区概况服务实现类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@Service
public class PartInfoServiceImpl extends ServiceImpl<PartInfoMapper, PartInfo> implements IPartInfoService {
    /**
     *获取园区概况
     * @return
     */
    @Override
    public PartInfo getPartInfo() {
        QueryWrapper<PartInfo> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<PartInfo> partInfoList = list(wrapper);
        if(null != partInfoList && partInfoList.size() > 0){
            return partInfoList.get(0);
        }
        return new PartInfo();
    }

    /**
     * 删除冗余数据
     */
    @Override
    public void delPartInfoRedundantData() {
        //查询需要删除的冗余数据id list
        QueryWrapper<PartInfo> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<PartInfo> partInfoList = list(wrapper);
        if(null != partInfoList && partInfoList.size() > 1) {
            List<String> delList = partInfoList.stream().skip(1).map(PartInfo::getBoPartInfoId).collect(Collectors.toList());
            if (null != delList && delList.size() > 0) {
                this.baseMapper.deleteBatchIds(delList);
            }
        }
    }
}
