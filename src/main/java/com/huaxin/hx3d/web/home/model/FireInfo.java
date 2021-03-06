package com.huaxin.hx3d.web.home.model;

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
@TableName("bo_fire_info")
@ApiModel(value="FireInfo对象", description="")
public class FireInfo extends Model {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "消防概况主键")
    @TableId(value = "bo_fire_info_id",type = IdType.UUID)
    private String boFireInfoId;

    private Integer fireCheckNum;

    @ApiModelProperty(value = "火灾巡检总数量")
    private Integer fireCheckTotal;

    @ApiModelProperty(value = "火情次数")
    private Integer fireNum;

    @ApiModelProperty(value = "预防火灾数")
    private Integer preFireNum;

    @ApiModelProperty(value = "时间戳，即时数据拿最新时间戳，定时删除历史时间戳数据")
    private LocalDateTime timestampVer;


}
