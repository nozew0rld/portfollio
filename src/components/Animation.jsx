import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";

function Animation() {
  return (
    <div>
      <body className="w-full flex h-96">
        <Canvas camera={{ fov: 45, position: [0, 0, 0.6] }}>
          <ambientLight />
          <Environment preset="sunset" background />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls autoRotate autoRotateSpeed={2} />
          <Suspense fallback={null}>
            <Model position={[0, 0, 0]} />
          </Suspense>
        </Canvas>
      </body>
    </div>
  );
}

export default Animation;
