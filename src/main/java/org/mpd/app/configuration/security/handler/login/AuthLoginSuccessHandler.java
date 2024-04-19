package org.mpd.app.configuration.security.handler.login;

import lombok.extern.slf4j.Slf4j;
import org.mpd.app.model.session.SessionModel;
import org.mpd.app.util.servlet.ServletUtils;
import org.mpd.app.util.session.SessionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Slf4j
public class AuthLoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    @Autowired
    private SessionUtils sessionUtils;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        String useremail = authentication.getPrincipal().toString();

        SessionModel sessionModel = SessionModel.builder()
                .email(useremail)
                .build();

        sessionUtils.setUserSession(sessionModel);

        boolean ajaxRequest = ServletUtils.isAjaxRequest();

        if(ajaxRequest) {

        }

    }


}
