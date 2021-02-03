package com.huaxin.hx3d.web.home.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.huaxin.hx3d.web.home.model.WindowInfo;
import com.huaxin.hx3d.web.home.mapper.WindowInfoMapper;
import com.huaxin.hx3d.web.home.service.IWindowInfoService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author diaoby
 * @since 2021-02-03
 */
@Service
public class WindowInfoServiceImpl extends ServiceImpl<WindowInfoMapper, WindowInfo> implements IWindowInfoService {

    @Override
    public WindowInfo getWindow() {
        QueryWrapper<WindowInfo> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<WindowInfo> windowInfoList = list(wrapper);
        if(null != windowInfoList && windowInfoList.size() > 0){
            return windowInfoList.get(0);
        }
        return new WindowInfo();
    }
}
