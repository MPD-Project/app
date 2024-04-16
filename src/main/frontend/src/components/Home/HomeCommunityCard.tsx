import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faEye } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const HomeCommunityCard = (props: Props) => {
  return (
    <>
      <TitleArea>
        <div className="left">
          <h3 className="title">2024년 3월 30일</h3>
          <ProfileArea>
            <div className="profile-image">
              <Link to="">
                <img src="/img/user.jpg" alt="" />{" "}
              </Link>
            </div>
            <p>또리맘</p>
          </ProfileArea>
        </div>
        <div className="right">
          <p className="type">마이 일기</p>
          <p className="date">2024년 3월 20일 19:14 작성</p>
        </div>
      </TitleArea>
      <ContentArea>
        {/* TODO : 글 클릭 시 일기 상세내용으로 이동 */}
        <Link to="">
          <p>
            로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃
            같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인
            문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘
            입숨을 그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도
            사용된다.
          </p>
        </Link>
        <div className="content-image">
          <Link to="">
            <img src="/img/user.jpg" alt="content" />
          </Link>
        </div>
      </ContentArea>
      <IconArea>
        <div>
          <FontAwesomeIcon icon={faHeart} />
          <span>00</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>00</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faEye} />
          <span>00</span>
        </div>
      </IconArea>
    </>
  );
};

const TitleArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    text-align: left;
    h3 {
      font-size: 24px;
      font-weight: 700;
      display: inline;
      color: var(--color-visible90);
    }
  }
  .right {
    text-align: right;
    .type {
      font-size: 12px;
      font-weight: 500;
      padding-bottom: 3px;
      color: var(--color-primary);
    }
    .date {
      font-size: 14px;
      color: var(--color-visible50);
    }
  }
`;

const ProfileArea = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  .profile-image {
    width: 35px;
    height: 35px;
    border-radius: 50px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  p {
    padding-left: 10px;
    font-weight: 600;
    color: var(--color-visible90);
  }
`;

const ContentArea = styled.div`
  width: 100%;
  margin-top: 25px;
  p {
    font-size: 15px;
    color: var(--color-visible50);
    line-height: 1.2;
  }
  .content-image {
    width: 100%;
    height: 200px;
    margin-top: 10px;
    border-radius: 20px;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
    img {
      width: 100%;
    }
  }
`;

const IconArea = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px 10px 0 10px;
  color: var(--color-visible40);
  svg {
    padding-right: 5px;
  }
  div:not(:last-child) {
    span {
      border-right: 1px solid var(--color-visible40);
      padding-right: 10px;
    }
  }
`;

export default HomeCommunityCard;
