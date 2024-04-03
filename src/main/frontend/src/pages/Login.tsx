import React from "react";
import { Link } from "react-router-dom";
import  styled  from "styled-components";
import { PATH } from "../contants/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock , faX } from "@fortawesome/free-solid-svg-icons";


const Logo = styled.img`
    position: absolute;
    top:140px;
    width: 250px;
    height: 25px;
`;


const LoginBox = styled.div`
    width: 430px;
    height: 630px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:200px;
    input {
        margin: 10px;
        padding-left: 20px;
        background-color: #F0F0F0;
        color: #828282;
        border : none;
        border-radius: 5px;
        width: 330px;
        height: 50px;
        &:focus {
            outline: none;
        }
    }

    & input:last-child {
        background-color:#FF98BD;
        color: #ffffff;
        font-weight:bold;
        padding-right:20px;
        margin-top: 35px;
        cursor: pointer;
    }

    a {
        padding-right: 175px;
        font-size: 12px;
        color: #FE2F6E;
        font-weight: bold;
        cursor: pointer;
    }

`;


const JoinInfo = styled.div`
    position: absolute;
    top: 460px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        padding-right: 10px;
        color: #828282;
        font-weight: bolder;
        font-size: 12px;
    }

    a {
        font-size: 15px;
        color: #FE2F6E;
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
    top: 500px;
    input {
        margin: 10px;
        background-color: #ffffff;
        color: #FE2F6E;
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


function Login() {
    return (
        <LoginBox>
            <Logo src="/img/logo_basic.png" alt="basic logo"/>
            <LoginForm method="POST">
                <input name="loginEmail" type="text" required  placeholder="이메일"/>
                <FontAwesomeIcon icon={faLock} color="#FE2F6E" size="lg"/>
                <input name="loginPwd" type="password" required placeholder="비밀번호"/>
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
    );

}

export default Login;