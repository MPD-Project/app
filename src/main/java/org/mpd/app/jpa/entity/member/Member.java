package org.mpd.app.jpa.entity.member;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "member")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idx", nullable = false)
    private Integer id;

    @Lob
    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false, length = 30)
    private String password;

}