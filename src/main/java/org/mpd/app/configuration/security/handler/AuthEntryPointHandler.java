package org.mpd.app.configuration.security.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.mpd.app.util.servlet.ServletUtils;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class AuthEntryPointHandler implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {

        String requestUri = request.getRequestURI();
        log.info("AuthEntryPoint URI = {}", requestUri);

        boolean ajaxRequest = ServletUtils.isAjaxRequest();
        if (ajaxRequest) {

            ObjectMapper objectMapper = new ObjectMapper();
            response.setContentType("application/json;charset=utf-8");
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write(objectMapper.writeValueAsString("잘못된 요청입니다. 관리자에게 문의해주세요."));


        }

    }

}
