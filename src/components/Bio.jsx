import React from "react";

function Bio({ changeTheme }) {
  return (
    <>
      <div className="flex justify-center pt-10">
        <div className="flex-col">
          <p
            className={`${
              changeTheme ? "text-black" : "text-white"
            } text-xl font-mono font-bold`}
          >
            Bio
          </p>
          <div className="w-12 h-1 bg-[#525252]"></div>
          <div className="flex items-center gap-5">
            <p
              className={`${
                changeTheme ? "text-black" : "text-white"
              } font-mono font-thin text-l pt-4`}
            >
              2005
            </p>
            <p
              className={`${
                changeTheme ? "text-black" : "text-white"
              } font-roboto font-thin text-l pt-4 `}
            >
              Born in Sharyngol , Mongolia
            </p>
          </div>
          <div className="flex items-center gap-5">
            <p
              className={`${
                changeTheme ? "text-black" : "text-white"
              } font-mono font-thin text-l pt-4`}
            >
              2009
            </p>
            <p
              className={`${
                changeTheme ? "text-black" : "text-white"
              } font-roboto font-thin text-l pt-4 `}
            >
              Participated in Voice of kindergarden then won gold medal
            </p>
          </div>
          <div className="flex items-center gap-5">
            <p
              className={`${
                changeTheme ? "text-black" : "text-white"
              } font-mono font-thin text-l pt-4`}
            >
              2011 to 2023
            </p>
            <p
              className={`${
                changeTheme ? "text-black" : "text-white"
              } font-roboto font-thin text-l pt-4 `}
            >
              Studying at 47th school in Bayngol district , Ulaanbaatar
            </p>
          </div>
          <div className="flex items-center gap-5">
            <p
              className={`${
                changeTheme ? "text-black" : "text-white"
              } font-mono font-thin text-l pt-4`}
            >
              2023 to Future
            </p>
            <p
              className={`${
                changeTheme ? "text-black" : "text-white"
              } font-roboto font-thin text-l pt-4 `}
            >
              To be contiued...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;
