package com.huaxin.hx3d.web.home.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;

import java.math.BigDecimal;
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
 * @since 2021-01-22
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("bo_energy_test")
@ApiModel(value="EnergyTest对象", description="")
public class EnergyTest extends Model {

    private static final long serialVersionUID = 1L;
    @TableId(value = "BO_ENERGY_TEST_ID",type = IdType.UUID)
    private String boEnergyTestId;

    private String energyName;

    private Double energyNum;

    private LocalDateTime timestampVer;


}
