import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import Home from "./pages/Home";
import GeneralLayout from "./components/GeneralLayout";
import Diary from "./pages/Diary";
import Community from "./pages/Community";
import Care from "./pages/Care";
import Wallet from "./pages/Wallet";
import { PATH } from "./contants/routes";
import uuid from "react-uuid";

interface RouterElement {
  path: string; // 페이지 경로
  label: string; // 사이드바에 표시할 페이지 이름
  element: React.ReactNode; // 페이지 엘리먼트
  withAuth?: boolean; // 인증이 필요한 페이지 여부
  isAdmin?: boolean;
}

const routerData: RouterElement[] = [
  {
    path: PATH.HOME,
    label: "Home",
    element: <Home />,
    withAuth: false,
    isAdmin: false,
  },
  {
    path: PATH.DIARY,
    label: "Diary",
    element: <Diary />,
    withAuth: false,
    isAdmin: false,
  },
  {
    path: PATH.COMMUNITY,
    label: "Community",
    element: <Community />,
    withAuth: false,
    isAdmin: false,
  },
  {
    path: PATH.CARE,
    label: "Care",
    element: <Care />,
    withAuth: false,
    isAdmin: false,
  },
  {
    path: PATH.WALLET,
    label: "Wallet",
    element: <Wallet />,
    withAuth: false,
    isAdmin: false,
  },
  
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router, index) => {
    return {
      path: router.path,
      element: <GeneralLayout key={uuid()}>{router.element}</GeneralLayout>,
      // errorElement: <NotFound />,
    };
  }),
);
