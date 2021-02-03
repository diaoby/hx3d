package com.huaxin.hx3d.web.home.model;

import java.math.BigDecimal;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import java.time.LocalDateTime;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author diaoby
 * @since 2021-02-03
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("bo_window_info")
@ApiModel(value="WindowInfo对象", description="")
public class WindowInfo extends Model {

    private static final long serialVersionUID = 1L;
    @TableId(value = "BO_WINDOW_INFO_ID",type = IdType.UUID)
    private String boWindowInfoId;

    private String picUrl;

    private BigDecimal openClose;

    private LocalDateTime timestampVer;


}
