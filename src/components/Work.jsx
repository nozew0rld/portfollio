import React from "react";
import Bataa from "../img/Bataa.jpeg";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

function Work({ changeTheme }) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div
          className={`${
            changeTheme ? "bg-amber-40" : "bg-[#525252]"
          } flex justify-center  items-center bg-amber-20 h-14 rounded-lg  mt-10 opacity-80 md:w-[570px]`}
        >
          <p
            className={`${
              changeTheme ? "text-black" : "text-white"
            } font-roboto font-thin `}
          >
            Hello Im a junior developer based in Mongolia !!!
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-28 justify-center mt-10 sm:w-full ">
        <div className={`${changeTheme ? "text-blak" : "text-white"}`}>
          <p className="font-mono font-bold sm:text-3xl text-2xl">
            Lkhagvadorj Batbaatar
          </p>
          <p className="font-roboto font-thin text-l">
            Junior Developer ( Pro athlete / Artist )
          </p>
        </div>
        <div className="">
          <img
            src={Bataa}
            alt=""
            className="rounded-full border-2 w-[100px] h-[100px] "
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex-col">
          <p
            className={`${
              changeTheme ? "text-black" : "text-white"
            } text-xl font-mono font-bold`}
          >
            Work
          </p>
          <div className="w-12 h-1 bg-[#525252]"></div>
          <p
            className={`${
              changeTheme ? "text-black" : "text-white"
            } font-roboto font-thin text-l pt-4`}
          >
            Takuya is a freelance and a full-stack developer based in Osaka with
            a passion for building digital services/stuff he wants. He has a
            knack for all things launching products, from planning and designing
            all the way to solving real-life problems with code. When not
            online, he loves hanging out with his camera. Currently, he is
            living off of his own product called{" "}
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              className={`${
                changeTheme ? "text-blue-150" : "text-pink-990"
              } text-blue-150 font-semibold hover:underline underline-offset-4`}
            >
              MyProject
            </a>
            . He publishes content for marketing his products and his YouTube
            channel called "
            <a
              href="https://www.youtube.com/@devaslife"
              target="_blank"
              className={`${
                changeTheme ? "text-blue-150" : "text-pink-990"
              } text-blue-150 font-semibold hover:underline underline-offset-4`}
            >
              Dev as Life
            </a>
            " has more than 100k subscribers.
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <button
          className={`${
            changeTheme ? "text-white" : "text-black"
          } bg-[#339795] hover:bg-[#309080] w-40 h-10 rounded-md font-roboto text-l flex justify-center items-center`}
        >
          My portfolio
          <IoIosArrowForward className="h-3 w-3 ml-4" />
        </button>
      </div>
    </>
  );
}

export default Work;
