"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

const NavigationBar = () => {
  return (
    <nav className="fixed flex justify-between items-center w-full px-8 py-4 z-[999]">
      <h1 className="text-white font-bold text-2xl">Overnight</h1>
      <button className="bg-red-200 rounded-2xl px-6 py-2 bg-white">
        <h2 className="text-xl font-bold text-black">Get demo</h2>
      </button>
    </nav>
  );
};

const Model = () => {
  return (
    <mesh rotation={[Math.PI / 8, Math.PI / 4, 0]}>
      <RoundedBox args={[2, 0.75, 2]} radius={0.2} smoothness={8}>
        <meshStandardMaterial color="gray" metalness={1} roughness={0.2} />
      </RoundedBox>
    </mesh>
  );
};

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black">
      <NavigationBar />

      {/* Hero section with the 3D model */}
      <div className="w-full h-screen">
        <Canvas camera={{ position: [0, 0, 5] }} className="w-full">
          {/* Add some basic lighting */}
          <ambientLight intensity={1} />
          <directionalLight position={[10, 20, 0]} intensity={25} />

          <Model />
          {/* Suspense will wait for the model to load */}
          <Suspense fallback={null}></Suspense>
        </Canvas>
      </div>

      <div className="flex justify-center items-center w-full h-screen">
        <h1 className="text-4xl text-white">Hello World</h1>
      </div>
    </main>
  );
}
