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
@TableName("bo_part_info")
@ApiModel(value="PartInfo对象", description="")
public class PartInfo extends Model {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "园区概况主键主键")
    @TableId(value = "bo_part_info_id",type = IdType.UUID)
    private String boPartInfoId;

    @ApiModelProperty(value = "园区成本指数")
    private BigDecimal costIndex;

    @ApiModelProperty(value = "园区安全指数")
    private BigDecimal securityIndex;

    @ApiModelProperty(value = "效率指数")
    private BigDecimal efficiencyIndex;

    @ApiModelProperty(value = "园区盈利指数")
    private BigDecimal profitIndex;

    @ApiModelProperty(value = "时间戳，即时数据拿最新时间戳，定时删除历史时间戳数据")
    private LocalDateTime timestampVer;


}
