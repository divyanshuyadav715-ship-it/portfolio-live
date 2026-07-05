import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CubeMesh = () => {
  const meshRef = useRef();

  useEffect(() => {
    if (!meshRef.current) return;
    
    // GSAP ScrollTrigger to rotate the cube as the user scrolls
    gsap.to(meshRef.current.rotation, {
      y: Math.PI * 4,
      x: Math.PI * 2,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
  }, []);

  useFrame(() => {
    // Idle rotation
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Box ref={meshRef} args={[2.5, 2.5, 2.5]}>
      <meshBasicMaterial color="#ffffff" wireframe={true} transparent opacity={0.2} />
    </Box>
  );
};

const ProfitCube = () => {
  return (
    <div className="absolute top-12 right-12 w-64 h-64 z-20 pointer-events-none hidden md:block opacity-70">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <CubeMesh />
      </Canvas>
    </div>
  );
};

export default ProfitCube;
