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
          <dt>이름</dt>
          <dd>호떡</dd>
        </dl>
        <dl>
          <dt>종</dt>
          <dd>강아지</dd>
        </dl>
        <dl>
          <dt>생일</dt>
          <dd>2017.03.19</dd>
        </dl>
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
    flex-wrap: wrap;
    dd,
    dt {
      width: 100%;
    }
  }
`;
export default Profile;
