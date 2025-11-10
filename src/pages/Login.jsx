import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
const Login = () => {
  return (
    <div className="hero flex items-center justify-center min-h-[calc(100vh-72.594px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card  min-w-md shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <div className="flex flex-col mb-8 gap-10 items-start">
                <a className="text-2xl font-bold flex gap-2 items-center">
                  <img src={logo} alt="Logo" className="w-10 h-10" />
                  <p className="text-primary">EcoStep</p>
                </a>
                <h1 className="w-full text-center text-3xl font-bold">
                  Login to EcoStep
                </h1>
              </div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full focus:outline-none active:outline-none focus:border-2 focus:border-primary border-bg-200 font-medium placeholder:font-normal"
                placeholder="user@emaple.com"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full focus:outline-none active:outline-none focus:border-2 focus:border-primary border-bg-200 font-medium placeholder:font-normal"
                placeholder="**********"
              />
              <div>
                <Link
                  to="/forgot-password"
                  className="link link-hover hover:text-primary"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="btn btn-primary hover:bg-secondary border-none transition-all duration-300 ease-in-out mt-4 shadow-none"
              >
                Login
              </button>
            </fieldset>
            <div className="flex gap-2 items-center">
              <div className="h-[0.1rem] w-full bg-base-200"></div>
              <p className="text-base-300 text-md ">OR</p>
              <div className="h-[0.1rem] w-full bg-base-200"></div>
            </div>
            <button className="btn bg-secondary border-accent text-base-300 hover:bg-base-100 hover:border duration-300 transition-all ease-in-out hover:text-black">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="transparent"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
