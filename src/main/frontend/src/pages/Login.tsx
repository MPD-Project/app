import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock , faX , faUnlock } from "@fortawesome/free-solid-svg-icons";
import Join from "./Join";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { PostLogin } from "../api";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../contants/routes";


const OverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0%;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;

const Logo = styled.img`
  position: absolute;
  top: 65px;
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
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 110px;
  input {
    margin: 10px;
    padding-left: 20px;
    background-color: #f0f0f0;
    color: var(--color-visible50);
    border: none;
    border-radius: 5px;
    width: 330px;
    height: 50px;
    &:focus {
      outline: none;
    }
  }

  & input:last-child {
    background-color: var(--color-primary);
    color: #ffffff;
    font-weight: bold;
    padding-right: 20px;
    margin-top: 35px;
    cursor: pointer;
  }

  span {
        font-size: 13px;
        color: var(--color-point);
        font-weight: bolder;
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
    color: var(--color-visible50);
    font-weight: bolder;
    font-size: 12px;
  }

    span {
        font-size: 15px;
        color: var(--color-point);
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
    color: var(--color-point);
    font-weight: bold;
    border: 1px solid rgb(255, 152, 189);
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

function Login( props: any ){
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: PostLogin,
    onSuccess: (data) => {
      console.log(data);
    },
  });

    //로그인 처리 로직
    const [ email, setEmail ] = useState("");
    const [ pwd , setPwd ] = useState("");
    const [errorMsg, setErrorMsg ] = useState("");

    const handleLogin = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(email === "" || pwd === ""){
          setErrorMsg("이메일 또는 비밀번호를 입력해주세요.")
          return;
        } else if(!email) {
          setErrorMsg("가입되어 있지 않은 계정입니다.")
          return;
        }
        mutation.mutate({ loginEmail: email, loginPassword: pwd });
  };

  const [seePwd, setSeePwd] = useState(true);
  const pwdClick = () => {
    setSeePwd(!seePwd);
  };

    const { onClose } = props;
    const [modalOpen, setModalOpen]= useState(false);

    return (
        <OverLay>
            <LoginBox>
                    <FontAwesomeIcon onClick={() => {onClose(false)}}
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
                        <span>{errorMsg}</span>
                        <input  type="submit" value="로그인" />
                    </LoginForm>
                    <JoinInfo>
                        <p>계정이 없으신가요?</p>
                          <span onClick={()=> setModalOpen(!modalOpen)}>회원가입</span>
                    </JoinInfo>
                    <SnsLogin>
                        <input type="button" value="구글 로그인" />
                        <input type="button" value="카카오톡 로그인" />
                        <input type="button" value="네이버 로그인" />
                    </SnsLogin>
            </LoginBox>
                    { modalOpen ? <Join onClose={setModalOpen}/> : null }
        </OverLay>
    );
}

export default Login;
