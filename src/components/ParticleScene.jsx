import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const mesh = useRef();
  const { mouse, viewport } = useThree();
  const count = 2000;

  const [positions, scales] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
      scales[i] = Math.random();
    }
    return [positions, scales];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    // Slow autonomous drift
    mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    
    // Mouse reaction
    const targetX = (mouse.x * viewport.width) / 20;
    const targetY = (mouse.y * viewport.height) / 20;
    
    mesh.current.position.x += (targetX - mesh.current.position.x) * 0.02;
    mesh.current.position.y += (targetY - mesh.current.position.y) * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-scale" count={scales.length} array={scales} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#666666" sizeAttenuation={true} transparent opacity={0.6} />
    </points>
  );
};

const ParticleScene = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto mix-blend-screen opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleScene;
