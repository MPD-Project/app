package org.mpd.app.configuration.security.provider;

import org.mpd.app.service.login.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;

public class SecurityAuthenticationProvider implements AuthenticationProvider {

    private final PasswordEncoder passwordEncoder;

    @Autowired
    private LoginService loginService;

    public SecurityAuthenticationProvider(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        String username = authentication.getPrincipal().toString();
        String password = authentication.getCredentials().toString();

        User user = (User)loginService.loadUserByUsername(username);

        if(passwordEncoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("회원가입이 되지 않았거나 비밀번호가 틀린 회원입니다. 다시 확인해주세요.");
        }

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username, password, user.getAuthorities());

        return authToken;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
    }

}
