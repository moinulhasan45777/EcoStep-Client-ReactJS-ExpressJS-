import React from "react";
import logo from "../assets/logo.png";
import { Link, Links } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-secondary text-[#b8b8b8] p-10">
      <a className="text-2xl font-bold flex gap-2 items-center -mb-4">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <p className="text-primary">EcoStep</p>
      </a>
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover hover:text-primary">About</Link>
        <Link className="link link-hover hover:text-primary">Contact</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link className="hover:text-primary cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              version="1.1"
              id="IconChangeColor"
              height="24"
              width="24"
              className="icon"
            >
              {" "}
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                id="mainIconPathAttribute"
                fill="currentColor"
              ></path>{" "}
            </svg>
          </Link>
          <Link className="hover:text-primary cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <Link className="hover:text-primary cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <b>EcoStep LTD</b>
        </p>
        <p className="mt-2 opacity-15">
          We’re committed to making our platform accessible to everyone and
          protecting your personal data.<br></br> Learn more in our{" "}
          <Link className="underline text-white hover:opacity-50">
            Accessibility Statement
          </Link>{" "}
          and{" "}
          <Link className="underline text-white hover:opacity-50">
            Privacy Policy
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
