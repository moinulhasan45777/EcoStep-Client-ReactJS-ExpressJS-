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
import UpdateChallenge from "../pages/UpdateChallenge.jsx";
import JoinedChallengePage from "../pages/JoinedChallengePage.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import RuntimeError from "../pages/RuntimeError.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        ErrorBoundary: RuntimeError,
        element: <Home></Home>,
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
        loader: () =>
          fetch("https://eco-step-api-server.vercel.app/challenges").then(
            (res) => res.json()
          ),
      },
      {
        path: "/challenges",
        element: <Challenges></Challenges>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
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
        path: "/my-activities/challenges/update/:id",
        element: (
          <PrivateRoute>
            <UpdateChallenge></UpdateChallenge>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-activities",
        element: (
          <PrivateRoute>
            <MyActivites></MyActivites>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://eco-step-api-server.vercel.app/challenges").then(
            (res) => res.json()
          ),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/my-activities/:id",
        element: (
          <PrivateRoute>
            <JoinedChallengePage></JoinedChallengePage>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
