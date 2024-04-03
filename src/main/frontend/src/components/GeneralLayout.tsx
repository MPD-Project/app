import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GNB from "./GNB";
import { PATH } from "../contants/routes";

type Props = {
  children: React.ReactNode;
};

const GeneralLayout = ({ children }: Props) => {
  return (
    <GeneralLayoutContainer>
      <LeftMenu>
        <Link to={PATH.HOME}>
          <img src="/img/logo_basic.png" alt="basic logo" />
        </Link>
        <GNB />
      </LeftMenu>
      {children}
      <RightMenu></RightMenu>
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
