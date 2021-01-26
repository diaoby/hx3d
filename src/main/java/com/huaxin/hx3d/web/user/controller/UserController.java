package com.huaxin.hx3d.web.user.controller;


import com.huaxin.hx3d.web.user.model.User;
import com.huaxin.hx3d.web.user.service.IUserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;


/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author diaoby
 * @since 2021-01-13
 */
@RestController
@RequestMapping("/home/web/user")
@Api(tags = { "用户管理API" })
public class UserController {

    /**
     *
     */
    @Autowired
    private IUserService userService;

    /**
     *
     * @return
     */
    @ApiOperation(value = "根据用户ID查询用户信息", notes = "根据用户ID查询用户信息")
    @RequestMapping("/getuser/{userId}")
    public User getUser(@PathVariable(name = "userId") int userId){
       return userService.getById(userId);
    }

    /**
     *
     * @return
     */
    @ApiOperation(value = "事件发布demo", notes = "事件发布demo")
    @RequestMapping("/publishuser")
    public void publishUser(){
        userService.publishUserEvent();
    }
}
