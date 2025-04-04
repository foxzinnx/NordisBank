"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1, 
        delay: 0.6,
        ease: "easeOut" 
      }
    }
  };

  const trustBadgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 1.2,
        duration: 0.5 
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white-50/30 to-white-50/20 z-0" />
        
        <motion.div 
          className="absolute inset-0 opacity-10 z-0"
          animate={{
            x: [-100, 0],
            opacity: [0.3, 0.5, 0.3],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }
          }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(30)">
                <rect width="100%" height="100%" fill="none" />
                <path d="M 0,20 L 40,20" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3" />
                <path d="M 20,0 L 20,40" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </motion.div>
        
       
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute top-0 left-0 w-full h-64 opacity-20"
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.2, 0.1],
              transition: {
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#000" 
                fillOpacity="0.2"
              />
            </svg>
          </motion.div>
          
        </div>
      </div>

      <div className="container mx-auto px-10 py-16 md:py-24 lg:py-32">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >

          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 space-y-6 z-10">
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-gray-900 uppercase bg-indigo-50 rounded-full">
                Novo banco digital
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-gray-900">UM BANCO FEITO PARA </span>
                <span className="text-gray-900">VOCÊ.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mt-2">
                SIMPLES, SEGURO E 100% DIGITAL.
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 font-medium max-w-lg">
              Sua vida financeira simplificada com as melhores taxas do mercado, atendimento humanizado e tecnologia de ponta.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                className="px-8 py-3 bg-gray-900 text-white cursor-pointer font-medium rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
                whileHover={{ background: 'transparent', border: '1px solid black', color: '#000', fontWeight: 600}}
                whileTap={{ scale: 0.98 }}
              >
                Conhecer agora
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
              <motion.button
                className="px-8 py-3 font-semibold text-gray-900 cursor-pointer rounded-lg border border-gray-900 hover:border-gray-300 transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Baixar o app
              </motion.button>
            </motion.div>

            <motion.div 
              variants={trustBadgeVariants} 
              className="flex flex-wrap items-center gap-6 pt-6"
            >
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-gray-600 ml-2">4.9/5 na App Store</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 bg-green-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-gray-800">Certificado de Segurança</span>
              </div>
              <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                +1,5M usuários
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10"
            variants={phoneVariants}
            animate={floatingVariants.animate}
          >
            <div className="relative w-64 md:w-80 lg:w-96">
              <div className="relative z-20">
                <img 
                  src="/celular4.png" 
                  alt="App do banco digital"
                  className="w-full rounded-3xl" 
                />
              </div>
              
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-gray-500/10 rounded-full blur-2xl z-10" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gray-500/10 rounded-full blur-2xl z-10" />
              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};