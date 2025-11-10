import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Challenges from "../pages/Challenges";
import MyActivites from "../pages/MyActivites";
import Login from "../pages/Login";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/challenges",
        Component: Challenges,
      },
      {
        path: "/my-activites",
        Component: MyActivites,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
