package org.mpd.app.configuration.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@Slf4j
public class SecurityConfig {

    @Bean
    public AuthenticationManager authenticationManager() {
        return new ProviderManager();
    }

    @Bean
    public

    @Bean
    public WebSecurityCustomizer configure() {
        return (web) -> web.ignoring().mvcMatchers("/favicon.ico").requestMatchers(PathRequest.toStaticResources().atCommonLocations());
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        
        // 커스텀 form 사용 설정
        http.formLogin().disable();

        // CSRF 설정
        http.csrf().ignoringAntMatchers("/login","/main","/join");

        // Authorization
        http.authorizeRequests().anyRequest().permitAll();


        
        return http.build();
    }

}
