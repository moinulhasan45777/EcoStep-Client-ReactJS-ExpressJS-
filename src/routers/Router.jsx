import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import Challenges from "../pages/Challenges.jsx";
import MyActivites from "../pages/MyActivites.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import MyProfile from "../pages/MyProfile.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AddChallenges from "../pages/AddChallenges.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import Challenge from "../pages/Challenge.jsx";
import Error from "../pages/Error.jsx";
import JoinChallenge from "../pages/JoinChallenge.jsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("http://localhost:3000/challenges").then((res) => res.json()),
      },
      {
        path: "/challenges",
        element: <Challenges></Challenges>,
      },
      {
        path: "/challenges/:id",
        element: <Challenge></Challenge>,
      },
      {
        path: "/challenges/add",
        element: (
          <PrivateRoute>
            <AddChallenges></AddChallenges>
          </PrivateRoute>
        ),
      },
      {
        path: "/challenges/join/:id",
        element: (
          <PrivateRoute>
            <JoinChallenge></JoinChallenge>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-activites",
        element: <MyActivites></MyActivites>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
