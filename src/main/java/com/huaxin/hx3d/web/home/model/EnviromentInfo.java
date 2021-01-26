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
 * @since 2021-01-20
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("bo_enviroment_info")
@ApiModel(value="EnviromentInfo对象", description="")
public class EnviromentInfo extends Model {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "环境概况主键")
    @TableId(value = "bo_enviroment_info_id",type = IdType.UUID)
    private String boEnviromentInfoId;

    @ApiModelProperty(value = "PM2.5")
    private BigDecimal pm25;

    @ApiModelProperty(value = "温度")
    private BigDecimal temperature;

    @ApiModelProperty(value = "湿度")
    private BigDecimal humidity;

    @ApiModelProperty(value = "通知关窗人数")
    private Integer personNum;

    @ApiModelProperty(value = "时间戳，即时数据拿最新时间戳，定时删除历史时间戳数据")
    private LocalDateTime timestampVer;


}
