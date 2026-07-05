import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Envelope = ({ hovered }) => {
  const groupRef = useRef();
  const flapRef = useRef();

  useFrame((state) => {
    if (!groupRef.current || !flapRef.current) return;
    
    // Hover floating
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    
    // Rotate on hover, or spin slowly when not
    const targetRotationY = hovered ? 0 : state.clock.elapsedTime * 0.5;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);

    // Flap opening
    const targetFlapRotation = hovered ? -Math.PI * 0.7 : 0;
    flapRef.current.rotation.x = THREE.MathUtils.lerp(flapRef.current.rotation.x, targetFlapRotation, 0.1);
  });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* Envelope Body */}
      <mesh>
        <boxGeometry args={[3, 2, 0.2]} />
        <meshBasicMaterial color="#ffffff" wireframe={true} transparent opacity={0.2} />
      </mesh>
      
      {/* Flap Hinge Group positioned at the top edge */}
      <group ref={flapRef} position={[0, 1, 0.1]}>
        {/* Flap Mesh (rotated box to look like a triangle pointing down) */}
        <mesh position={[0, -0.7, 0.01]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[2.1, 2.1, 0.05]} />
          <meshBasicMaterial color="#ffffff" wireframe={true} transparent opacity={0.4} />
        </mesh>
      </group>
    </group>
  );
};

const ContactEnvelope = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="w-full h-48 md:h-64 cursor-pointer mb-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <Envelope hovered={hovered} />
      </Canvas>
    </div>
  );
};

export default ContactEnvelope;
