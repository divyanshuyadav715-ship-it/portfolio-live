import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const WireframeNode = () => {
  const meshRef = useRef();
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Base rotation
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.002;
    
    // Mouse interaction - smooth follow
    const targetX = (mouse.x * viewport.width) / 10;
    const targetY = (mouse.y * viewport.height) / 10;
    
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
  });

  return (
    <Icosahedron ref={meshRef} args={[2.5, 2]}>
      <meshBasicMaterial color="#ffffff" wireframe={true} transparent opacity={0.1} />
    </Icosahedron>
  );
};

const Scene = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto mix-blend-screen opacity-50">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <WireframeNode />
      </Canvas>
    </div>
  );
};

export default Scene;
