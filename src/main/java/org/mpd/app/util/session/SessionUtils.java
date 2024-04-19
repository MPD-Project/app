package org.mpd.app.util.session;

import lombok.extern.slf4j.Slf4j;
import org.mpd.app.model.session.SessionModel;
import org.mpd.app.util.servlet.ServletUtils;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class SessionUtils {

    private static final String USER_SESSION_KEY = "SESSION_USER";

    public void setUserSession(SessionModel sessionModel) {
        setAttributes(USER_SESSION_KEY, sessionModel);
    }

    public SessionModel getUserSession() {
        return (SessionModel) getAttributes(USER_SESSION_KEY);
    }

    public void setAttributes(String key, Object value) {
        ServletUtils.getSession().setAttribute(key, value);
    }

    public Object getAttributes(String key) {
        return ServletUtils.getSession().getAttribute(key);
    }

    public void removeAttributes() {
        ServletUtils.getSession().removeAttribute(USER_SESSION_KEY);
    }

}
