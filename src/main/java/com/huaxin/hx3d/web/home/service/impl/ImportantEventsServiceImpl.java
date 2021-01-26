package com.huaxin.hx3d.web.home.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.huaxin.hx3d.web.home.model.ImportantEvents;
import com.huaxin.hx3d.web.home.mapper.ImportantEventsMapper;
import com.huaxin.hx3d.web.home.service.IImportantEventsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 *  重要事情服务实现类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@Service
public class ImportantEventsServiceImpl extends ServiceImpl<ImportantEventsMapper, ImportantEvents> implements IImportantEventsService {
    /**
     *获取重要事情
     * @return
     */
    @Override
    public ImportantEvents getImportantEvents() {
        QueryWrapper<ImportantEvents> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<ImportantEvents> importantEventsList = list(wrapper);
        if(null != importantEventsList && importantEventsList.size() > 0){
            return importantEventsList.get(0);
        }
        return new ImportantEvents();
    }

    /**
     *
     */
    @Override
    public void delImportantEventsRedundantData() {
        //查询需要删除的冗余数据id list
        QueryWrapper<ImportantEvents> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<ImportantEvents> importantEventsList = list(wrapper);
        if(null != importantEventsList && importantEventsList.size() > 1) {
            List<String> delList = importantEventsList.stream().skip(1).map(ImportantEvents::getBoImportantEventsId).collect(Collectors.toList());
            if (null != delList && delList.size() > 0) {
                this.baseMapper.deleteBatchIds(delList);
            }
        }
    }
}
