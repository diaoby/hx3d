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
@TableName("bo_important_events")
@ApiModel(value="ImportantEvents对象", description="")
public class ImportantEvents extends Model {

    private static final long serialVersionUID = 1L;
    @TableId(value = "bo_important_events_id",type = IdType.UUID)
    @ApiModelProperty(value = "重要事件主键")
    private String boImportantEventsId;

    @ApiModelProperty(value = "近一个月的异常数量")
    private Integer exceptionNum;

    @ApiModelProperty(value = "时间戳，即时数据拿最新时间戳，定时删除历史时间戳数据")
    private LocalDateTime timestampVer;


}
