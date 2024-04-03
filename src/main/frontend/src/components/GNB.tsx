import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PATH } from "../contants/routes";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faComments, faHandHoldingMedical, faHouse, faWallet } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";

type Props = {};

interface MenuElement {
  title_en: string;
  title_ko: string;
  path: string;
  icon: JSX.Element;
}

const menuList: MenuElement[] = [
  {
    title_en: "Home",
    title_ko: "홈",
    path: PATH.HOME,
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    title_en: "Diary",
    title_ko: "일기",
    path: PATH.DIARY,
    icon: <FontAwesomeIcon icon={faBook} />,
  },
  {
    title_en: "Community",
    title_ko: "커뮤니티",
    path: PATH.COMMUNITY,
    icon: <FontAwesomeIcon icon={faComments} />,
  },
  {
    title_en: "Care",
    title_ko: "케어",
    path: PATH.CARE,
    icon: <FontAwesomeIcon icon={faHandHoldingMedical} />,
  },
  {
    title_en: "Wallet",
    title_ko: "지출 관리",
    path: PATH.WALLET,
    icon: <FontAwesomeIcon icon={faWallet} />,
  },
];

const GNB = (props: Props) => {
  const { pathname } = useLocation();

  return (
    <MenuContainer>
      {menuList.map((menuItem) => {
        return (
          <Link to={menuItem.path} key={uuid()}>
            <MenuItem className={pathname === menuItem.path ? "active" : ""}>
              <i>{menuItem.icon}</i>
              <div className="text">
                {menuItem.title_en}
                <span>{menuItem.title_ko}</span>
              </div>
            </MenuItem>{" "}
          </Link>
        );
      })}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  padding-top: 4rem;
`;

const MenuItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  gap: 1rem;
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--color-black20);
  padding: 1rem 0;
  position: relative;
  i {
    text-align: center;
  }
  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1.5rem;
    span {
      font-size: 12px;
      font-weight: 400;
    }
  }
  &:hover {
    color: var(--color-primary);
    ::after {
      content: "";
      width: 4px;
      height: 2rem;
      border-radius: 2px 0 0 2px;
      background-color: var(--color-primary);
      position: absolute;
      top: 0;
      bottom: 0;
      right: -1px;
      margin: auto;
    }
  }
  &.active {
    color: var(--color-primary);
    ::after {
      content: "";
      width: 4px;
      height: 2rem;
      border-radius: 2px 0 0 2px;
      background-color: var(--color-primary);
      position: absolute;
      top: 0;
      bottom: 0;
      right: -1px;
      margin: auto;
    }
  }
`;

export default GNB;
