"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import { SITE_DATA } from "@/constants/data";

interface FloatingCardProps {
  service: typeof SITE_DATA.services[0];
  position: [number, number, number];
  rotation: [number, number, number];
  floatIntensity: number;
}

function FloatingCard({ service, position, rotation, floatIntensity }: FloatingCardProps) {
  return (
    <Float
      speed={1.5} 
      rotationIntensity={1.2} 
      floatIntensity={floatIntensity}
      floatingRange={[-0.3, 0.3]}
      position={position}
      rotation={rotation}
    >
      <Html transform wrapperClass="pointer-events-none" distanceFactor={8} zIndexRange={[100, 0]}>
        <div className="glass-card pointer-events-auto p-8 w-72 rounded-sm text-left flex flex-col gap-5 group cursor-default">
          <div className="w-6 h-[1px] bg-arata-red transition-all duration-700 ease-out group-hover:w-16"></div>
          <h3 className="font-serif text-3xl leading-tight text-forest-green">{service.title}</h3>
          <p className="font-sans text-sm text-forest-green/75 font-light tracking-wide">{service.desc}</p>
        </div>
      </Html>
    </Float>
  );
}

export default function AntiGravityScene() {
  // Spatial coordinates to scatter the 5 cards elegantly across the viewport without overlapping too much
  const positions: [number, number, number][] = [
    [-3.8, 1.8, 0],   // Top Left
    [3.8, 2.0, -1],   // Top Right (pushed back)
    [-4.0, -1.8, -1.5], // Bottom Left (further back)
    [3.5, -2.0, 0],   // Bottom Right
    [0, 0, 1.5]       // Center (closest to camera)
  ];

  const rotations: [number, number, number][] = [
    [0.1, -0.15, 0],
    [-0.1, 0.2, 0.05],
    [0.15, 0.1, -0.05],
    [-0.15, -0.1, 0.1],
    [0, 0, 0]
  ];

  return (
    <div className="w-full h-screen relative z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} className="w-full h-full">
        {/* Basic lights just in case we add 3D meshes later, though HTML doesn't react to R3F lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        
        {SITE_DATA.services.map((service, index) => (
          <FloatingCard 
            key={service.id} 
            service={service} 
            position={positions[index]} 
            rotation={rotations[index]}
            floatIntensity={1.5 + (index * 0.2)}
          />
        ))}
      </Canvas>
    </div>
  );
}
