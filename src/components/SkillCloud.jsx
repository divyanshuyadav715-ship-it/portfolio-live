import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const Word = ({ children, position, ...props }) => {
  const ref = useRef();
  
  useFrame(({ camera }) => {
    if (ref.current) {
      // Make text always face the camera
      ref.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <Text 
      ref={ref} 
      position={position} 
      fontSize={1.2}
      color="#cccccc"
      anchorX="center" 
      anchorY="middle"
      {...props}
    >
      {children}
    </Text>
  );
};

const Cloud = ({ radius = 10 }) => {
  const words = useMemo(() => {
    const skills = [
      "Python", "XGBoost", "SVM", "Advanced SQL", "Tableau", 
      "Streamlit", "A/B Testing", "C++", "Data Structures", 
      "Product Strategy", "Root Cause", "Pandas", "Scikit-Learn"
    ];
    
    return skills.map((word, i) => {
      // Golden spiral distribution for even spread on sphere
      const y = 1 - (i / (skills.length - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      
      return {
        word,
        position: [x * radius, y * radius, z * radius]
      };
    });
  }, [radius]);

  const groupRef = useRef();

  useFrame(({ mouse }) => {
    if (groupRef.current) {
      // Auto rotation + slight mouse influence
      groupRef.current.rotation.y += 0.002 + (mouse.x * 0.01);
      groupRef.current.rotation.x += 0.001 + (mouse.y * 0.01);
    }
  });

  return (
    <group ref={groupRef}>
      {words.map((w, i) => (
        <Word key={i} position={w.position}>
          {w.word}
        </Word>
      ))}
    </group>
  );
};

const SkillCloud = () => {
  return (
    <div className="w-full h-[50vh] md:h-[70vh] opacity-80 cursor-crosshair">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <fog attach="fog" args={['#000', 10, 30]} />
        <Cloud radius={10} />
      </Canvas>
    </div>
  );
};

export default SkillCloud;
