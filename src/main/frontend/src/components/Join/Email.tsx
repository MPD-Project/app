import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { PostJoin } from "../../api";
import { useMutation } from "@tanstack/react-query";
import { error } from "console";

const JoinNext = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 140px;
  div {
    margin-left: 8px;
    width: 55px;
    height: 6px;
    background-color: #d9d9d9;
  }

  & div:first-child {
    background-color: var(--color-primary);
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
    color: var(--color-visible50);
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
  top: 270px;
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
`;

const NextBtn = styled.button`
  position: absolute;
  top: 530px;
  border: none;
  border-radius: 5px;
  width: 330px;
  height: 50px;
  background-color: var(--color-primary);
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`;

const ERROR = styled.span`
  color: var(--color-point);
`;

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type FormData = {
  email: string;
  passWord: string;
  passWord1: string;
  extraError?: string;
};

function Email({ setStep }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormData>();

  const mutation = useMutation({
    mutationFn: PostJoin,
    onSuccess: (data) => {
      <NextBtn onClick={() => setStep(2)} />
    },
    onError : (data) => {
      setError("email", {message : "이메일을 확인해 주세요."}
      )
    }
  });

  const EmailValue = (data : FormData) => {
    const { email } = data;
    if(!data.email) {
      setError(
        "email",
        { message : "이미 존재하는 이메일 입니다."}, 
      )
    }
    mutation.mutate({ joinEmail: email });
  }

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
        <span>계정으로 사용할</span>
        <span>이메일을 입력해주세요.</span>
      </JoinInfo>
      <JoinForm onSubmit={handleSubmit(EmailValue)}>
        <input
          {...register("email", {
            required: {
              value: true,
              message: "이메일을 적어주세요",
            },
            pattern: {
              value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
          placeholder="이메일"
        />
      </JoinForm>
      <ERROR>{errors.email?.message}</ERROR>
      <NextBtn>다음</NextBtn>
    </>
  );
}

export default Email;
