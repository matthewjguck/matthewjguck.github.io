import React, { useState, useRef, useEffect, Suspense } from 'react'
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion'
import { ChevronDown, ArrowDown, ChevronRight } from 'lucide-react'
// import { Canvas, useLoader, useFrame } from '@react-three/fiber'
// import { Center, Environment } from '@react-three/drei'
// import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
// import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'
// import * as THREE from 'three'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ImageDock } from './ImageDock'




// ===== GRAPH PAPER DRAWING =====
function GraphPaperDrawing({ mouse }: { mouse: { x: number, y: number } }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [isDrawing, setIsDrawing] = useState(false);
  const [paths, setPaths] = useState<{ x: number, y: number }[][]>([]);
  const [currentPath, setCurrentPath] = useState<{ x: number, y: number }[]>([]);
  const lastPointRef = useRef<{ x: number, y: number } | null>(null);
  const animationRef = useRef<number>(0);

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

  // Setup canvas and drawing context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas and redraw everything
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw all saved paths
    paths.forEach(path => {
      if (path.length > 1) {
        drawSmoothPath(ctx, path);
      }
    });

    // Draw current path
    if (currentPath.length > 1) {
      drawSmoothPath(ctx, currentPath);
    }
  }, [dimensions, paths, currentPath]);

  // Smooth path drawing function
  const drawSmoothPath = (ctx: CanvasRenderingContext2D, path: { x: number, y: number }[]) => {
    if (path.length < 2) return;

    ctx.strokeStyle = '#dc2626'; // Red pen color
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = 0.8;

    ctx.beginPath();
    ctx.moveTo(path[0].x, path[0].y);

    // Use quadratic curves for smooth drawing
    for (let i = 1; i < path.length - 1; i++) {
      const currentPoint = path[i];
      const nextPoint = path[i + 1];
      const controlX = (currentPoint.x + nextPoint.x) / 2;
      const controlY = (currentPoint.y + nextPoint.y) / 2;
      
      ctx.quadraticCurveTo(currentPoint.x, currentPoint.y, controlX, controlY);
    }

    // Draw the last segment
    if (path.length > 1) {
      const lastPoint = path[path.length - 1];
      ctx.lineTo(lastPoint.x, lastPoint.y);
    }

    ctx.stroke();
  };

  // Mouse tracking for drawing
  useEffect(() => {
    if (mouse.x === 0 && mouse.y === 0) return; // Ignore initial/reset positions

    const currentPoint = { x: mouse.x, y: mouse.y };
    
    // Check if mouse is moving (start drawing)
    if (lastPointRef.current) {
      const distance = Math.sqrt(
        Math.pow(currentPoint.x - lastPointRef.current.x, 2) +
        Math.pow(currentPoint.y - lastPointRef.current.y, 2)
      );

      if (distance > 2) { // Only add points if mouse moved significantly
        if (!isDrawing) {
          setIsDrawing(true);
          setCurrentPath([lastPointRef.current, currentPoint]);
        } else {
          setCurrentPath(prev => [...prev, currentPoint]);
        }
      }
    }

    lastPointRef.current = currentPoint;

    // Stop drawing after mouse stops moving
    const stopDrawingTimeout = setTimeout(() => {
      if (isDrawing && currentPath.length > 1) {
        setPaths(prev => [...prev, currentPath]);
        setCurrentPath([]);
        setIsDrawing(false);
      }
    }, 150);

    return () => clearTimeout(stopDrawingTimeout);
  }, [mouse.x, mouse.y, isDrawing, currentPath]);

  // Clear drawings function
  const clearDrawings = () => {
    setPaths([]);
    setCurrentPath([]);
    setIsDrawing(false);
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Graph paper background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px, 20px 20px, 100px 100px, 100px 100px',
          backgroundColor: '#fafafa'
        }}
      />

      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)'
        }}
      />

      {/* Drawing canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 10 }}
      />

      {/* Clear button */}
      <div className="absolute top-4 right-4 z-20">
        <motion.button
          onClick={clearDrawings}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors pointer-events-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Clear Drawing
        </motion.button>
      </div>

      {/* Drawing indicator */}
      {isDrawing && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="absolute pointer-events-none z-10"
          style={{
            left: mouse.x - 6,
            top: mouse.y - 6,
            width: 12,
            height: 12,
            backgroundColor: '#dc2626',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(220, 38, 38, 0.5)'
          }}
        />
      )}
    </div>
  );
}
// ===== END GRAPH PAPER DRAWING =====

