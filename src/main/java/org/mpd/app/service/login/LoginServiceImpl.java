package org.mpd.app.service.login;

import org.mpd.app.jpa.entity.member.Member;
import org.mpd.app.jpa.repository.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Member member = memberRepository.findByEmail(username);

        if(member == null) {
            throw new UsernameNotFoundException("회원가입이 되지 않았거나 비밀번호가 틀린 회원입니다. 다시 확인해주세요.");
        }

        User user = new User(username, member.getPassword(), null);

        return user;
    }

}
