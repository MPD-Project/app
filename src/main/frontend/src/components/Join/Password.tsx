import React, { useState }  from "react";
import  styled  from "styled-components";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock , faUnlock } from "@fortawesome/free-solid-svg-icons";




const JoinNext = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 140px;
    div {
        margin-left: 8px;
        width: 55px;
        height: 6px;
        background-color: #D9D9D9;
    }

    & div:first-child {
        background-color: ${(props)=> props.theme.pink.lighter};
    }

    & div:nth-child(2) {
        background-color: ${(props)=> props.theme.pink.lighter};
    }

    & div:nth-child(3) {
        background-color: ${(props)=> props.theme.pink.lighter};
    }
`;

  

const JoinInfo = styled.div`
    position: absolute;
    width: 300px;
    height: 44px;
    display: flex;
    flex-direction: column;
    top: 200px;
    right: 70px;
    span {
        color: ${(props)=> props.theme.gray.darker};        
        font-weight: 500;
        font-size: 18px;
        line-height: 120%;
    }
    & span:last-child {
        font-size: 12px;
    }
`;


const JoinForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:250px;
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
`;

const NextBtn= styled.button`
        position: absolute;
        top: 530px;
        border : none;
        border-radius: 5px;
        width: 330px;
        height: 50px;
        background-color:${(props)=> props.theme.pink.lighter};
        color: #ffffff;
        font-weight:bold;
        cursor: pointer;
`;


const ERROR = styled.span `
    color: ${(props)=> props.theme.pink.veryPink};
`;



type Props = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
  };


type FormData = {
    email:string;
    passWord:string;
    passWord1:string;
    extraError?: string;
};



function Password ({ setStep }: Props) {
    const {register, formState: {errors}, setError, handleSubmit } = useForm<FormData>();
    const onValue = (data: FormData) => {
        if( data.passWord !== data.passWord1) {
            setError(
                "passWord1",
                { message: "비밀번호가 일치하지 않습니다."},
                {shouldFocus : true},
            );
        }
    }
    const [seePwd, setSeePwd] = useState(true);
    const pwdClick = () => {
        setSeePwd(!seePwd)
    };
    return (
        <>
            <JoinNext>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </JoinNext>
            <JoinInfo>
                <span>비밀번호를 설정해주세요.</span>
                <span>영문, 숫자, 특수문자 포함 8글자 이상이어야합니다.</span>
            </JoinInfo>
            <JoinForm onSubmit={handleSubmit(onValue)}>
            { seePwd ? 
            <FontAwesomeIcon 
                            onClick={pwdClick}
                            icon={faLock} 
                            color="#FE2F6E" 
                            size="lg" 
                            style={{position:"absolute", top:25, right: 28, cursor: "pointer" }}/>
                        :
                            <FontAwesomeIcon 
                                onClick={pwdClick}
                                icon={faUnlock} 
                                color="#FE2F6E" 
                                size="lg" 
                                style={{position:"absolute", top:25, right: 28, cursor: "pointer" }}/> }
            <input {...register("passWord", {
                required: {
                    value: true,
                    message: "비밀번호를적어주세요",
                },
                minLength: {
                    value: 8,
                    message: "비밀번호는 8글자 이상이어야합니다.",
                },
                pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
                    message: "비밀번호는 영문, 숫자, 특수문자 포함되어야 합니다."
                },
            })} placeholder="비밀번호입력" />
            <input {...register("passWord1", {
                required: {
                    value: true,
                    message: "비밀번호를 입력해주세요",
                },
                minLength: {
                    value: 8,
                    message: "비밀번호는 8글자 이상이어야합니다.",
                },
                pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
                    message: "비밀번호는 영문, 숫자, 특수문자 포함되어야 합니다."
                },
            })} placeholder="비밀번호 재입력" />
            </JoinForm>
            <ERROR>{errors.passWord?.message}</ERROR>
            <ERROR>{errors.passWord1?.message}</ERROR>
            <NextBtn onClick={()=> setStep(4)}>다음</NextBtn>
        </>
    );
}

export default Password;