// ===== AUTO-SCROLLING PANORAMIC IMAGES =====
function AutoScrollingPanorama() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [imageWidths, setImageWidths] = useState<{
    top: number;
    middle: number;
    bottom: number;
  }>({ top: 0, middle: 0, bottom: 0 });
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      const newDimensions = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      setDimensions(newDimensions);
      setContainerWidth(newDimensions.width);
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const panoramicImages = [
    '/images/mcdonalds.jpeg',
    '/images/ItalySpread.jpeg',
    '/images/billboards.jpeg',
    '/images/BathroomsSpread.jpeg',
  ];

  // Different order for each row
  const topRowImages = panoramicImages; // Original order
  const middleRowImages = [
    '/images/junior-formal.jpeg',
    '/images/2point.jpeg',
    '/images/mountain.jpeg',
    '/images/llama-painting.jpeg',
    '/images/sophomore-formal.jpeg',
    '/images/chris.jpeg'
  ];
  const bottomRowImages = [
    '/images/SummerSpread.jpeg',
    '/images/platypus.jpeg',
    '/images/ski.jpeg',
    '/images/AutumnSpread.png',
  ];

  // Calculate total width of images for each row
  useEffect(() => {
    const calculateRowWidth = (images: string[], rowHeight: number): Promise<number> => {
      return Promise.all(
        images.map((src) => {
          return new Promise<number>((resolve) => {
            const img = new Image();
            img.onload = () => {
              // Calculate width based on row height maintaining aspect ratio
              const aspectRatio = img.width / img.height;
              const scaledWidth = rowHeight * aspectRatio;
              resolve(scaledWidth);
            };
            img.onerror = () => resolve(300); // Fallback width
            img.src = src;
          });
        })
      ).then(widths => widths.reduce((sum, width) => sum + width, 0));
    };

    // Calculate actual hero height based on responsive breakpoints
    const getActualHeroHeight = () => {
      const viewportHeight = dimensions.height;
      const viewportWidth = dimensions.width;
      
      // Match Tailwind breakpoints: sm (640px), lg (1024px)
      if (viewportWidth >= 1024) {
        // lg:min-h-screen = 100vh
        return viewportHeight;
      } else if (viewportWidth >= 640) {
        // sm:min-h-[33vh] = 33vh
        return viewportHeight * 0.5;
      } else {
        // min-h-[40vh] = 40vh
        return viewportHeight * 0.40;
      }
    };

    const actualHeroHeight = getActualHeroHeight();
    const rowHeight = actualHeroHeight / 3;
    
    Promise.all([
      calculateRowWidth(topRowImages, rowHeight),
      calculateRowWidth(middleRowImages, rowHeight),
      calculateRowWidth(bottomRowImages, rowHeight)
    ]).then(([topWidth, middleWidth, bottomWidth]) => {
      setImageWidths({
        top: topWidth,
        middle: middleWidth,
        bottom: bottomWidth
      });
    });
  }, [dimensions.height, dimensions.width, topRowImages, middleRowImages, bottomRowImages]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Row 1 - Top third, scrolls left */}
      <div className="absolute top-0 left-0 w-full h-1/3 overflow-hidden">
        <motion.div
          className="flex h-full"
          animate={{ x: [0, -imageWidths.top] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          style={{
            willChange: "transform",
            transform: "translateZ(0)"
          }}
        >
          {[...topRowImages, ...topRowImages].map((image, index) => {
            return (
              <div
                key={`top-${index}`}
                className="flex-shrink-0 h-full"
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-auto object-contain"
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Row 2 - Middle third, scrolls right */}
      <div className="absolute top-1/3 left-0 w-full h-1/3 overflow-hidden">
        <motion.div
          className="flex h-full"
          animate={{ x: [-imageWidths.middle, 0] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          style={{
            willChange: "transform",
            transform: "translateZ(0)"
          }}
        >
          {[...middleRowImages, ...middleRowImages].map((image, index) => {
            return (
              <div
                key={`middle-${index}`}
                className="flex-shrink-0 h-full"
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-auto object-contain"
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Row 3 - Bottom third, scrolls left (slower) */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 overflow-hidden">
        <motion.div
          className="flex h-full"
          animate={{ x: [0, -imageWidths.bottom] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          style={{
            willChange: "transform",
            transform: "translateZ(0)"
          }}
        >
          {[...bottomRowImages, ...bottomRowImages].map((image, index) => {
            return (
              <div
                key={`bottom-${index}`}
                className="flex-shrink-0 h-full"
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-auto object-contain"
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
    </div>
  );
}
// ===== END AUTO-SCROLLING PANORAMIC IMAGES =====

const dockImages = [
	{
		id: 'panorama',
		src: '/images/shapes.png',
		alt: 'Auto-scrolling panoramic images',
		thumbnail: '/images/camera.png',
		textStyle: 'text-cyan-100',
	},
	{
		id: 'frames',
		src: '/images/framebg.png',
		alt: 'Framed images',
		thumbnail:
			'/images/frame-favicon.png',
		textStyle: 'text-green-100',
	},
	{
		id: 'graph',
		src: '/images/shapes.png', 
		alt: 'Graph paper drawing',
		thumbnail: '/images/graph-thumbnail.png',
		textStyle: 'text-red-100',
	},
	{
		id: 'shapes',
		src: '/images/shapes.png',
		alt: 'Geometric shapes',
		thumbnail: '/images/shapes favicon.png',
		textStyle: 'text-blue-100',
	},
]

function EdgeButton({
  className = '',
  children,
  ...props
}: HTMLMotionProps<'button'> & { children: React.ReactNode }) {
  return (
	<motion.button
	  whileHover={{ rotateX: 0, rotateY: 0, scaleX: 1.15, scaleY: 1.08 }}
	  whileTap={{ scale: 0.96 }}
	  transition={{ type: "spring", stiffness: 350, damping: 18 }}
	  className={`flex flex-col items-center text-white text-xs font-medium opacity-90 hover:opacity-100 drop-shadow-[0_5px_12px_rgba(0,0,0,0.9)] ${className}`}
	  style={{ background: 'none', border: 'none', outline: 'none' }}
	  {...props}
	>
	  {children}
	</motion.button>
  )
}

export function Hero() {
	// Randomly select initial theme on component mount
	const getRandomTheme = () => {
		const themes = ['panorama', 'frames'];
		return themes[Math.floor(Math.random() * themes.length)];
	}
	
	const [activeImageId, setActiveImageId] = useState(getRandomTheme())
	const [mouse, setMouse] = useState({ x: 0, y: 0 })
	const [graphMouse, setGraphMouse] = useState({ x: 0, y: 0 })
	const [showDock, setShowDock] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null)
	const [edgeButtonsVisible, setEdgeButtonsVisible] = useState(true);
  // Carousel state for frames effect (vertical scroll, right side)
  const framesCarouselImages = [
    { src: '/images/headshot.png', alt: 'Portrait' },
    { src: '/images/Canes.png', alt: "Raising Cane's poster" },
    { src: '/images/Risk1.png', alt: 'Risk poster' },
    { src: '/images/delfrisco.png', alt: "Del Frisco's steakhouse" },
    { src: '/images/dietcoke.png', alt: 'Diet Coke poster' },
    { src: '/images/italy.png', alt: 'Italy travel photo' },
    { src: '/images/lifejuice.png', alt: 'Life Juice design' },
    { src: '/images/Lo.png', alt: 'LO poster' },
    { src: '/images/perspective.png', alt: 'Perspective study' },
    { src: '/images/t1d.png', alt: 'Type 1 diabetes awareness' },
  ] as const;
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loaded, setLoaded] = useState<boolean[]>(Array(framesCarouselImages.length).fill(false));
  const [failed, setFailed] = useState<boolean[]>(Array(framesCarouselImages.length).fill(false));

  // Preload images once (improves first transition smoothness)
  useEffect(() => {
    framesCarouselImages.forEach((imgObj, idx) => {
      const img = new Image();
      img.onload = () => setLoaded(prev => { const c=[...prev]; c[idx]=true; return c; });
      img.onerror = () => setFailed(prev => { const c=[...prev]; c[idx]=true; return c; });
      img.src = imgObj.src;
    });
  }, []);

  // Auto advance
  useEffect(() => {
    if (activeImageId !== 'frames') return;
    const id = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCarouselIndex(p => (p + 1) % framesCarouselImages.length);
        setTimeout(() => setIsTransitioning(false), 350);
      }, 350);
    }, 4500);
    return () => clearInterval(id);
  }, [activeImageId, framesCarouselImages.length]);

	const scrollToProjects = () => {
		document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
	}

	const handleImageChange = (imageId: string) => {
		setActiveImageId(imageId)
	}

	const activeImage =
		dockImages.find((img) => img.id === activeImageId) || dockImages[0]

	// Mouse move handler for spotlight and hearts trail
	const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
		if (!sectionRef.current) return
		const rect = sectionRef.current.getBoundingClientRect()
		const mousePos = {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		}
		
		// Update mouse position for shapes theme
		if (activeImageId === 'shapes') {
			setMouse(mousePos)
		}
		
		// Update mouse position for graph theme
		if (activeImageId === 'graph') {
			setGraphMouse(mousePos)
		}
	}

	// Add global mouse listener for more robust tracking when graph theme is active
	useEffect(() => {
		if (activeImageId !== 'graph') return

		const globalMouseHandler = (e: MouseEvent) => {
			handleMouseMove(e)
		}

		document.addEventListener('mousemove', globalMouseHandler)
		return () => document.removeEventListener('mousemove', globalMouseHandler)
	}, [activeImageId])

	// Hide edge buttons when scrolled past hero section
	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current) return;
			const rect = sectionRef.current.getBoundingClientRect();
			setEdgeButtonsVisible(rect.bottom > 800); // 80px from top, tweak as needed
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
  return (
	<section
	  ref={sectionRef}
	  className="min-h-[40vh] sm:min-h-[33vh] lg:min-h-screen flex flex-col justify-center items-stretch relative overflow-hidden"
	  onMouseMove={activeImageId === 'shapes' ? handleMouseMove : undefined}
	  onMouseLeave={(activeImageId === 'shapes' || activeImageId === 'graph') ? () => {
		setMouse({ x: -9999, y: -9999 })
		setGraphMouse({ x: 0, y: 0 })
	  } : undefined}
	>
	  {/* Background Image, Carousel, and Overlays */}
	  <div className="absolute inset-0">
		<AnimatePresence mode="wait">
		  <motion.div
			key={activeImageId}
			initial={{ opacity: 0, scale: 1.05 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 1, ease: 'easeInOut' }}
			className="absolute inset-0"
		  >
			{/* Grayscale base image - hidden for panorama effect */}
			{activeImageId !== 'panorama' && (
			  <ImageWithFallback
				src={activeImage.src}
				alt={activeImage.alt}
				className="w-full h-full object-cover"
			  />
			)}
			{/* Colored reveal for 'shapes' */}
			{activeImageId === 'shapes' && (
			  <div
				style={{
				  position: 'absolute',
				  inset: 0,
				  pointerEvents: 'none',
				  WebkitMaskImage: `radial-gradient(ellipse 200px 200px at ${mouse.x}px ${mouse.y}px, white 40%, rgba(255,255,255,0.5) 70%, transparent 100%)`,
				  maskImage: `radial-gradient(ellipse 200px 200px at ${mouse.x}px ${mouse.y}px, white 40%, rgba(255,255,255,0.5) 70%, transparent 100%)`,
				  transition: 'mask-image 0.1s, -webkit-mask-image 0.1s',
				}}
			  >
				<ImageWithFallback
				  src="/images/shapes-colored.png"
				  alt="Geometric shapes colored"
				  className="w-full h-full object-cover"
				/>
			  </div>
			)}
			{/* Graph paper drawing theme */}
			{activeImageId === 'graph' && (
			  <>
				<GraphPaperDrawing mouse={graphMouse} />
			  </>
			)}
			{/* Auto-scrolling panoramic images theme */}
			{activeImageId === 'panorama' && (
			  <>
				<AutoScrollingPanorama />
			  </>
			)}
		  </motion.div>
		  {/* --- VERTICAL CAROUSEL: Images scroll into the frame on the wall --- */}
		  {activeImageId === 'frames' && (
            <div className="absolute top-1/2 right-30 sm:right-5 -translate-y-1/2 z-5 pointer-events-none" style={{background:'none'}}>
              <div className="relative flex flex-col items-center justify-center" style={{width:420,height:560,marginRight:'5vw',zIndex:5}}>
                <img src="/images/frame.png" alt="Picture frame" style={{position:'absolute',top:0,left:0,width:420,height:560,zIndex:20,pointerEvents:'none',userSelect:'none'}} draggable={false} />
                <div style={{width:390,height:537,position:'relative',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',zIndex:5}}>
                  <img src="/images/frame-mat.png" alt="Frame mat" style={{position:'absolute',top:0,left:0,width:390,height:537,zIndex:4,pointerEvents:'none',userSelect:'none'}} draggable={false} />
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ 
                      opacity: isTransitioning ? 0 : 1
                    }}
                    transition={{ 
                      opacity: { duration: 0.3, ease: 'easeInOut' }
                    }}
                    style={{
                      width: 320,
                      height: 400,
                      overflow: 'hidden',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 10,
                      background: 'transparent',
                      border: 'none',
                      boxShadow: 'none'
                    }}
                  >
                    <ImageWithFallback
                      src={framesCarouselImages[carouselIndex].src}
                      alt={framesCarouselImages[carouselIndex].alt}
                      className="max-w-full max-h-full object-contain"
                      style={{
                        objectPosition: 'center center',
                        objectFit: 'contain'
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          )}
		</AnimatePresence>
		{/* Enhanced gradient overlay for better text legibility - hidden for graph and frames themes */}
		{activeImageId !== 'graph' && activeImageId !== 'frames' && (
		  <>
			<div className="absolute z-10 inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/0 z-20 pointer-events-none" />
      <div className="absolute z-10 inset-0"/>
		  </>
		)}
		
		{/* Edge button shadows for better visibility */}
		{edgeButtonsVisible && (
		  <>
			{/* Top edge shadow for theme dock button */}
			<div className="fixed top-0 left-0 right-0 h-20 z-30 pointer-events-none" style={{
			  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
			}} />
			
			{/* Right edge shadow for gallery button */}
			<div className="fixed top-0 right-0 w-20 h-full z-30 pointer-events-none" style={{
			  background: 'linear-gradient(to left, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
			}} />
			
			{/* Bottom edge shadow for portfolio button */}
			<div className="fixed bottom-0 left-0 right-0 h-20 z-30 pointer-events-none" style={{
			  background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
			}} />
		  </>
		)}
	  </div>
	  {/* Floating geometric shapes */}
	  <div className="absolute inset-0 pointer-events-none">
		<motion.div
		  className="absolute top-20 sm:top-40 right-8 sm:right-20 w-8 sm:w-16 h-8 sm:h-16 border border-white/20 rotate-45"
		  animate={{ rotate: [45, 225, 45] }}
		  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
		/>
		<motion.div
		  className="absolute bottom-20 sm:bottom-40 right-12 sm:right-32 w-1 sm:w-2 h-1 sm:h-2 bg-white/40 rounded-full"
		  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
		  transition={{ duration: 3, repeat: Infinity }}
		/>
	  </div>

  {/* Main content: two columns */}
  <div className="relative z-50 ml-0 sm:-ml-60 lg:ml-40 mt-8 sm:mt-16 lg:mt-20 flex flex-1 flex-col lg:flex-row items-center lg:items-center justify-between max-w-7xl mx-auto w-full px-4 sm:px-8">
	{/* Left: Name and Role */}
	<div className="flex flex-col items-start justify-center flex-1 py-8 sm:py-16 lg:py-24">
	  <h1 className="font-bold leading-none tracking-tight text-white mt-8 sm:-mt-20 lg:mt-40 mb-4 sm:mb-6 text-[clamp(2.5rem,12vw,10rem)] sm:text-[clamp(3rem,8vw,10rem)] drop-shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
<span
  className={
	`transition-colors duration-500 drop-shadow-[0_6px_20px_rgba(0,0,0,0.4)] ` +
	(activeImageId === 'shapes' ? 'text-blue-300 [text-shadow:_2px_2px_8px_rgba(0,0,0,0.05),_0px_0px_16px_rgba(59,130,246,0.3)]' :
	 activeImageId === 'frames' ? 'text-green-300 [text-shadow:_1px_1px_4px_rgba(0,0,0,0.05)]' :
	 activeImageId === 'graph' ? 'text-red-300' :
	 activeImageId === 'panorama' ? 'text-orange-300 [text-shadow:_1px_1px_4px_rgba(0,0,0,0.5)]' :
	 activeImageId === 'desert' ? 'text-orange-300 [text-shadow:_2px_2px_8px_rgba(0,0,0,0.9),_0px_0px_16px_rgba(251,146,60,0.3)]' :
	 activeImageId === 'lake' ? 'text-indigo-300 [text-shadow:_2px_2px_8px_rgba(0,0,0,0.9),_0px_0px_16px_rgba(99,102,241,0.3)]' : 'text-white [text-shadow:_2px_2px_8px_rgba(0,0,0,0.9)]')
  }
>
  Matthew
</span>
<br />
<span className="font-light text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] [text-shadow:_1px_1px_8px_rgba(0,0,0,0.5)]">Guck</span>
	  </h1>
	  <div className="mt-6 sm:mt-12 lg:mt-50">
		<div className="text-lg sm:text-xl md:text-2xl text-white font-bold drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] [text-shadow:_1px_1px_8px_rgba(0,0,0,0.9)]">Stanford University</div>
		<div className="text-base sm:text-lg md:text-xl text-white/80 font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] [text-shadow:_1px_1px_6px_rgba(0,0,0,0.8)]">Design &amp; Computer Science</div>
	  </div>
	</div>
  </div>

  {/* Right Edge: View Gallery Edge Button */}
  <motion.div
		initial={false}
		animate={{ opacity: edgeButtonsVisible ? 1 : 0, pointerEvents: edgeButtonsVisible ? 'auto' : 'none' }}
		transition={{ duration: 0.3 }}
		className="fixed top-0 right-0 h-full w-16 z-40 flex items-center justify-center group cursor-pointer"
	  >
		<div className="relative flex flex-col items-center justify-center h-full w-full">
		  <span className="sr-only">View Gallery</span>
		  <EdgeButton onClick={() => {
			// Navigate to gallery page
			window.location.hash = '#/gallery';
		  }}>
			<ChevronRight className="w-8 h-8 text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]" />
			<span className="text-white text-xs mt-2 opacity-90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">Gallery</span>
		  </EdgeButton>
		</div>
	  </motion.div>



  {/* Bottom Edge: View Portfolio Edge Button */}

  {/* Bottom Edge: View Portfolio Edge Button (disappears on scroll) */}
  <PortfolioEdgeButton scrollToProjects={scrollToProjects} />


{/* Top Center: Dock Toggle Button (Show when dock is closed) */}

<AnimatePresence>
  {!showDock && (
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: edgeButtonsVisible ? 1 : 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4, ease: 'easeInOut' }}
  className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pointer-events-none"
  style={{ pointerEvents: edgeButtonsVisible ? 'auto' : 'none' }}
>
  <div className="pointer-events-auto flex flex-col items-center justify-center mt-2">
	<EdgeButton onClick={() => setShowDock(true)}>
	  <ChevronDown style={{ transform: 'rotate(180deg)' }} className="w-8 h-8 text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]" />
	  <motion.span
		className="mt-1"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.4, ease: 'easeInOut' }}
	  >
		Theme
	  </motion.span>
	</EdgeButton>
  </div>
</motion.div>
  )}
</AnimatePresence>

{/* Centered Image Dock, toggled by button */}

<AnimatePresence>
  {showDock && (
	<>
	  {/* Dock itself */}
	  <motion.div
		initial={{ opacity: 0, y: -40 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: -40 }}
		transition={{ duration: 0.4, ease: 'easeInOut' }}
		className="absolute top-8 right-1/2 translate-x-1/2 z-50"
	  >
		<ImageDock
		  images={dockImages}
		  activeImageId={activeImageId}
		  onImageChange={handleImageChange}
		/>
	  </motion.div>
	  {/* Close Dock Button: below the dock, top-center */}
	  <div className="fixed left-0 right-0 z-50 flex items-center justify-center pointer-events-none" style={{ top: 'calc(9rem)' }}>
		<div className="pointer-events-auto flex flex-col items-center justify-center">
		  <EdgeButton onClick={() => setShowDock(false)}>
			<ChevronDown className="w-8 h-8 text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]" />
		  </EdgeButton>
		</div>
	  </div>
	</>
  )}
</AnimatePresence>

	</section>
  )
}

// Hide-on-scroll Portfolio Edge Button (must be outside Hero)
function PortfolioEdgeButton({ scrollToProjects }: { scrollToProjects: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
	const handleScroll = () => {
	  setVisible(window.scrollY < 40);
	};
	window.addEventListener('scroll', handleScroll);
	return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
	<motion.div
	  initial={{ opacity: 1 }}
	  animate={{ opacity: visible ? 1 : 0 }}
	  transition={{ duration: 0.3 }}
	  className="fixed left-0 right-0 bottom-0 h-16 z-40 flex items-center justify-center group cursor-pointer"
	  onClick={scrollToProjects}
	  style={{ pointerEvents: visible ? 'auto' : 'none' }}
	>
	  <EdgeButton className="relative h-full w-full">
		<span className="sr-only">View Portfolio</span>
		<span className="text-white text-xs mt-1 opacity-90 group-hover:opacity-100 transition drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
			View Portfolio
			</span>
		<ChevronDown className="w-8 h-8 text-white opacity-90 group-hover:opacity-100 transition drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]" />
			
	  </EdgeButton>
	</motion.div>
  );
}