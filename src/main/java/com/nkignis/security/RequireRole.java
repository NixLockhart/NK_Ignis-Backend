package com.nkignis.security;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 角色权限注解，用于标注需要特定角色才能访问的接口方法。
 * 使用方式：@RequireRole("admin") 或 @RequireRole({"admin", "volunteer"})
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RequireRole {
    String[] value();
}
