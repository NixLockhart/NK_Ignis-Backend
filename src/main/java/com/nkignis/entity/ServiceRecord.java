package com.nkignis.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@TableName("service_records")
public class ServiceRecord {

    @TableId(type = IdType.AUTO)
    private Integer id;

    @TableField("user_id")
    private Integer userId;

    @TableField("activity_id")
    private Integer activityId;

    private Double hours;

    private String location;

    private String evaluation;

    private Integer rating;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;
}
