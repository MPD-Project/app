import React from "react";
import styled from "styled-components";
type Props = {};

const HomeForyou = (props: Props) => {
  return (
    <ContentWrap>
      HomeForyou
      <div></div>
    </ContentWrap>
  );
};

const ContentWrap = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow: auto;
  background-color: var(--color-black10);
  div {
    height: 200vh;
  }
`;

export default HomeForyou;
