package com.nkignis.entity.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

@Getter
public enum Role {
    ADMIN("admin"),
    VOLUNTEER("volunteer");

    @EnumValue
    @JsonValue
    private final String value;

    Role(String value) {
        this.value = value;
    }
}
