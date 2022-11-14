import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// import logo from "../../images/logo.png";
import logo from "../assets/logo2.png";
import "./style.css";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

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
      <ul
        className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial"
        style={{ fontFamily: "sans-serif" }}
      >
        {["RealTime", "Market", "Exchange", "Tutorials", "Wallets"].map(
          (item, index) => (
            <NavBarItem
              key={item + index}
              title={
                index === 3 ? (
                  <a
                    className="animate"
                    href="https://web3js.readthedocs.io/en/v1.8.1/"
                  >
                    Tutorial
                  </a>
                ) : (
                  <a className="animate " href="https://coinmarketcap.com/">
                    {item}
                  </a>
                )
              }
            />
          )
        )}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
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
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            style={{ fontFamily: "sans-serif" }}
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["RealTime", "Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={<a href="https://coinmarketcap.com/">{item}</a>}
                  classprops="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
