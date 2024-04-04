import React, { useState } from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";
import GNB from "./GNB";
import { PATH } from "../contants/routes";
import Login from "../pages/Login";


type Props = {
  children: React.ReactNode;
};

type Modal = {
  ModalClick  : boolean;
};

const GeneralLayout = ({ children }: Props , { ModalClick} : any) => {
  const [modalOpen, setModalOpen]= useState(false);

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
          <button onClick={showModal}>Login</button>
       
        </Link> 
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
  border-right: 1px solid var(--color-black20);
  width: 100%;
  padding: 1em 0 1em 1em;
  img {
    width: 100%;
    padding-right: 1em;
  }
`;

const RightMenu = styled.div`
  border-left: 1px solid var(--color-black20);
  padding: 1em 1em 1em 0;
`;

export default GeneralLayout;
