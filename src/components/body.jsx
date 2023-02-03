import React from "react";
import { useState, Suspense } from "react";
import { Box, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Bataa from "../img/hisoka.jpeg";
function Scene() {
  const gltf = useLoader(GLTFLoader, "/dog.glb");
  return (
    <Suspense fallback={null}>
      <primitive scale={0.5} object={gltf.scene} />
    </Suspense>
  );
}
function Body({ changeTheme, setChangeTheme }) {
  return (
    <div>
      {" "}
      <body className="flex w-full h-screen flex-col items-center">
        <div className="h-4/6 w-96">
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <Scene />
          </Canvas>
        </div>
        <div
          className={`${
            changeTheme ? "bg-amber-40" : "bg-blue-990"
          } flex justify-center w-1/4 h-14 bg-amber-20 rounded-md -mt-48 z-10 opacity-80 `}
        >
          <p
            className={`${
              changeTheme ? "text-black" : "text-white"
            } pt-4 font-roboto font-thin `}
          >
            Hello, Im a junior developer based in Mongolia
          </p>
        </div>
        <div className="flex w-1/4 h-28 mt-6 gap-4 z-10">
          <div>
            <p
              className={`${
                changeTheme ? "text-black" : "text-white"
              } w-96 h-10 font-mono font-semibold text-2xl`}
            >
              Lkhagvadorj Batbaatar
            </p>
            <p
              className={`${
                changeTheme ? "text-black" : "text-white"
              } w-96 h-5 font-roboto font-thin text-l `}
            >
              Newbie Developer (Pro Athlete / Artist)
            </p>
          </div>
          <div className="h-28 w-28">
            {" "}
            <img
              src={Bataa}
              alt=""
              className="h-28 w-28 border-solid border-2 rounded-full"
            />
            <p></p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Body;
