import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Smartphone, Lightbulb, Palette, Code2, CheckCircle2, Rocket, Zap, Sparkles, FileCode, Database } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface DeviceMockupsProps {
  type: 'laptop' | 'phone' | 'both';
  stepIndex: number;
}

const DeviceMockups = ({ type, stepIndex }: DeviceMockupsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (laptopRef.current && (type === 'laptop' || type === 'both')) {
      gsap.fromTo(
        laptopRef.current,
        {
          rotateX: 45,
          rotateY: -25,
          opacity: 0,
          scale: 0.8,
        },
        {
          rotateX: 0,
          rotateY: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          },
        }
      );
    }

    if (phoneRef.current && (type === 'phone' || type === 'both')) {
      gsap.fromTo(
        phoneRef.current,
        {
          rotateX: 45,
          rotateY: 25,
          opacity: 0,
          scale: 0.8,
        },
        {
          rotateX: 0,
          rotateY: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          },
        }
      );
    }
  }, [type]);

  const getStepAnimation = () => {
    switch (stepIndex) {
      case 0: // Discovery & Blueprint
        return (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Lightbulb className="w-12 h-12 md:w-20 md:h-20 text-yellow-300" />
            </motion.div>
            <motion.div
              className="absolute"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-yellow-200" />
            </motion.div>
          </div>
        );
      case 1: // Architect & Design
        return (
          <div className="absolute inset-0 flex items-center justify-center gap-2 p-4">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Palette className="w-10 h-10 md:w-16 md:h-16 text-purple-300" />
            </motion.div>
            <motion.div
              className="flex gap-1"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-400" />
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-400" />
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-400" />
            </motion.div>
          </div>
        );
      case 2: // Agile Development
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
            <motion.div
              animate={{ x: [-20, 20, -20] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-12 h-12 md:w-20 md:h-20 text-cyan-300" />
            </motion.div>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-8 bg-cyan-400 rounded"
                  animate={{ scaleY: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="w-8 h-8 text-cyan-200" />
            </motion.div>
          </div>
        );
      case 3: // Test & Refine
        return (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <CheckCircle2 className="w-12 h-12 md:w-20 md:h-20 text-green-300" />
            </motion.div>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  x: [0, Math.cos(i * Math.PI / 2) * 40],
                  y: [0, Math.sin(i * Math.PI / 2) * 40],
                  opacity: [1, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
        );
      case 4: // Launch & Grow
        return (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket className="w-12 h-12 md:w-20 md:h-20 text-orange-300" />
            </motion.div>
            <motion.div
              className="absolute bottom-8"
              animate={{ scale: [0, 1.5], opacity: [0.8, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="w-8 h-8 bg-orange-400/50 rounded-full" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4"
            >
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </motion.div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-48 sm:h-56 md:h-80 lg:h-96 flex items-center justify-center" style={{ perspective: '1500px' }}>
      {(type === 'laptop' || type === 'both') && (
        <div
          ref={laptopRef}
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Laptop Screen */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-t-xl sm:rounded-t-2xl border-4 sm:border-6 md:border-8 border-slate-700 shadow-2xl w-48 h-32 sm:w-64 sm:h-40 md:w-80 md:h-52 lg:w-96 lg:h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl m-2 overflow-hidden">
              {getStepAnimation()}
              {/* Screen reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            </div>
            {/* Webcam */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-600" />
          </div>
          
          {/* Laptop Base */}
          <div 
            className="relative bg-slate-700 h-2 sm:h-2.5 md:h-3 rounded-b-xl shadow-lg w-52 sm:w-72 md:w-[22rem] lg:w-[28rem]"
            style={{ transform: 'translateX(-8%) rotateX(75deg) translateZ(-10px)' }}
          >
            <div className="absolute inset-x-0 top-0 h-0.5 sm:h-1 bg-slate-600 rounded-t-sm" />
          </div>
        </div>
      )}

      {(type === 'phone' || type === 'both') && (
        <div
          ref={phoneRef}
          className={`relative ${type === 'both' ? 'ml-4 sm:ml-6 md:ml-8 lg:ml-12' : ''}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Phone Frame */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border-4 sm:border-6 md:border-8 border-slate-700 shadow-2xl w-24 h-48 sm:w-32 sm:h-64 md:w-36 md:h-72 lg:w-44 lg:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[1.8rem] m-1 overflow-hidden">
              {getStepAnimation()}
              {/* Screen reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            </div>
            
            {/* Notch */}
            <div className="absolute top-0.5 sm:top-1 left-1/2 -translate-x-1/2 w-10 h-3 sm:w-12 sm:h-4 md:w-16 md:h-5 bg-slate-900 rounded-b-xl sm:rounded-b-2xl" />
            
            {/* Side buttons */}
            <div className="absolute right-[-6px] sm:right-[-8px] top-16 sm:top-20 md:top-24 w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 bg-slate-600 rounded-l-sm" />
            <div className="absolute left-[-6px] sm:left-[-8px] top-14 sm:top-16 md:top-20 w-0.5 sm:w-1 h-4 sm:h-5 md:h-6 bg-slate-600 rounded-r-sm" />
            <div className="absolute left-[-6px] sm:left-[-8px] top-22 sm:top-26 md:top-32 w-0.5 sm:w-1 h-6 sm:h-7 md:h-8 bg-slate-600 rounded-r-sm" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceMockups;
