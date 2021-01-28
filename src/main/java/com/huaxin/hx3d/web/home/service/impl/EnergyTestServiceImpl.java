package com.huaxin.hx3d.web.home.service.impl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.huaxin.hx3d.energy.bd.service.BdEnergyService;
import com.huaxin.hx3d.web.home.mapper.EnergyTestMapper;
import com.huaxin.hx3d.web.home.model.EnergyTest;
import com.huaxin.hx3d.web.home.model.TemperatrueTest;
import com.huaxin.hx3d.web.home.service.IEnergyTestService;
import com.huaxin.hx3d.web.vo.EnergyTestVo;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author diaoby
 * @since 2021-01-22
 */
@Service
public class EnergyTestServiceImpl extends ServiceImpl<EnergyTestMapper, EnergyTest> implements IEnergyTestService {
    /**
     *  设备数量
     */
    private static  final int  NUM = 4;


    @Autowired
    private RestTemplate restTemplate;

    /**
     *IP
     */
    @Value("${bigdataplatform.ip}")
    private String ip;

    /**
     *PORT
     */
    @Value("${bigdataplatform.port}")
    private String port;
    /**
     *
     */
    private static final String INVOKE_METHOD = "/burton/invokemethod/";

    /**
     *
     */
    private static final String GET_TEMPERATRUE = "/burton/gettemperatrue/";

    /**
     *
     */
    @Autowired
    private BdEnergyService bdEnergyService;
    /**
     *
     * @return
     */
    @Override
    public EnergyTestVo getEnergyTestVO() {
        QueryWrapper<EnergyTest> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("timestamp_ver");
        List<EnergyTest> energyTestList = list(wrapper);
        List<EnergyTest> collect = new ArrayList<>();
        if(null != energyTestList && energyTestList.size() > 0 ) {
            collect = energyTestList.stream().limit(NUM).collect(Collectors.toList());
        }
        double count = collect.stream().mapToDouble(EnergyTest::getEnergyNum).sum();
        EnergyTestVo ev = EnergyTestVo.builder().energyTestsList(collect).totalEnergy(count).build();
        return ev;
    }

    /**
     *
     * @return
     */
    @Override
    public TemperatrueTest getTemperatrue(String id) {
        TemperatrueTest temperatrueTest = new TemperatrueTest();
        temperatrueTest.setId(id);
//        JSONObject siteUnitInfo = bdEnergyService.getSiteUnitInfo(id);
//        JSONObject data = siteUnitInfo.getJSONObject("data");
//        if(null != data){
//            JSONArray attrs = data.getJSONArray("attrs");
//            Iterator<Object> iterator = attrs.iterator();
//            while (iterator.hasNext()) {
//                JSONObject next = (JSONObject)iterator.next();
//                if(null != next){
//                    String name =  next.getString("name");
//                    if(name.equals("WD_SD")){
//                        JSONObject value = next.getJSONObject("value");
//                        double tempValue = value.getDoubleValue("Value");
//                        tempValue= (double) Math.round(tempValue * 100) / 100;
//                        temperatrueTest.setTempValue(tempValue);
//                    }
//                    if(name.equals("QTFORCE")){
//                        JSONObject value = next.getJSONObject("value");
//                        int tmpStatus = value.getIntValue("Value");
//                        temperatrueTest.setTempStatus(tmpStatus==1?true:false);
//                    }
//                }
//            }
//        }

        String url = getUrl(GET_TEMPERATRUE+"/"+id);
        ResponseEntity<TemperatrueTest> responseEntity = restTemplate.getForEntity(url, TemperatrueTest.class);
        temperatrueTest = responseEntity.getBody();
        return temperatrueTest;
    }

    /**
     * 控制命令
     * @param method
     * @param id
     * @param value
     * @return
     */
    @Override
    public JSONObject invokemethod(String method, String id, String value) {
        String url = getUrl(INVOKE_METHOD+method+"/"+id+"/"+value);
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);
        String body = responseEntity.getBody();
        if(StringUtils.isNotBlank(body)){
            JSONObject json = JSONObject.parseObject(body);
            return json;
        }
        return null;
    }

    /**
     * 根据api获取对应url
     * @return
     */
    private String getUrl(String api){
        return "http://"+ip+":"+port+"/"+"/"+api;
    }
}
