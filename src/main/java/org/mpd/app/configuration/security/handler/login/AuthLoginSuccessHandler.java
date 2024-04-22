package org.mpd.app.configuration.security.handler.login;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.mpd.app.model.response.ResponseModel;
import org.mpd.app.model.session.SessionModel;
import org.mpd.app.util.session.SessionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;

@Slf4j
public class AuthLoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    @Autowired
    private SessionUtils sessionUtils;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        String userEmail = authentication.getPrincipal().toString();

        SessionModel sessionModel = SessionModel.builder()
                .email(userEmail)
                .build();

        sessionUtils.setUserSession(sessionModel);

        sendResponse(response, ResponseModel.ofSuccess());

    }

    private void sendResponse(HttpServletResponse response, ResponseModel model) {

        try {

            OutputStream out = null;
            ObjectMapper om = new ObjectMapper();
            String jsonString = om.writeValueAsString(model);

            out = response.getOutputStream();
            out.write(jsonString.getBytes());
            out.flush();

        } catch(Exception e) {
            log.error("LoginSuccessHandler sendResponse Error!!", e);
        }

    }

}
