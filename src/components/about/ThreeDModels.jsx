// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

// const RotatingCube = () => {
//   const cubeRef = useRef(null);

//   useFrame(() => {
//     if (cubeRef.current) {
//       cubeRef.current.rotation.x += 0.01;
//       cubeRef.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <mesh ref={cubeRef}>
//       <boxGeometry args={[4, 4, 4]} />
//       <meshStandardMaterial color="royalblue" />
//     </mesh>
//   );
// };

// const AppThreeD = () => {
//   return (
//     <Canvas camera={{ position: [5, 5, 5] }}  style={{ width: "100vw", height: "100vh" }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
//       <RotatingCube />
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default AppThreeD;import React, { Suspense, useRef } from "react";import { Canvas, useFrame } from "@react-three/fiber";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF ,Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { TextureLoader } from "three";
const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("/image/untitled.glb", true); // Ensure correct path
  // const { scene } = useGLTF("/img/model.glb", true); // Ensure correct path

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={5.5} 
      position={[-7, -2, -10]} 
      rotation={[0,120, 0 ]} // Rotate to align properly
    />
  );
};


const Background = () => {
  const texture = useLoader(TextureLoader, "/image/modelbgimage.jpeg"); // Load JPEG image

  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const AppThreeD = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [2, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />


        <Suspense fallback={null}>
          {/* <Background/> */}
          <Model />
        </Suspense>
        <OrbitControls 
          enableZoom={true}  // Allow zooming
          enablePan={false}  // Disable panning
          minPolarAngle={Math.PI / 40} // Lock vertical rotation (top-down)
          maxPolarAngle={Math.PI / 2} // Lock vertical rotation (top-down)
        />
      </Canvas>
    </div>
  );
};

export default AppThreeD;