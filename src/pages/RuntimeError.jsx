import React from "react";
import { isRouteErrorResponse, useNavigate } from "react-router";

const RuntimeError = ({ error }) => {
  const navigate = useNavigate();

  let message = "Something went wrong!";

  if (isRouteErrorResponse(error)) {
    message = error.statusText || message;
  } else if (error instanceof Error) {
    message = error.message;
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-7xl font-extrabold text-red-600 animate-pulse">😵</h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-800">{message}</h2>
      <p className="mt-2 text-gray-600 max-w-md">
        An unexpected error occurred while loading this page.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default RuntimeError;
