import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

function Web({ changeTheme }) {
  return (
    <div>
      <div
        className={`${changeTheme ? "text-black" : "text-white"} flex pt-8 `}
      >
        <div className="flex-col  ">
          <p
            className={`${
              changeTheme ? "text-black" : "text-white"
            } text-2xl font-roboto font-bold`}
          >
            On the web
          </p>
          <div className="w-32 h-1 bg-[#525252]"></div>
          <div className="flex flex-col ">
            <div
              className={`${
                changeTheme ? "text-black" : "text-pink-990"
              } text-black font-semibold hover:underline underline-offset-4 flex pt-2 items-center gap-2`}
            >
              <AiFillGithub />
              <a
                href="https://github.com/nozew0rld"
                target="_blank"
                className="font-roboto text-l font-thin "
              >
                @nozew0rld
              </a>
            </div>
            <div
              className={`${
                changeTheme ? "text-black" : "text-pink-990"
              } text-black font-semibold hover:underline underline-offset-4 flex pt-2 items-center gap-2`}
            >
              <AiOutlineTwitter />
              <a
                href=""
                target="_blank"
                className="font-roboto text-l font-thin"
              >
                @inkdrop_app (English)
              </a>
            </div>
            <div
              className={`${
                changeTheme ? "text-black" : "text-pink-990"
              } text-black font-semibold hover:underline underline-offset-4 flex pt-2 items-center gap-2`}
            >
              <AiOutlineTwitter />
              <a
                href=""
                target="_blank"
                className="font-roboto text-l font-thin"
              >
                @craftzdog (日本語)
              </a>
            </div>
            <div
              className={`${
                changeTheme ? "text-black" : "text-pink-990"
              } text-black font-semibold hover:underline underline-offset-4 flex pt-2 items-center gap-2`}
            >
              <BsInstagram />
              <a
                href="https://www.instagram.com/cokeyyy_/?next=%2F"
                target="_blank"
                className="font-roboto text-l font-thin"
              >
                @cokeyyy_
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web;
