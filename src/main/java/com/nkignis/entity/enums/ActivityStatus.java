package com.nkignis.entity.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

@Getter
public enum ActivityStatus {
    RECRUITING("recruiting"),
    ONGOING("ongoing"),
    COMPLETED("completed"),
    CANCELLED("cancelled");

    @EnumValue
    @JsonValue
    private final String value;

    ActivityStatus(String value) {
        this.value = value;
    }
}
