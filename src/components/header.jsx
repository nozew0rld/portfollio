import React from "react";
import { FaMoon } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoIosPaw } from "react-icons/io";
import { useState } from "react";
function Header({ changeTheme, setChangeTheme }) {
  return (
    <div className={`${changeTheme ? "bg-amber-20" : "bg-indigo-990"} `}>
      <header className="bg-amber-20">
        <div className="flex justify-center w-full h-14 items-center ">
          <div className="flex flex-row gap-10 items-center w-1/4 h-14 ">
            <div className=" flex text-xl items-center group cursor-pointer">
              <IoIosPaw
                className={`${
                  changeTheme ? "text-black" : "text-white"
                }-rotate-12 group-hover:rotate-2 `}
              />
              Takuya Matsuyama
            </div>
            <div className="cursor-pointer">Works</div>
            <div className="cursor-pointer">Posts</div>
            <div className=" cursor-pointer">Uses</div>
            <div className="flex items-center cursor-pointer">
              <AiFillGithub />
              Source
            </div>
          </div>
          <div className=" flex w-44 justify-end">
            <div
              className="flex w-10 h-10 bg-deep-purple-400 rounded-lg cursor-pointer"
              onClick={() => {
                setChangeTheme(!changeTheme);
                console.log(changeTheme);
              }}
            >
              <FaMoon
                style={{
                  color: "white",
                  marginLeft: "12px",
                  marginTop: "11px",
                }}
              />
            </div>
          </div>
        </div>
      </header>
      <body className="w-full h-screen"></body>
    </div>
  );
}

export default Header;
