package com.huaxin.hx3d.test.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/6 9:09
 * @description：RestTemplatec测试
 * @modified By：
 */
@RestController
@Api(tags = { "restTemplateUtils测试" })
public class RestTemplateController {

    @Autowired
    private RestTemplate restTemplate;
    /**
     *
     */
    private static final String URL ="http://localhost:8080";

    /**
     *
     * @return
     */
    @RequestMapping("/resttemplate")
    @ResponseBody
    @ApiOperation(value = "hello-DEMO", notes = "hello-DEMO")
    public ResponseEntity testHelloController(){
        String controller = "/hello";
        ResponseEntity<String> stringResponseEntity = restTemplate.getForEntity(URL + controller, String.class);
        return stringResponseEntity;
    }

    /**
     *
     * @return
     */
    @RequestMapping("/resttemplate/{msg}")
    @ResponseBody
    @ApiOperation(value = "hello-msg-DEMO", notes = "hello-msg-DEMO")
    public ResponseEntity testHelloController(@PathVariable(name = "msg", required = true)String msg){
        String controller = "/hello/{msg}";
        ResponseEntity<String> stringResponseEntity = restTemplate.getForEntity(URL + controller, String.class,msg);
        stringResponseEntity = restTemplate.getForEntity(URL+controller,String.class,new HashMap<String,String>(){{put("msg",msg+"_map");}});
        return stringResponseEntity;
    }


}
