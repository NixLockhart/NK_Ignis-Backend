package com.nkignis.entity.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

@Getter
public enum CheckInMethod {
    QR("qr"),
    MANUAL("manual"),
    AI("ai");

    @EnumValue
    @JsonValue
    private final String value;

    CheckInMethod(String value) {
        this.value = value;
    }
}
