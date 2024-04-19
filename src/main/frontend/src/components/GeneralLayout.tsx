import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GNB from "./GNB";
import { PATH } from "../contants/routes";
import Login from "../pages/Login";
import Profile from "./Profile";
import Missingpet from "./Missingpet";

type Props = {
  children: React.ReactNode;
};

type Modal = {
  ModalClick: boolean;
};

const GeneralLayout = ({ children }: Props, { ModalClick }: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <GeneralLayoutContainer>
      <LeftMenu>
        <Link to={PATH.HOME}>
          <img src="/img/logo_basic.png" alt="basic logo" />
        </Link>
        <GNB />
      </LeftMenu>
      <CenterContent>{children}</CenterContent>
      <RightMenu>
        <Link to={PATH.Login}>
          <LoginBtn onClick={showModal}>로그인</LoginBtn>
        </Link>
        <Profile />
        <Missingpet />
      </RightMenu>
    </GeneralLayoutContainer>
  );
};

const GeneralLayoutContainer = styled.div`
  width: 1350px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  div {
  }
`;

const CenterContent = styled.div`
  height: 100vh;
`;

const LeftMenu = styled.div`
  border-right: 1px solid var(--color-visible20);
  width: 100%;
  padding: 1em 0 1em 1em;
  img {
    width: 100%;
    padding-right: 1em;
  }
`;

const RightMenu = styled.div`
  border-left: 1px solid var(--color-visible20);
  padding: 1em 1em 1em 1.2em;
`;

const LoginBtn = styled.button`
  /* position: absolute; */
  width: 60px;
  height: 30px;
  color: white;
  background-color: var(--color-primary);
  border-radius: 5px;
  border: none;
  font-weight: bolder;
  cursor: pointer;
`;

export default GeneralLayout;
