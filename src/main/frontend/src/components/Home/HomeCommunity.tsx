import React from "react";
import styled from "styled-components";
import Card from "../Common/Card";
import HomeCommunityCard from "./HomeCommunityCard";
type Props = {};

const HomeCommunity = (props: Props) => {
  return (
    <ContentWrap>
      <Card>
        <HomeCommunityCard />
      </Card>
      <Card>
        <HomeCommunityCard />
      </Card>
      <Card>
        <HomeCommunityCard />
      </Card>
      <Card>
        <HomeCommunityCard />
      </Card>
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

export default HomeCommunity;
