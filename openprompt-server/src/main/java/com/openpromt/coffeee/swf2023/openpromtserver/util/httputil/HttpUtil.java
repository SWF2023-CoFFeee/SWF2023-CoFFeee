package com.openpromt.coffeee.swf2023.openpromtserver.util.httputil;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Arrays;
import java.util.Map;

@Component
public class HttpUtil {
    private final WebClient webClient = WebClient.create();;

    public <T> T getApiResponse(String url, Class<T> responseType) {
        return webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(responseType)
                .block(); // 비동기를 동기적으로 실행하여 결과를 반환합니다.
    }
}