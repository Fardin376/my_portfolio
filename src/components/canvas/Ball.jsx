// @ts-nocheck
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Decal,
  Preload,
  Float,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader.jsx";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <mesh castShadow receiveShadow scale={2.65}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[0, 0, 6.25]}
        scale={1}
        flatShading
        map={decal}
      />
    </mesh>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Float speed={2.75} rotationIntensity={1} floatIntensity={3.75}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[0, 0, 0.05]} />
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Float>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
