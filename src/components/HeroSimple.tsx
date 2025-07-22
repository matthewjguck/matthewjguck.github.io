import React, { useState, useRef, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowDown, ChevronRight } from 'lucide-react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Center } from '@react-three/drei'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import * as THREE from 'three'
import { ImageWithFallback } from './figma/ImageWithFallback'

// ===== 3D MODEL CANVAS =====
function SimpleGeometricModel({ mouse }: { mouse: { x: number, y: number } }) {
  const groupRef = useRef<THREE.Group>(null)
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Calculate rotation based on mouse position
  const centerX = dimensions.width / 2
  const centerY = dimensions.height / 2
  const targetRotationX = ((mouse.y - centerY) / centerY) * 0.2
  const targetRotationY = ((mouse.x - centerX) / centerX) * 0.2

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = targetRotationX
      groupRef.current.rotation.y = targetRotationY
    }
  }, [targetRotationX, targetRotationY])

  return (
    <group ref={groupRef}>
      {/* Simple geometric smiley */}
      {/* Face */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial 
          color="#000000" 
          wireframe={true} 
          transparent={true} 
          opacity={0.7}
        />
      </mesh>
      
      {/* Left Eye */}
      <mesh position={[-0.4, 0.3, 0.8]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial 
          color="#000000" 
          wireframe={true} 
          transparent={true} 
          opacity={0.8}
        />
      </mesh>
      
      {/* Right Eye */}
      <mesh position={[0.4, 0.3, 0.8]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial 
          color="#000000" 
          wireframe={true} 
          transparent={true} 
          opacity={0.8}
        />
      </mesh>
      
      {/* Smile */}
      <mesh position={[0, -0.3, 0.8]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.5, 0.08, 8, 32, Math.PI]} />
        <meshStandardMaterial 
          color="#000000" 
          wireframe={true} 
          transparent={true} 
          opacity={0.8}
        />
      </mesh>
    </group>
  )
}

function ThreeDModelViewer({ mouse }: { mouse: { x: number, y: number } }) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [modelExists, setModelExists] = useState(false)
  
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Check if OBJ model exists
  useEffect(() => {
    fetch('/OBJ/star.obj')
      .then(response => {
        setModelExists(response.ok)
      })
      .catch(() => {
        setModelExists(false)
      })
  }, [])

  const size = 450
  const centerPosX = dimensions.width - 300
  const centerPosY = dimensions.height / 2

  return (
    <div 
      className="absolute pointer-events-none"
      style={{
        left: centerPosX - size/2,
        top: centerPosY - size/2,
        width: size,
        height: size,
      }}
    >
      <Canvas
        camera={{ 
          position: [0, 0, 4], 
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          preserveDrawingBuffer: true
        }}
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8}
          castShadow
        />
        <pointLight 
          position={[-5, -5, -5]} 
          intensity={0.3}
        />
        
        {/* 3D model with OBJ support */}
        <Suspense fallback={<SimpleGeometricModel mouse={mouse} />}>
          {modelExists ? (
            <OBJModel mouse={mouse} modelPath="/OBJ/star.obj" />
          ) : (
            <SimpleGeometricModel mouse={mouse} />
          )}
        </Suspense>
      </Canvas>
    </div>
  )
}

// OBJ Model Component with error boundary
function OBJModel({ mouse, modelPath }: { mouse: { x: number, y: number }, modelPath: string }) {
  const groupRef = useRef<THREE.Group>(null)
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  
  // Load OBJ model with error handling
  const obj = useLoader(OBJLoader, modelPath)
  
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const centerX = dimensions.width / 2
  const centerY = dimensions.height / 2
  const targetRotationX = ((mouse.y - centerY) / centerY) * 0.2
  const targetRotationY = ((mouse.x - centerX) / centerX) * 0.2

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = targetRotationX
      groupRef.current.rotation.y = targetRotationY
    }
  }, [targetRotationX, targetRotationY])

  useEffect(() => {
    if (obj && groupRef.current) {
      // Apply wireframe material to all meshes in the OBJ
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: '#000000',
            wireframe: true,
            transparent: true,
            opacity: 0.8
          })
        }
      })
    }
  }, [obj])

  if (!obj) {
    return <SimpleGeometricModel mouse={mouse} />
  }

  const clonedObj = obj.clone()
  
  return (
    <group ref={groupRef}>
      <primitive 
        object={clonedObj} 
        scale={[2, 2, 2]} 
      />
    </group>
  )
}

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-600" />
      
      {/* Interactive Grid Background */}
      <InteractiveGeometricGrid mouse={mouse} />
      
      {/* 3D Model */}
      <ThreeDModelViewer mouse={mouse} />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CREATIVE<br />
            <span className="text-black">DEVELOPER</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building digital experiences that push boundaries and create lasting impact through innovative design and code.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 group">
              View Work
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* Image Dock - Removed temporarily */}
      {/* <ImageDock /> */}
    </section>
  )
}

// ===== INTERACTIVE GEOMETRIC GRID =====
function InteractiveGeometricGrid({ mouse }: { mouse: { x: number, y: number } }) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Track mouse movement to detect when it stops
  useEffect(() => {
    if (mouse.x !== lastMousePos.x || mouse.y !== lastMousePos.y) {
      setIsMoving(true);
      setLastMousePos({ x: mouse.x, y: mouse.y });
      
      // Debounce to detect when mouse stops
      const timeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [mouse.x, mouse.y, lastMousePos.x, lastMousePos.y]);

  const gridSize = 30;
  const gridCols = Math.ceil(dimensions.width / gridSize);
  const gridRows = Math.ceil(dimensions.height / gridSize);
  const maxDistance = 150;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #ff7b00, #ff006b)' }}
      >
        {Array.from({ length: Math.min(gridRows * gridCols, 2000) }).map((_, index) => {
          const col = index % gridCols;
          const row = Math.floor(index / gridCols);
          const x = col * gridSize;
          const y = row * gridSize;
          
          // Early exit for elements too far from mouse
          const roughDistance = Math.abs(x - mouse.x) + Math.abs(y - mouse.y);
          if (roughDistance > maxDistance * 2) {
            return (
              <div
                key={index}
                className="absolute w-1 h-1 bg-black/20"
                style={{
                  left: x,
                  top: y,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            );
          }

          const distance = Math.sqrt(Math.pow(x - mouse.x, 2) + Math.pow(y - mouse.y, 2));
          const influence = Math.max(0, 1 - distance / maxDistance);
          
          // Different shapes based on proximity
          const isClose = distance < 50;
          const isMedium = distance < 100;
          
          let shape = 'w-1 h-1 bg-black/20';
          if (isClose) {
            shape = 'w-3 h-3 bg-black/60 rotate-45';
          } else if (isMedium) {
            shape = 'w-2 h-2 bg-black/40 rounded-full';
          }
          
          const scale = 1 + influence * 1.5;
          const opacity = 0.2 + influence * 0.6;
          const rotation = influence * 45;

          return (
            <div
              key={index}
              className={`absolute ${shape} transition-all duration-300 ease-out`}
              style={{
                left: x,
                top: y,
                transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`,
                opacity,
                transitionDelay: isMoving ? '0ms' : `${Math.random() * 200}ms`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
