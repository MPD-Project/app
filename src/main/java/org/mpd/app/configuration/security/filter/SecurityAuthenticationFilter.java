package org.mpd.app.configuration.security.filter;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
public class SecurityAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    public SecurityAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.setAuthenticationManager(authenticationManager);
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        UsernamePasswordAuthenticationToken authRequest;

        try {
            setUsernameParameter("loginEmail");
            setPasswordParameter("loginPassword");
            authRequest = getAuthRequest(request);
            setDetails(request, authRequest);
        } catch(Exception e) {
            log.error("attemptAuthentication Exception", e);
            throw new RuntimeException("잘못된 요청입니다. 다시 시도해주세요.");
        }

        return this.getAuthenticationManager().authenticate(authRequest);

    }

    private UsernamePasswordAuthenticationToken getAuthRequest(HttpServletRequest request) throws Exception {

        try {

            String username = obtainUsername(request);
            String password = obtainPassword(request);
            return new UsernamePasswordAuthenticationToken(username, password);

        } catch(UsernameNotFoundException e) {
            throw new UsernameNotFoundException(e.getMessage());
        } catch (Exception e) {
            throw new Exception(e.getMessage(), e.getCause());
        }

    }

}
