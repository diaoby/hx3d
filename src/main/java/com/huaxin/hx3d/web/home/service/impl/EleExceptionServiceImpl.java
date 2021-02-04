package com.huaxin.hx3d.web.home.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.huaxin.hx3d.web.home.mapper.EleExceptionMapper;
import com.huaxin.hx3d.web.home.model.EleException;
import com.huaxin.hx3d.web.home.service.IEleExceptionService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 *  获取近一周用电异常服务实现类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@Service
public class EleExceptionServiceImpl extends ServiceImpl<EleExceptionMapper, EleException> implements IEleExceptionService {
    /**
     * 一周 7天
     */
    private static  final int  NUM = 7;
    /**
     * 获取近一周用电异常
     * @return
     */
    @Override
    public List<EleException> getEleException() {
        QueryWrapper<EleException> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<EleException> list = list(wrapper).stream().limit(NUM).collect(Collectors.toList());
        return list;
    }

    /**
     * 删除冗余数据
     */
    @Override
    public void deliEleExceptionRedundantData() {
        QueryWrapper<EleException> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<EleException> eleExceptionList = list(wrapper);
        //保留前7条，删除其余冗余数据
        if(null != eleExceptionList && eleExceptionList.size() > NUM) {
            List<String> delList = eleExceptionList.stream().skip(NUM).map(EleException::getBoEleExceptionId).collect(Collectors.toList());
            if (null != delList && delList.size() > 0) {
                this.baseMapper.deleteBatchIds(delList);
            }
        }
    }
}
