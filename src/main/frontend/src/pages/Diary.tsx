import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus as faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Diary/Header";
type Props = {};

const Diary = (props: Props) => {
  return (
    <>
    <Header />
      <AnimatePresence>
        <ContentWarp>
          <Content variants={contentVariants} whileHover="hover" initial="nomal">
            <ContentItem>
              <div>
                <img src="/img/user.jpg" alt="" />
              </div>
              <div>
                <h1>겨울이랑 신나는 산책</h1>
                <p>오늘은 겨울이 생일이었다! 바보겨울 뚱뚱이 사랑해 어쩌구 ...</p>
                <span>2024년 4월 19일 10:51 작성</span>
                <FontAwesomeIcon
                  icon={faBookmark}
                  size="xl"
                  color="rgba(254, 47, 110, 1)"
                  style={{ paddingRight: 5, cursor: "pointer" }}
                />
              </div>
            </ContentItem>
          </Content>
          <Content>2</Content>
          <Content>3</Content>
        </ContentWarp>
      </AnimatePresence>
    </>
  );
};

const contentVariants = {
  nomal: {
    zIndex: 10,
    scale: 1,
  },

  hover: {
    scale: 1.1,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};


const ContentWarp = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow: auto;
  background-color: var(--color-visible10);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Content = styled(motion.div)`
  margin-top: 25px;
  margin-left: 8px;
  background-color: white;
  border-radius: 10px;
  width: 250px;
  height: 400px;
  box-shadow: 1px 2px 2px rgba(158, 158, 158, 0.3);
  cursor: pointer;
`;

const ContentItem = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & div:first-child {
    width: 200px;
    height: 150px;
    img {
      border-radius: 10px;
      width: 100%;
    }
  }

  & div:last-child {
    width: 220px;
    margin-top: 60px;
    h1 {
      margin-top: 10px;
      font-size: 18px;
      font-weight: bold;
      color: var(--color-visible90);
    }
    p {
      margin-top: 15px;
      font-size: 15px;
      font-weight: 540;
      color: var(--color-visible50);
    }

    span {
      font-size: 13px;
      font-weight: bold;
      color: var(--color-visible50);
    }
  }
`;

export default Diary;
