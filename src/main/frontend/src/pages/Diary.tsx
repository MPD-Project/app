import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus as faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
type Props = {};

const Diary = (props: Props) => {
  const [drop, setDrop] = useState(false);
  return (
    <>
      <Header>
        <h1>Diary</h1>
        <p>일기</p>
        <FontAwesomeIcon
          icon={faSquarePlus}
          color="rgba(254, 47, 110, 1)"
          size={"xl"}
          style={{ paddingLeft: 15, cursor: "pointer" }}
        />
        <ul onClick={() => setDrop(!drop)}>
          <FontAwesomeIcon
            icon={faChevronDown}
            color="rgba(255, 152, 189, 1)"
            style={{ paddingRight: 5, cursor: "pointer" }}
          />
          최신순
          <li></li>
          <li></li>
        </ul>
        <FontAwesomeIcon
          icon={faBookmark}
          color="rgba(255, 152, 189, 1)"
          size={"xl"}
          style={{ paddingLeft: 15, cursor: "pointer" }}
        />
      </Header>
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

const Header = styled.div`
  width: 810px;
  height: 66.75px;
  border-bottom: 1px solid rgba(223, 223, 223, 1);
  display: flex;
  background-color: white;
  align-items: center;
  h1 {
    color: var(--color-point);
    font-weight: 700;
    font-size: 22.3429px;
    line-height: 100%;
    padding-left: 25px;
  }

  p {
    color: var(--color-point);
    font-weight: 900;
    font-size: 18px;
    padding-left: 10px;
  }

  ul {
    color: var(--color-primary);
    padding-left: 500px;
  }
`;

const ContentWarp = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: var(--color-visible10);
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 5px;
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
