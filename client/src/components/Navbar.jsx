import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./navstyle.css";

// import logo from "../../images/logo.png";
import logo from "../assets/logo2.png";
import "./style.css";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [links, setLinks] = useState([
    "https://coinmarketcap.com/",
    "https://www.binance.com/en/markets",
    "https://www.livecoinwatch.com/",
    "https://web3js.readthedocs.io/en/v1.8.1/",
    "https://crypto.com/university/crypto-wallets",
  ]);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          style={{ filter: "brightness(0) invert(1)" }}
          src={logo}
          alt="logo"
          className=" w-40 cursor-pointer"
        />
      </div>

      <div className="dec">
        <div className="abc">
          <a href={links[0]}>Realtime</a>
        </div>
        <div className="abc">
          <a href={links[1]}>Market</a>
        </div>
        <div className="abc">
          <a href={links[2]}>Exchange</a>
        </div>
        <div className="abc">
          <a href={links[3]}>Tutorial</a>
        </div>
        <div className="abc">
          <a href={links[4]}>Wallets</a>
        </div>
      </div>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
