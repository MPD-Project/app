import React from "react";
import styled from "styled-components";
import Card from "../Common/Card";
import HomeForyouCard from "./HomeForyouCard";
import Community from "../../pages/Community";
import { Link } from "react-router-dom";
import { PATH } from "../../contants/routes";

type Props = {};

const HomeForyou = (props: Props) => {
  return (
    <ContentWrap>
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
      <Link to={PATH.DIARY}>
        <HomeBtn>내가 쓴 글 더보기👀</HomeBtn>
      </Link>
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
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const HomeBtn = styled.button`
  margin-top: 30px;
  width: 250px;
  height: 51px;
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  background-color: var(--color-visible10);
  color : var(--color-primary);
  font-weight: bolder;
  cursor: pointer;
`;

export default HomeForyou;
