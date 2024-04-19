import React from "react";
import styled from "styled-components";

type Props = {};

const Profile = (props: Props) => {
  return (
    <ProfileContainer>
      <UserArea>
        <div>
          <img src="img/user.jpg" alt="user" />
        </div>
        <p>호떡이 어무니</p>
      </UserArea>
      <PetArea>
        <h3>나의 PET 정보</h3>
        <dl>
          <div>
            <dt>이름</dt>
            <dd>호떡 ♂</dd>
          </div>
          <div>
            <dt>종</dt>
            <dd>강아지</dd>
          </div>
          <div>
            <dt>생일</dt>
            <dd>2017.03.19</dd>
          </div>
        </dl>
        <button>나의 프로필 수정</button>
      </PetArea>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  div {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    display: flex;
    overflow: hidden;
  }
  p {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-visible90);
  }
`;

const PetArea = styled.div`
  width: 100%;
  padding-top: 20px;
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: var(--color-primary);
  }
  dl {
    display: flex;
    margin-top: 15px;
    div {
      width: 100%;
      text-align: center;
      padding: 0 10px;
      box-sizing: border-box;
      dt {
        padding-bottom: 10px;
        font-size: 14px;
        color: var(--color-visible40);
      }
      dd {
        color: var(--color-visible40);
        font-weight: 600;
      }
    }
    div:not(:last-child) {
      border-right: 1px solid var(--color-visible20);
    }
  }
  button {
    width: 100%;
    height: 30px;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    font-weight: 600;
    background-color: var(--color-visible00);
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
  }
`;
export default Profile;
