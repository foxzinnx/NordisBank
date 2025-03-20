"use client"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../../app/li.css";

export const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simular um pequeno atraso antes de iniciar as animações
        const timeout = setTimeout(() => {
            setIsLoaded(true);
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

    // Variantes de animação para diferentes elementos
    const headingVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                delay: 0.5,
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "1.5rem",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const phoneVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                delay: 0.7,
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const backgroundVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 1.5 
            }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + (i * 0.1),
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    // Array de palavras do título para animação sequencial
    const titleWords = ["UM", "BANCO", "FEITO", "PARA", "VOCÊ.", "SIMPLES,", "SEGURO", "E", "100%", "DIGITAL."];

    return (
        <motion.section 
            className="px-4 min-h-screen py-5 lg:py-10 flex flex-col md:flex-col justify-around items-center relative overflow-hidden"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={backgroundVariants}
        >
            
            {/* Background gradient animation */}
            <motion.div 
                className="absolute inset-0 bg-transparent z-0"
                variants={backgroundVariants}
            >
                <motion.div 
                    className="absolute inset-0 opacity-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ delay: 1, duration: 2 }}
                />
                
                {/* Animated floating particles */}
                {Array.from({ length: 12 }).map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute w-4 h-4 md:w-8 md:h-8 rounded-full bg-white opacity-10"
                        initial={{ 
                            x: Math.random() * 100 - 50 + "%", 
                            y: Math.random() * 100 + "%"
                        }}
                        animate={{ 
                            x: [
                                Math.random() * 100 - 50 + "%", 
                                Math.random() * 100 - 50 + "%", 
                                Math.random() * 100 - 50 + "%"
                            ],
                            y: [
                                Math.random() * 100 + "%", 
                                Math.random() * 100 + "%", 
                                Math.random() * 100 + "%"
                            ],
                            scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{ 
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 15 + (index * 5),
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </motion.div>

            {/* Content section */}
            <div className="flex drop-shadow-sm px-4 pt-30 md:px-8 flex-col justify-start w-full md:w-[55rem] items-center md:mb-0 z-10 mt-16">
                <motion.h1 
                    id="titulo" 
                    className="text-white text-[32px] md:text-[37px] lg:text-6xl text-center font-poppins flex flex-wrap justify-center font-semibold"
                    variants={headingVariants}
                >
                    {titleWords.map((word, i) => (
                        <motion.span 
                            key={i}
                            custom={i}
                            variants={wordVariants}
                            className="mx-2 inline-block"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.div 
                    className="flex mt-8 items-center w-full gap-2 justify-center"
                    variants={buttonVariants}
                >
                    <motion.div 
                        className="flex cursor-pointer transition-all duration-300 p-2 px-6 items-center gap-2 border-b border-b-white group"
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        <motion.p 
                            className="text-white text-[18px]"
                            initial={{ color: "#ffffff" }}
                            whileHover={{ color: "#000000" }}
                            transition={{ duration: 0.3 }}
                        >
                            Conhecer
                        </motion.p>
                        <motion.div
                            initial={{ x: 0, color: "#ffffff" }}
                            whileHover={{ x: 5, color: "#000000" }}
                            transition={{ duration: 0.3 }}
                        >
                            <FontAwesomeIcon icon={faArrowRight} className="size-4 text-white group-hover:text-black" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Phone image */}
            <motion.div 
                className="min-w-[350px] lg:max-w-[500px] mt-10 w-full md:w-1/2 flex justify-center z-10"
                variants={phoneVariants}
                whileHover={{ 
                    y: -10,
                    transition: { duration: 0.5, ease: "easeInOut" }
                }}
            >
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ 
                        y: [0, -10, 0],
                    }}
                    transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                >
                    <Image
                        src={"/celular3.png"}
                        alt="Smartphone do banco digital"
                        height={600}
                        width={600}
                        quality={100}
                        className="w-full drop-shadow-2xl"
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}