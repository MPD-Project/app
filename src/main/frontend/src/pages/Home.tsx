import React, { useState } from "react";
import styled from "styled-components";
import HomeForyou from "../components/Home/HomeForyou";
import HomeCommunity from "../components/Home/HomeCommunity";

type Props = {};

const Home = (props: Props) => {
  const [activeUI, setActiveUI] = useState<number>(0);
  return (
    <HomeContainer>
      <TapMenuWrap>
        <div
          className={activeUI === 0 ? "active" : ""}
          onClick={() => {
            setActiveUI(0);
          }}
        >
          For You
        </div>
        <div
          className={activeUI === 1 ? "active" : ""}
          onClick={() => {
            setActiveUI(1);
          }}
        >
          Community
        </div>
      </TapMenuWrap>
      {activeUI === 0 ? <HomeForyou /> : <HomeCommunity />}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  /* width: 100vw;
  height: 100vh;
  background-color: var(--color-point); */
`;

const TapMenuWrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  div {
    width: 100%;
    height: 100%;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-black30);
    &:nth-child(1) {
      border-right: 1px solid var(--color-black20);
    }
  }
  .active {
    color: var(--color-primary);

    background-color: var(--color-black10);
    box-sizing: border-box;
    border-collapse: collapse;
  }
`;
export default Home;
