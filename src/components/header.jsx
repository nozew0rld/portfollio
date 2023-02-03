import React, { useState, Suspense } from "react";
import { FaMoon } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoIosPaw } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { Box, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Scene() {
  const gltf = useLoader(GLTFLoader, "/dog.glb");
  return (
    <Suspense fallback={null}>
      <primitive scale={0.5} object={gltf.scene} />
    </Suspense>
  );
}

function Header({ changeTheme, setChangeTheme }) {
  const [swith, setSwitch] = useState(false);
  return (
    <div className={`${changeTheme ? "bg-amber-40" : "bg-indigo-990"} `}>
      <header className={`${changeTheme ? "bg-amber-20" : "bg-indigo-990"} `}>
        <div className="flex justify-center w-full h-14 items-center">
          <div className="flex flex-row gap-10 items-center w-1/4 h-14">
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

            <div className=" flex flex-row gap-5 items-center w-1/4 h-14 ">
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

          <div className="relative w-10 h-10 ml-72">
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
        </div>
      </header>
      <body className="flex w-full h-screen flex-col items-center">
        <div className="h-4/6 w-1/2">
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <Scene />
          </Canvas>
        </div>
        <div
          className={`${
            changeTheme ? "bg-amber-40" : "bg-[#313134]"
          } flex justify-center w-1/3 h-14 bg-amber-20 rounded-md`}
        >
          <p
            className={`${
              changeTheme ? "text-black" : "text-white"
            } pt-4 font-roboto font-thin`}
          >
            Hello, Im a junior developer based in Mongolia
          </p>
        </div>
        <div className="flex w-1/3 h-28 mt-6">
          <div>
            <p>Lkhagvadorj Batbaatar</p>
            <p></p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Header;
