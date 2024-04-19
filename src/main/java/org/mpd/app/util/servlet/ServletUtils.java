package org.mpd.app.util.servlet;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class ServletUtils {

    public static boolean isAjaxRequest() {

        HttpServletRequest request = getRequest();
        String header = request.getHeader("x-requested-with");

        if(StringUtils.isEmpty(header)) {
            return false;
        }

        return header.equalsIgnoreCase("XMLHttpRequest");

    }

    public static HttpServletRequest getRequest() {

        ServletRequestAttributes requestAttributes = (ServletRequestAttributes)RequestContextHolder.getRequestAttributes();
        if(requestAttributes == null) {
            return null;
        }
        return requestAttributes.getRequest();

    }

    public static HttpSession getSession() {
        return getRequest().getSession();
    }

}
