package com.huaxin.hx3d.energy.hj.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/22 9:28
 * @description：用户实体
 * @modified By：
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
/**
 * 用户信息
 */
public class User implements Serializable {
    //用户名
    private String loginName;
    //密码
    private String loginPwd;
    //用户ID
    private String userID;
    //用户名称
    private String userName;
    //密匙
    private String userToken;
    //用户组织
    private String userOrgID;
    //对应多个场站
    private List<Org> orgList;
}
