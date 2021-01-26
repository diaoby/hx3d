package com.huaxin.hx3d.energy.hj.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;
import com.huaxin.hx3d.energy.hj.model.Org;
import com.huaxin.hx3d.energy.hj.model.Ponit;
import com.huaxin.hx3d.energy.hj.model.PonitData;
import com.huaxin.hx3d.energy.hj.model.User;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.List;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/22 8:54
 * @description：恒敬能源service
 * @modified By：
 */
@Component
@Slf4j
public class HjEnergyService {

    /**
     * 注入restTemplate
     */
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

    @Value("${energy.hjfactory.loginname}")
    private String loginName;

    /**
     *PORT
     */
    @Value("${energy.hjfactory.loginpwd}")
    private String loginpwd;
    /**
     * 用户登录
     */
    private static final String LOGIN = "/api/auth/account/login";
    /**
     * 用户场站
     */
    private static final String USERORGANS = "/api/epower/home/v1/UserOrgans";
    /**
     * 设备信息
     */
    private static final String ORGANDETAILS = "/api/epower/Dock/v1/OrganDetails";
    /**
     * 设备数据
     */
    private static final String LATESTDATA = "/api/epower/Dock/v1/LatestData";


    /**
     * 根据api获取对应url
     * @return
     */
    private String getUrl(String api){
        return "http://"+ip+":"+port+api;
    }

    /**
     * 获取恒敬能源数据
     * @return
     */
    public User getUserData(){
        User user = getUser();
        List<Org> orgList = getOrg(user);
        for (Org org : orgList) {
            List<Ponit> ponitList = queryPonit(user,org);
            org.setPonitList(ponitList);
            for (Ponit ponit : ponitList) {
                List<PonitData> ponitDataList = queryPonitData(user,org,ponit);
                ponit.setPonitDataList(ponitDataList);
            }
        }
        user.setOrgList(orgList);
        return user;
    }

    /**
     *  获取登录用登录信息
     * @return
     */
    public User getUser(){
        String url = getUrl(LOGIN);
        MultiValueMap map = new LinkedMultiValueMap();
        map.add("loginName",loginName);
        map.add("loginPwd",loginpwd);
        ResponseEntity<User> responseEntity = restTemplate.postForEntity(url,map,User.class);
        return responseEntity.getBody();
    }


    /**
     *
     * @param user
     * @return
     */
    public List<Org> getOrg(User user){
        String url = getUrl(USERORGANS);
        MultiValueMap map = new LinkedMultiValueMap();
        map.add("userId",user.getUserID());
        map.add("userToken",user.getUserToken());
        ResponseEntity<String> responseEntity = restTemplate.postForEntity(url, map, String.class);
        String body = responseEntity.getBody();
        if(StringUtils.isNotBlank(body)){
            JSONObject json = JSONObject.parseObject(body);
            String resultCode = (String) json.get("resultCode");
            String resultDesc = (String) json.get("resultDesc");
            if(resultCode.equals("0") && resultDesc.equals("success")){
                JSONObject resultData = json.getJSONObject("resultData");
                Object list = resultData.get("list");
                List<Org> orgList = JSON.parseObject(JSONObject.toJSONString(list),new TypeReference<List<Org>>(){});
                return orgList;
            }
        }
        return null;
    }

    /**
     * 根据场站信息获取设备信息
     * @param org
     */
    public List<Ponit> queryPonit(User user,Org org) {
        String url = getUrl(ORGANDETAILS);
        MultiValueMap map = new LinkedMultiValueMap();
        map.add("userId",user.getUserID());
        map.add("userToken",user.getUserToken());
        map.add("Data","{\"OrgID\":\""+org.getOrgId()+"\"}");
        ResponseEntity<String> responseEntity = restTemplate.postForEntity(url, map, String.class);
        String body = responseEntity.getBody();
        if(StringUtils.isNotBlank(body)){
            JSONObject json = JSONObject.parseObject(body);
            String resultCode = (String) json.get("resultCode");
            String resultDesc = (String) json.get("resultDesc");
            if(resultCode.equals("0") && resultDesc.equals("success")){
                Object list = json.get("resultData");
                List<Ponit> ponitList = JSON.parseObject(JSONObject.toJSONString(list),new TypeReference<List<Ponit>>(){});
                return ponitList;
            }

        }
        return null;
    }

    /**
     * 根据场站信息获取设备数据
     * @param org
     * @param ponit
     * @return
     */
    public List<PonitData> queryPonitData(User user,Org org, Ponit ponit) {
        String url = getUrl(LATESTDATA);
        MultiValueMap map = new LinkedMultiValueMap();
        map.add("userId",user.getUserID());
        map.add("userToken",user.getUserToken());
        map.add("Data","{\"orgID\":\""+org.getOrgId()+"\",\"pointId\":\""+ponit.getPointId()+"\"}");
        ResponseEntity<String> responseEntity =restTemplate.postForEntity(url, map, String.class);
        String body = responseEntity.getBody();
        if(StringUtils.isNotBlank(body)){
            JSONObject json = JSONObject.parseObject(body);
            String resultCode = (String) json.get("resultCode");
            String resultDesc = (String) json.get("resultDesc");
            if(resultCode.equals("0") && resultDesc.equals("success")){
                Object list = json.get("resultData");
                List<PonitData> ponitDataList = JSON.parseObject(JSONObject.toJSONString(list),new TypeReference<List<PonitData>>(){});
                return ponitDataList;
            }

        }
        return null;
    }
}
