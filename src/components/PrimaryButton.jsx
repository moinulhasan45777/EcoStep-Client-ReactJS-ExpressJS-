import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ st }) => {
  return (
    <StyledWrapper>
      <button className="cssbuttons-io">
        <span>{st}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cssbuttons-io {
    position: relative;
    font-family: inherit;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.05em;
    border-radius: 0.4em;
    cursor: pointer;
    border: none;
    background: #262626;
    color: ghostwhite;
    overflow: hidden;
  }

  .cssbuttons-io span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    display: inline-flex;
    align-items: center;
    padding: 0.6em 1.5em 0.6em 1.5em;
  }

  .cssbuttons-io::before,
  .cssbuttons-io::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .cssbuttons-io::before {
    content: "";
    background: #8ebb2d;
    width: 130%;
    left: -15%;
    transform: skew(30deg);
    transition: transform 0.6s cubic-bezier(0.3, 1, 0.8, 1);
  }

  .cssbuttons-io:hover::before {
    transform: translate3d(100%, 0, 0);
  }

  .cssbuttons-io:active {
    transform: scale(0.95);
  }
`;

export default PrimaryButton;
