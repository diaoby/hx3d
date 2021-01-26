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
@TableName("bo_energy_info")
@ApiModel(value="EnergyInfo对象", description="")
public class EnergyInfo extends Model {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "能耗概况")
    @TableId(value = "bo_energy_info_id",type = IdType.UUID)
    private String boEnergyInfoId;

    @ApiModelProperty(value = "本日总耗能（kwh）")
    private BigDecimal dayEnergyTotal;

    @ApiModelProperty(value = "本日总耗能升降幅")
    private BigDecimal dayEnergyTotalRatio;

    @ApiModelProperty(value = "本年总耗能（kwh）")
    private BigDecimal yearEnergyTotal;

    @ApiModelProperty(value = "本年总耗能升降幅")
    private BigDecimal yearEnergyTotalRation;

    @ApiModelProperty(value = "本日总负荷（kwh）")
    private BigDecimal dayLoadTotal;

    @ApiModelProperty(value = "本日总负荷升降幅")
    private BigDecimal dayLoadRation;

    @ApiModelProperty(value = "本年平均能耗（kwh）")
    private BigDecimal yearEnergyAvg;

    @ApiModelProperty(value = "本年平均能耗升降幅")
    private BigDecimal yearEnergyAvgRation;

    @ApiModelProperty(value = "本日总能耗（元）")
    private BigDecimal dayEnergy;

    @ApiModelProperty(value = "本日总能耗（元）升降幅")
    private BigDecimal dayEnergyRation;

    @ApiModelProperty(value = "本年总电费（元）")
    private BigDecimal yearElecFees;

    @ApiModelProperty(value = "本年总电费升降幅")
    private BigDecimal yearElecFeesRation;

    @ApiModelProperty(value = "时间戳，即时数据拿最新时间戳，定时删除历史时间戳数据")
    private LocalDateTime timestampVer;


}
