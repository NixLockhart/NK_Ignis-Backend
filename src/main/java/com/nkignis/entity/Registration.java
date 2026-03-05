package com.nkignis.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.nkignis.entity.enums.RegistrationStatus;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@TableName("registrations")
public class Registration {

    @TableId(type = IdType.AUTO)
    private Integer id;

    @TableField("user_id")
    private Integer userId;

    @TableField("activity_id")
    private Integer activityId;

    @TableField("status")
    private RegistrationStatus status;

    @TableField("registered_at")
    private LocalDateTime registeredAt;
}
