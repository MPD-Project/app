package org.mpd.app.configuration.security.handler.login;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.mpd.app.model.response.ResponseModel;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;

@Slf4j
public class AuthLoginFailureHandler extends SimpleUrlAuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {

        sendResponse(response, new ResponseModel(ResponseModel.ResponseStatus.FAIL, exception.getMessage()));

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
            log.error("LoginFailureHandler sendResponse Error!!", e);
        }

    }


}
