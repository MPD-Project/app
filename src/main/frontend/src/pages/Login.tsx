import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  styled  from "styled-components";
import { PATH } from "../contants/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock , faX , faUnlock } from "@fortawesome/free-solid-svg-icons";



const OverLay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left:0%;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9999;
`;

const Logo = styled.img`
    position: absolute;
    top:65px;
    width: 250px;
    height: 23px;
`;


const LoginBox = styled.div`
    width: 430px;
    height: 630px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    left: 35%;
    top: 5%;
    position: absolute;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:110px;
    input {
        margin: 10px;
        padding-left: 20px;
        background-color: #F0F0F0;
        color: ${(props)=> props.theme.gray.darker};
        border : none;
        border-radius: 5px;
        width: 330px;
        height: 50px;
        &:focus {
            outline: none;
        }
    }

    & input:last-child {
        background-color:${(props)=> props.theme.pink.lighter};
        color: #ffffff;
        font-weight:bold;
        padding-right:20px;
        margin-top: 35px;
        cursor: pointer;
    }

    a {
        padding-right: 175px;
        font-size: 12px;
        color:${(props)=> props.theme.pink.veryPink};
        font-weight: bold;
        cursor: pointer;
    }

`;


const JoinInfo = styled.div`
    position: absolute;
    top: 365px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        padding-right: 10px;
        color: ${(props)=> props.theme.gray.darker};
        font-weight: bolder;
        font-size: 12px;
    }

    a {
        font-size: 15px;
        color: ${(props)=> props.theme.pink.veryPink};
        font-weight: bold;
        cursor: pointer;
    }
`;


const SnsLogin = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 420px;
    input {
        margin: 10px;
        background-color: #ffffff;
        color: ${(props)=> props.theme.pink.veryPink};
        font-weight: bold;
        border : 1px solid  #FF98BD;
        border-radius: 5px;
        width: 330px;
        height: 40px;
        padding-right: 10px;
        cursor: pointer;
        &:focus {
            outline: none;
        }
    }
        
`;

function Login(){
    //로그인 처리 로직
    const [email, setEmail] = useState("");
    const [ pwd , setPwd ] = useState("");
    const handleLogin = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const [seePwd, setSeePwd] = useState(true);
    const pwdClick = () => {
        setSeePwd(!seePwd)
    };

    const modalBack = useNavigate();
    const handleClose = () => {
          modalBack("/");
      };
    
    return (
        <OverLay>
            <LoginBox>
                    <FontAwesomeIcon onClick={handleClose} 
                                     icon={faX} 
                                     color="#D9D9D9" 
                                     size="xl" 
                                     style={{position:"absolute", top:20, right: 28, cursor: "pointer"  }}/>
                    <Logo src="/img/logo_basic.png" alt="basic logo"/>
                    <LoginForm onSubmit={handleLogin}>
                        <input 
                            name="loginEmail" 
                            type="text" 
                            required  
                            value={email}
                            onChange={(e)=> setEmail(e.currentTarget.value)}
                            placeholder="이메일"
                            />
                        { seePwd ? 
                        <FontAwesomeIcon 
                                        onClick={pwdClick}
                                        icon={faLock} 
                                        color="#FE2F6E" 
                                        size="lg" 
                                        style={{position:"absolute", top:95, right: 28, cursor: "pointer" }}/>
                        :
                            <FontAwesomeIcon 
                                onClick={pwdClick}
                                icon={faUnlock} 
                                color="#FE2F6E" 
                                size="lg" 
                                style={{position:"absolute", top:95, right: 28, cursor: "pointer" }}/> }
                        <input 
                            name="loginPwd" 
                            type={ seePwd ? "password" : "text" } 
                            required 
                            placeholder="비밀번호"
                            value={pwd}
                            onChange={(e)=>setPwd(e.currentTarget.value)}
                            />
                        <a href="">비밀번호를 잊어버리셨나요?</a>
                        <input type="button" value="로그인" />
                    </LoginForm>
                    <JoinInfo>
                        <p>계정이 없으신가요?</p>
                        <Link to={PATH.Join}>회원가입</Link>
                    </JoinInfo>
                    <SnsLogin>
                        <input type="button" value="구글 로그인" />
                        <input type="button" value="카카오톡 로그인" />
                        <input type="button" value="네이버 로그인" />
                    </SnsLogin>
            </LoginBox>
        </OverLay>
    );

}

export default Login;