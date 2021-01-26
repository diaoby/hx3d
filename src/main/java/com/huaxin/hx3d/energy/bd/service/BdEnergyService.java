package com.huaxin.hx3d.energy.bd.service;

import com.alibaba.fastjson.JSONObject;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.security.MessageDigest;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/13 15:34
 * @description：柏顿能源厂家
 * @modified By：
 */
@Component
@Slf4j
public class BdEnergyService {

    /**
     * 注入restTemplate
     */
    @Autowired
    private RestTemplate restTemplate;

    /**
     *IP
     */
    @Value("${energy.bdfactory.ip}")
    private String ip;
    /**
     *api 路由
     */
    @Value("${energy.bdfactory.api_router}")
    private String apiRouter;
    /**
     * 应用id
     */
    @Value("${energy.bdfactory.app_id}")
    private String appId;
    /**
     * 签名，计算方式见安全规范
     */
    @Value("${energy.bdfactory.token}")
    private String token;
    /**
     *  定义实时查询方法
     */
    private static final String METHOD_QUERYTAGS = "RTDB/QueryTags?";

    /**
     *  定义实时查询方法
     */
    private static final String METHOD_QUERYHISTORYDATA = "RTDB/QueryHistoryData?";
    /**
     * 查询标签
     */
    private static final String TAGS ="demo1_1,demo1_2,0001_HFSD";
    /**
     *获取站点单元详细信息
     */
    private static final String METHOD_GETSITEUNITINFO = "SiteUnit/GetSiteUnitInfo?";
    /**
     *获取站点单元树
     */
    private static final String METHOD_GETSITEUNITTREE = "SiteUnit/GetSiteUnitTree?";
    /**
     *执行站点单元方法
     */
    private static final String METHOD_INVOKEMETHOD = "SiteUnit/InvokeMethod?";

    /**
     * 获取实时数据---标签模式（废弃）
     * @return
     */
    @Deprecated
    public JSONObject getQueryTags(){
        Map<String,Object> paraMap = new LinkedHashMap<>();
        paraMap.put("tags",TAGS);
        JSONObject jsonObject = getJSONObject(paraMap, METHOD_QUERYTAGS);
        return jsonObject;
    }



    /**
     * 获取历史数据---标签模式（废弃）
     * @return
     */
    @Deprecated
    public JSONObject queryHistoryData(){
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String startTime = sdf.format(new Date(System.currentTimeMillis()-10000));
        String endTime = sdf.format(new Date(System.currentTimeMillis()));
        Map<String,Object> paraMap = new LinkedHashMap<>();
        paraMap.put("endTime",endTime);
        paraMap.put("startTime",startTime);
        paraMap.put("tags",TAGS);
        JSONObject jsonObject = getJSONObject(paraMap, METHOD_QUERYHISTORYDATA);
        return jsonObject;
    }



    /**
     * 获取站点单元树
     * @return
     */
    public JSONObject getSiteUnitTree(){
        Map<String,Object> paraMap = new LinkedHashMap<>();
        JSONObject jsonObject = getJSONObject(paraMap, METHOD_GETSITEUNITTREE);
        return jsonObject;
    }



    /**
     *获取站点单元详细信息
     * @param id
     * @return
     */
    public JSONObject getSiteUnitInfo(String id) {
        Map<String,Object> paraMap = new LinkedHashMap<>();
        paraMap.put("id",id);
        JSONObject jsonObject = getJSONObject(paraMap, METHOD_GETSITEUNITINFO);
        return jsonObject;
    }

    /**
     *执行站点单元方法
     * @param method
     * @param value
     * @return
     */
    public JSONObject invokemethod(String method, String id,String value) {
        Map<String,Object> paraMap = new LinkedHashMap<>();
        paraMap.put("id",id);
        paraMap.put("method",method);
        paraMap.put("params","{\"Value\":\""+value+"\"}");
        JSONObject jsonObject = getJSONObject(paraMap, METHOD_INVOKEMETHOD);
        return jsonObject;
    }

    /**
     *
     * @param paraMap
     * @param path
     * @return
     */
    private JSONObject getJSONObject(Map<String,Object> paraMap,String path){
        String str = "http://" + ip +"/" + apiRouter ;
        StringBuilder url = new StringBuilder(str+path);
        long timestamp = (new Date().getTime()/1000);
        String sign = getSign(paraMap,timestamp);
        for (String key : paraMap.keySet()) {
            if (!url.toString().endsWith("?")) {
                url.append("&");
            }
            url.append(key);
            url.append("=");
            url.append("{");
            url.append(key);
            url.append("}");
        }
        url.append("&appid=");
        url.append("{appid}");
        url.append("&timestamp=");
        url.append("{timestamp}");
        url.append("&sign=");
        url.append("{sign}");
        paraMap.put("appid",appId);
        paraMap.put("timestamp",timestamp);
        paraMap.put("sign",sign);
        HttpHeaders headers = new HttpHeaders();
        HttpMethod method = HttpMethod.GET;
        // 以表单的方式提交
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        //将请求头部和参数合成一个请求
        HttpEntity requestEntity = new HttpEntity(headers);
        ResponseEntity<String> exchange = restTemplate.exchange(url.toString(),method,requestEntity,String.class,paraMap);
        String body = exchange.getBody();
        log.info("返回body:"+body);
        JSONObject jsonObject = JSONObject.parseObject(body);
        return jsonObject;
    }

    /**
     * URI的时候需要转码 如
     * String url = "http://" + host + ":" + port + "/hello?name="+ URLEncoder.encode(name,"UTF-8");
     * URI uri = URI.create(url);
     * @param str
     * @return
     */
    @SneakyThrows
    private String encode(String str){
        String encodeData = URLEncoder.encode(str, "UTF-8")
                .replaceAll("\\+", "%20")
                .replaceAll("\\!", "%21")
                .replaceAll("\\'", "%27")
                .replaceAll("\\(", "%28")
                .replaceAll("\\)", "%29")
                .replaceAll("\\,", "%2C")
                .replaceAll("\\ ", "%20")
                .replaceAll("\\:", "%3A")
                .replaceAll("\\~", "%7E");
        return encodeData;
    }

    /**
     *
     * @param paraMap
     * @return
     */
    private String getSign(Map<String,Object> paraMap,long timestamp){
        StringBuilder sign = new StringBuilder(appId);
        for (String key : paraMap.keySet()) {
            sign.append(paraMap.get(key));
        }
        sign.append(timestamp);
        sign.append(token);
        log.info(sign.toString());
        return MD5(sign.toString()).toUpperCase();
    }


    /**
     *
     * @param s
     * @return
     */
    public final static String MD5(String s) {
        char hexDigits[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'A', 'B', 'C', 'D', 'E', 'F' };
        try {
            byte[] btInput = s.getBytes();
            // 获得MD5摘要算法的 MessageDigest 对象
            MessageDigest mdInst = MessageDigest.getInstance("MD5");
            // 使用指定的字节更新摘要
            mdInst.update(btInput);
            // 获得密文
            byte[] md = mdInst.digest();
            // 把密文转换成十六进制的字符串形式
            int j = md.length;
            char str[] = new char[j * 2];
            int k = 0;
            for (int i = 0; i < j; i++) {
                byte byte0 = md[i];
                str[k++] = hexDigits[byte0 >>> 4 & 0xf];
                str[k++] = hexDigits[byte0 & 0xf];
            }
            return new String(str);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


}
