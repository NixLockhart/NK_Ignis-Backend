package com.nkignis.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.nkignis.entity.enums.CheckInMethod;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@TableName("check_ins")
public class CheckIn {

    @TableId(type = IdType.AUTO)
    private Integer id;

    @TableField("user_id")
    private Integer userId;

    @TableField("activity_id")
    private Integer activityId;

    @TableField("check_in_time")
    private LocalDateTime checkInTime;

    @TableField("method")
    private CheckInMethod method;

    @TableField("ai_verified")
    private Boolean aiVerified;
}
