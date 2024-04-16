import React from "react";
import styled from "styled-components";
import Card from "../Common/Card";
import HomeForyouCard from "./HomeForyouCard";

type Props = {};

const HomeForyou = (props: Props) => {
  return (
    <ContentWrap>
      {/* <div> */}
      <Card>
        <HomeForyouCard />
      </Card>
      <Card>
        <HomeForyouCard />
      </Card>
      <Card>
        <HomeForyouCard />
      </Card>
      <Card>
        <HomeForyouCard />
      </Card>
      {/* </div> */}
    </ContentWrap>
  );
};

const ContentWrap = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow: auto;
  background-color: var(--color-visible10);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default HomeForyou;
