import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus as faSquarePlus } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
    const [drop, setDrop] = useState(false);
    return (
        <DiaryHeader>
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
            </DiaryHeader>
    );
}



const DiaryHeader = styled.div`
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


export default Header;