package com.nkignis.modules.config;

import com.nkignis.common.Result;
import com.nkignis.config.AiProperties;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class ConfigController {

    private final AiProperties aiProperties;

    @GetMapping("/api/config")
    public Result<Map<String, Boolean>> getConfig() {
        Map<String, Boolean> config = new HashMap<>();
        config.put("ai_recommendation", aiProperties.isEnable() && aiProperties.isEnableRecommendation());
        config.put("ai_description", aiProperties.isEnable() && aiProperties.isEnableDescription());
        config.put("ai_checkin", aiProperties.isEnable() && aiProperties.isEnableCheckin());
        return Result.success(config);
    }
}
