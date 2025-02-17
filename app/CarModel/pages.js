"use client";

import { useGLTF } from "@react-three/drei";

export default function CarModel() {
  const { scene } = useGLTF("/r34.gltf"); // Make sure your model is inside /public
  
  return <primitive object={scene} scale={0.8} />;
}
