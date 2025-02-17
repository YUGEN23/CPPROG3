"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import CarModel from "../CarModel/pages"; // Import the model

export default function CarScene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} />
        <Environment preset="city" />
        <CarModel /> {/* 🏎 Render the car model */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
