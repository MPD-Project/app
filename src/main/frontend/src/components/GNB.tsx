import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../contants/routes";

type Props = {};

interface MenuElement {
  title_en: string;
  title_ko: string;
  path: string;
  icon: string;
}

const GNB = (props: Props) => {
  const menuList: MenuElement[] = [
    {
      title_en: "Home",
      title_ko: "홈",
      path: PATH.HOME,
      icon: "",
    },
    {
      title_en: "Diary",
      title_ko: "일기",
      path: PATH.DIARY,
      icon: "",
    },
    {
      title_en: "Community",
      title_ko: "커뮤니티",
      path: PATH.COMMUNITY,
      icon: "",
    },
    {
      title_en: "Care",
      title_ko: "케어",
      path: PATH.CARE,
      icon: "",
    },
    {
      title_en: "Wallet",
      title_ko: "지출 관리",
      path: PATH.WALLET,
      icon: "",
    },
  ];
  return (
    <div>
      {menuList.map((menuItem) => {
        return (
          <div>
            <Link to={menuItem.path}>{menuItem.title_en}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default GNB;
