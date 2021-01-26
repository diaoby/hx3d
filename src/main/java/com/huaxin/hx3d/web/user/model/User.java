package com.huaxin.hx3d.web.user.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author diaoby
 * @since 2021-01-13
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("bo_user")
@ApiModel(value="User对象", description="")
@Builder
public class User extends Model {

    private static final long serialVersionUID = 1L;

    private Integer age;

    private String password;

    private String userName;

    @TableId(value = "user_Id", type = IdType.AUTO)
    private Integer userId;


}
