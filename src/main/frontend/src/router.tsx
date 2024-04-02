import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import App from "./App";
import Home from "./pages/Home";
import GeneralLayout from "./components/GeneralLayout";

interface RouterElement {
  id: number; // 페이지 아이디 (반복문용 고유값)
  path: string; // 페이지 경로
  label: string; // 사이드바에 표시할 페이지 이름
  element: React.ReactNode; // 페이지 엘리먼트
  withAuth?: boolean; // 인증이 필요한 페이지 여부
  isAdmin?: boolean;
}

const PATH = {
  HOME: "/",
  DIARY: "/diary",
  MYPAGE: "/mypage",
};

const routerData: RouterElement[] = [
  {
    id: 0,
    path: PATH.HOME,
    label: "Home",
    element: <Home />,
    withAuth: false,
    isAdmin: false,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: <GeneralLayout key={router.id}>{router.element}</GeneralLayout>,
      // errorElement: <NotFound />,
    };
  }),
);
