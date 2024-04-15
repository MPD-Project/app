package org.mpd.app.jpa.repository.member;

import org.mpd.app.jpa.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

    Member findByEmail(String email);

}
