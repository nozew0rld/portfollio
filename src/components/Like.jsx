import React from "react";

function Like({ changeTheme }) {
  return (
    <div>
      <div
        className={`${
          changeTheme ? "text-black" : "text-white"
        } flex justify-center pt-8 `}
      >
        <div className="flex-col justify-center">
          <p
            className={`${
              changeTheme ? "text-black" : "text-white"
            } text-2xl font-roboto font-bold`}
          >
            I ♥
          </p>
          <div className="w-10 h-1 bg-[#525252]"></div>
          <div className="flex flex-row pt-2">
            <p className="font-roboto text-l font-thin">
              Art , Music , Drawing , Playing (Basketball / Hockey),
              Snowboarding , Machine Learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Like;
