import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoIosPaw } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

function Header({ changeTheme, setChangeTheme }) {
  const [swith, setSwitch] = useState(false);
  return (
    <header
      className={`${
        changeTheme ? "bg-amber-40" : "bg-indigo-990"
      } w-full flex justify-center`}
    >
      <div
        className={`${
          changeTheme ? "bg-amber-40" : "bg-indigo-990"
        } flex h-14 items-center fixed z-10 opacity-80`}
      >
        <div className="flex flex-row gap-12 items-center w-96 h-14 sm:w-40 w-20">
          <div
            className={`${
              changeTheme ? "text-black" : "text-white"
            } flex w-40 items-center group cursor-pointer `}
          >
            <IoIosPaw className="-rotate-12 group-hover:rotate-2 w-5 h-5" />
            <p className="items-center text-sm w-40 font-semibold font-mono">
              Takuya Matsuyama
            </p>
          </div>

          <div className=" flex flex-row gap-5 items-center w-1/4 h-14 hidden md:flex">
            <div
              className={`${
                changeTheme ? "text-black" : "text-white"
              } cursor-pointer font-thin font-roboto hover:underline underline-offset-4`}
            >
              <p>Works</p>
            </div>
            <div
              className={`${
                changeTheme ? "text-black" : "text-white"
              } cursor-pointer font-thin font-roboto hover:underline underline-offset-4`}
            >
              <p>Posts</p>
            </div>
            <div
              className={`${
                changeTheme ? "text-black" : "text-white"
              } cursor-pointer font-thin font-roboto hover:underline underline-offset-4`}
            >
              <p>Uses</p>
            </div>
            <div
              className={`${
                changeTheme ? "text-black" : "text-white"
              } cursor-pointer flex items-center font-thin font-roboto gap-1 hover:underline underline-offset-4`}
            >
              <AiFillGithub />
              <p>Source</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="relative w-10 h-10 ml-96 ">
            <div
              className={`${
                changeTheme ? "-translate-y-20" : "translate-y-0"
              } w-full h-full flex items-center justify-center rounded-lg transition duration-400 bg-[#fbd28c] absolute cursor-pointer hover:bg-orange-400`}
              onClick={() => {
                setChangeTheme(!changeTheme);
                setSwitch(false);
              }}
            >
              <IoSunnyOutline className="text-[#1c212d] w-5 h-5" />
            </div>
            <div
              className={`${
                changeTheme ? "translate-y-0" : "-translate-y-20"
              } w-full h-full flex items-center justify-center rounded-lg transition duration-700 bg-deep-purple-400 absolute cursor-pointer hover:bg-deep-purple-600`}
              onClick={() => {
                setChangeTheme(!changeTheme);
                setSwitch(false);
              }}
            >
              <FaMoon className="text-white" />
            </div>
          </div>
          <div className=" md:hidden flex">
            <div className="w-10 h-10 bg-[#525253] rounded-lg flex justify-center items-center flex-col gap-1 border">
              <div className="w-5 h-px bg-white"></div>
              <div className="w-5 h-px bg-white"></div>
              <div className="w-5 h-px bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
