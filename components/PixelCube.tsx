'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function PixelBox({ position, color, scale = 1, delay = 0 }: { 
  position: [number, number, number]
  color: string
  scale?: number
  delay?: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const initialY = position[1]
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.1
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.1
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.3}
        roughness={0.4}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

function MainCube() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
  })

  const cubePositions = useMemo(() => {
    const positions: { pos: [number, number, number]; color: string; delay: number }[] = []
    const colors = ['#6366F1', '#0EA5E9', '#10B981', '#8B5CF6', '#06B6D4']
    
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          if (Math.abs(x) + Math.abs(y) + Math.abs(z) >= 2) {
            const colorIndex = Math.floor(Math.random() * colors.length)
            positions.push({
              pos: [x * 0.45, y * 0.45, z * 0.45],
              color: colors[colorIndex],
              delay: (x + y + z) * 0.5
            })
          }
        }
      }
    }
    return positions
  }, [])

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <MeshDistortMaterial
            color="#6366F1"
            metalness={0.8}
            roughness={0.2}
            distort={0.2}
            speed={2}
            transparent
            opacity={0.6}
          />
        </mesh>
        
        {cubePositions.map((cube, i) => (
          <PixelBox
            key={i}
            position={cube.pos}
            color={cube.color}
            delay={cube.delay}
            scale={0.8}
          />
        ))}
        
        <pointLight position={[2, 2, 2]} intensity={0.5} color="#6366F1" />
        <pointLight position={[-2, -2, -2]} intensity={0.3} color="#0EA5E9" />
      </group>
    </Float>
  )
}

function FloatingPixels() {
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 30; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4
        ] as [number, number, number],
        scale: Math.random() * 0.15 + 0.05,
        speed: Math.random() * 0.5 + 0.2,
        color: ['#6366F1', '#0EA5E9', '#10B981'][Math.floor(Math.random() * 3)]
      })
    }
    return temp
  }, [])

  return (
    <>
      {particles.map((particle, i) => (
        <FloatingPixel key={i} {...particle} index={i} />
      ))}
    </>
  )
}

function FloatingPixel({ position, scale, speed, color, index }: {
  position: [number, number, number]
  scale: number
  speed: number
  color: string
  index: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + index) * 0.5
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5 + index) * 0.3
      meshRef.current.rotation.x = state.clock.elapsedTime * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  )
}

export default function PixelCube() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#0EA5E9" />
        
        <MainCube />
        <FloatingPixels />
      </Canvas>
    </div>
  )
}
