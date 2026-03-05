package com.nkignis.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.nkignis.entity.enums.Role;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@TableName("users")
public class User {

    @TableId(type = IdType.AUTO)
    private Integer id;

    private String username;

    private String password;

    private String email;

    private String phone;

    @TableField("role")
    private Role role;

    @TableField("interest_tags")
    private String interestTags;

    @TableField("total_service_hours")
    private Double totalServiceHours;

    @TableField("avatar_url")
    private String avatarUrl;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedAt;
}
