import React from "react";

import "./style.css";
import logo from "../assets/logo2.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img
          style={{ filter: "brightness(0) invert(1)" }}
          src={logo}
          alt="logo"
          className="w-32"
        />
      </div>
      <div
        className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full animate"
        style={{ fontFamily: "sans-serif" }}
      >
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="https://coinmarketcap.com/">Market</a>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="https://coinmarketcap.com/">Exchange</a>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="https://web3js.readthedocs.io/en/v1.8.1/">Tutorials</a>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="https://coinmarketcap.com/">Wallets</a>
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come Join Us And Experience The Future
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        info@Trypto.com
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@Trypto2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
