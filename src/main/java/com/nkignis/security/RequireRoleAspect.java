package com.nkignis.security;

import com.nkignis.common.BusinessException;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Slf4j
@Aspect
@Component
public class RequireRoleAspect {

    @Around("@annotation(requireRole)")
    public Object checkRole(ProceedingJoinPoint joinPoint, RequireRole requireRole) throws Throwable {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || auth.getDetails() == null) {
            throw new BusinessException(401, "未登录");
        }

        String currentRole = auth.getDetails().toString();
        String[] allowedRoles = requireRole.value();

        boolean hasRole = Arrays.asList(allowedRoles).contains(currentRole);
        if (!hasRole) {
            throw new BusinessException(403, "权限不足");
        }

        return joinPoint.proceed();
    }
}
