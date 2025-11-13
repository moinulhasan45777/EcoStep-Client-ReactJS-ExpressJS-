import React from "react";
import logo from "../assets/logo.png";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";
import useTitle from "../hooks/useTitle";

const ForgotPassword = () => {
  useTitle("Forgot Password");
  const { loading, user } = useAuth();
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="hero flex items-center justify-center min-h-[calc(100vh-72.594px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card  min-w-md shrink-0 shadow-2xl">
          <form className="card-body">
            <fieldset className="fieldset">
              <div className="flex flex-col mb-8 gap-10 items-start">
                <a className="text-2xl font-bold flex gap-2 items-center">
                  <img src={logo} alt="Logo" className="w-10 h-10" />
                  <p className="text-primary">EcoStep</p>
                </a>
                <h1 className="w-full text-center text-3xl font-bold">
                  Change Password
                </h1>
              </div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full focus:outline-none active:outline-none focus:border-2 focus:border-primary border-bg-200 font-medium placeholder:font-normal"
                placeholder="user@emaple.com"
                autoComplete="username"
              />
              <button
                onClick={() => {
                  window.location.href = "https://mail.google.com/";
                }}
                type="button"
                className="btn btn-primary hover:bg-secondary border-none transition-all duration-300 ease-in-out mt-4 shadow-none"
              >
                Change Password
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
