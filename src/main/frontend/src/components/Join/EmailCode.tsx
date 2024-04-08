import React  from "react";
import  styled  from "styled-components";
import { useForm } from "react-hook-form";





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
`;

  

const JoinInfo = styled.div`
    position: absolute;
    width: 264px;
    height: 44px;
    display: flex;
    flex-direction: column;
    top: 200px;
    right: 100px;
    span {
        color: ${(props)=> props.theme.gray.darker};        
        font-weight: 500;
        font-size: 18px;
        line-height: 120%;
    }
`;


const JoinForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:270px;
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
    position: absolute;
    top: 360px;
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



function EmailCode ({ setStep }: Props) {
    const {register, formState: {errors} } = useForm<FormData>();
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
                <span>이메일로 인증코드가 전송되었습니다.</span>
                <span>인증코드를 입력해주세요.</span>
            </JoinInfo>
            <JoinForm>
            <input {...register("email", {
                required: {
                    value: true,
                    message: "인증코드를 적어주세요",
                },
            })} placeholder="인증코드" />
            </JoinForm>
            <ERROR>이메일을 받지 못하셨나요?</ERROR>
            <ERROR>{errors.email?.message}</ERROR>
            <NextBtn onClick={()=> setStep(3)}>다음</NextBtn>
        </>
    );
}

export default EmailCode;