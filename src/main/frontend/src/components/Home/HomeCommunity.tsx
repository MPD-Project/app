import React from "react";
import styled from "styled-components";
type Props = {};

const HomeCommunity = (props: Props) => {
  return (
    <ContentWrap>
      HomeCommunity
      <div></div>
    </ContentWrap>
  );
};

const ContentWrap = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow: auto;
  background-color: var(--color-visible10);
  div {
    height: 200vh;
  }
`;

export default HomeCommunity;
