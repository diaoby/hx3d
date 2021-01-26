package com.huaxin.hx3d.energy.shkj.service;

import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;


/**
 * @author ：diaoby
 * @date ：Created in 2021/1/23 15:55
 * @description：
 * @modified By：
 */
@Component
@Slf4j
public class ShkjEnergyService {

    @Autowired
    private RestTemplate restTemplate;

    /**
     *IP
     */
    @Value("${energy.hjfactory.ip}")
    private String ip;

    /**
     *PORT
     */
    @Value("${energy.hjfactory.port}")
    private String port;

    /**
     *
     */
    private static final String ROUTER = "RUNPAQ";
    /**
     * 电表api
     */
    private static final String ELECTRICMETERREALTIMEDATA = "electricMeterRealTimeData";
    /**
     * 水表api
     */
    private static final String WATERMETERREALTIMEDATA = "waterMeterRealTimeData";
    /**
     * 热量表api
     */
    private static final String COLDHEATMETERREALTIMEDATA = "coldHeatMeterRealTimeData";


    /**
     * 根据api获取对应url
     * @return
     */
    private String getUrl(String api){
        return "http://"+ip+"/"+port+"/"+ROUTER+"/"+api;
    }

    /**
     * 查询电表实时数据
     * @param codes
     * @return
     */
    public JSONObject queryElectric(String codes) {
        String url = getUrl(ELECTRICMETERREALTIMEDATA);
        url="https://c9044517-5ad5-40a9-96b0-599b0afcc5aa.mock.pstmn.io/RUNPAQ/electricMeterRealTimeData";
        ResponseEntity<String> responseEntity = restTemplate.postForEntity(url, codes, String.class);
        String body = responseEntity.getBody();
        if(StringUtils.isNotBlank(body)){
            JSONObject json = JSONObject.parseObject(body);
            return json;
        }
        return null;
    }

    /**
     *查询水表实时数据
     * @param codes
     * @return
     */
    public JSONObject queryWaterMeter(String codes) {
        String url = getUrl(WATERMETERREALTIMEDATA);
        url="https://c9044517-5ad5-40a9-96b0-599b0afcc5aa.mock.pstmn.io/RUNPAQ/waterMeterRealTimeData";
        ResponseEntity<String> responseEntity = restTemplate.postForEntity(url, codes, String.class);
        String body = responseEntity.getBody();
        if(StringUtils.isNotBlank(body)){
            JSONObject json = JSONObject.parseObject(body);
            return json;
        }
        return null;
    }

    /**
     * 查询热量表实时数据
     * @param codes
     * @return
     */
    public JSONObject queryColdHeatMeter(String codes) {
        String url = getUrl(COLDHEATMETERREALTIMEDATA);
        url="https://c9044517-5ad5-40a9-96b0-599b0afcc5aa.mock.pstmn.io/RUNPAQ/coldHeatMeterRealTimeData";
        ResponseEntity<String> responseEntity = restTemplate.postForEntity(url, codes, String.class);
        String body = responseEntity.getBody();
        if(StringUtils.isNotBlank(body)){
            JSONObject json = JSONObject.parseObject(body);
            return json;
        }
        return null;
    }
}
