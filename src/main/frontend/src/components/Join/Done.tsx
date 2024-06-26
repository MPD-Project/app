import React, { useState } from "react";
import styled from "styled-components";

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

  & div:nth-child(2) {
    background-color: var(--color-primary);
  }

  & div:nth-child(3) {
    background-color: var(--color-primary);
  }

  & div:nth-child(4) {
    background-color: var(--color-primary);
  }

  & div:last-child {
    background-color: var(--color-primary);
  }
`;

const JoinInfo = styled.div`
  position: absolute;
  width: 264px;
  height: 44px;
  display: flex;
  flex-direction: column;
  top: 180px;
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
  top: 240px;

  & input:first-child {
    display: none;
  }

  & input:last-child {
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

  span {
    margin-right: 190px;
    display: flex;
    color: var(--color-primary);
    font-weight: 550;
    font-size: 15px;
    line-height: 120%;
    margin-bottom: 5px;
  }

  p {
    padding-left: 3px;
    color: var(--color-primary);
    font-weight: 550;
    font-size: 13px;
    line-height: 120%;
  }

  img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
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

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

function Done({ setStep }: Props) {
  const [img, setImg] = useState("/img/profile.jpeg");
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
        <span>프로필을 설정해주세요.</span>
      </JoinInfo>
      <JoinForm>
        <span>
          프로필 사진<p>(선택)</p>
        </span>
        <img src={img} />
        <input type="file" accept="image/jpg,impge/png,image/jpeg" />
        <span>
          닉네임<p>(*필수)</p>
        </span>
        <input type="text" placeholder="닉네임" />
      </JoinForm>
      <NextBtn>완료</NextBtn>
    </>
  );
}

export default Done;
