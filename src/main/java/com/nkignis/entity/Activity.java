package com.nkignis.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.nkignis.entity.enums.ActivityStatus;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@TableName("activities")
public class Activity {

    @TableId(type = IdType.AUTO)
    private Integer id;

    private String title;

    private String description;

    @TableField("ai_description")
    private String aiDescription;

    private String location;

    @TableField("start_time")
    private LocalDateTime startTime;

    @TableField("end_time")
    private LocalDateTime endTime;

    @TableField("max_volunteers")
    private Integer maxVolunteers;

    @TableField("status")
    private ActivityStatus status;

    @TableField("qr_code")
    private String qrCode;

    @TableField("creator_id")
    private Integer creatorId;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedAt;
}
