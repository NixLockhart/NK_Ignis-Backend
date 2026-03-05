package com.nkignis.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "ai")
public class AiProperties {

    private boolean enable = false;
    private boolean enableDescription = false;
    private boolean enableCheckin = false;
    private boolean enableRecommendation = false;
}
