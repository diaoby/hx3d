package com.huaxin.hx3d.websocket.controller;

import com.huaxin.hx3d.websocket.server.WebSocketServer;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/6 10:36
 * @description：socket
 * @modified By：
 */
@RestController
@Api(tags = { "SOCKET-DEMO" })
public class SocketController {
    /**
     *
     */
    @Autowired
    private WebSocketServer webSocketServer;

    /**
     *
     * @return
     */
    @RequestMapping("/socket/index")
    @ApiOperation(value = "SOCKET-DEMO", notes = "SOCKET-DEMO")
    public String index(){
        return "index";
    }

    /**
     *
     * @return
     */
    @RequestMapping("/socket/webSocket")
    public ModelAndView socket(){
        ModelAndView modelAndView = new ModelAndView("/webSocket");
        return modelAndView;
    }
}
