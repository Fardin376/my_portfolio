// @ts-nocheck
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import CanvasLoader from '../Loader.jsx';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf', true);

  return (
    <primitive
      object={computer.scene}
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0, -3.25, -2.2] : [0, -3.25, -1.2]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:425px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (ev) => {
      setIsMobile(ev.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <hemisphereLight intensity={0.15} />
        <pointLight intensity={1} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <OrbitControls
        autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
