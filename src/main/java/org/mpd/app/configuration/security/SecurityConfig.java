package org.mpd.app.configuration.security;

import lombok.extern.slf4j.Slf4j;
import org.mpd.app.configuration.security.handler.AuthAccessDeniedHandler;
import org.mpd.app.configuration.security.handler.AuthEntryPointHandler;
import org.mpd.app.configuration.security.provider.SecurityAuthenticationProvider;
import org.mpd.app.global.GlobalUrl;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;

@Configuration
@Slf4j
public class SecurityConfig {

    @Bean
    public PasswordEncoder securityPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager() {
        return new ProviderManager(securityAuthenticationProvider());
    }

    @Bean
    public SecurityAuthenticationProvider securityAuthenticationProvider() { return new SecurityAuthenticationProvider(securityPasswordEncoder()); }

    @Bean
    public WebSecurityCustomizer configure() {
        return (web) -> web.ignoring().mvcMatchers("/favicon.ico").requestMatchers(PathRequest.toStaticResources().atCommonLocations());
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        
        // 커스텀 form 사용 설정
        http.formLogin().disable();

        // CSRF 설정
        http.csrf().ignoringAntMatchers("/login/**","/join/**");
        
        // Session 설정
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED).maximumSessions(1);

        // Authorization
        http.authorizeRequests().anyRequest().permitAll();
        
        // 로그아웃 설정
        http.logout()
                .logoutUrl(GlobalUrl.LOGOUT)
                .invalidateHttpSession(true);

        // 인증 & 인가 Exception 처리
        http.exceptionHandling()
                .accessDeniedHandler(new AuthAccessDeniedHandler())
                .authenticationEntryPoint(new AuthEntryPointHandler());
        
        return http.build();
    }

}
