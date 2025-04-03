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
        const timeout = setTimeout(() => {
            setIsLoaded(true);
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

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

    const titleWords = ["UM", "BANCO", "FEITO", "PARA", "VOCÊ.", "SIMPLES,", "SEGURO", "E", "100%", "DIGITAL."];

    return (
        <motion.section 
            className="px-4 min-h-screen py-5 lg:py-10 flex flex-col lg:flex-row justify-around items-center relative overflow-hidden"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={backgroundVariants}
        >

            <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white to-[#ebebeb] z-0"
                variants={backgroundVariants}
            >
                <motion.div 
                    className="absolute inset-0 opacity-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ delay: 1, duration: 2 }}
                />

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

            <div className="flex drop-shadow-sm px-4 pt-10 md:pt-15 lg:pt-0 md:px-8 lg:px-15 flex-col justify-center w-full lg:w-[58%] items-center lg:items-start z-10 mt-16 lg:mt-0">
                <motion.h1 
                    id="titulo" 
                    className="text-[#191C1F] text-3xl md:text-5xl px-0 lg:text-6xl text-center lg:text-left font-poppins flex flex-wrap justify-center lg:justify-start font-semibold"
                    variants={headingVariants}
                >
                    {titleWords.map((word, i) => (
                        <motion.span 
                            key={i}
                            custom={i}
                            variants={wordVariants}
                            className="mx-2 lg:ml-0 lg:mr-4 inline-block"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.div 
                    className="flex mt-5 items-center w-full gap-2 justify-center lg:justify-start"
                    variants={buttonVariants}
                >
                    <motion.div 
                        className="flex cursor-pointer transition-all duration-300 p-2 px-6 items-center gap-2 border-b border-b-[#191C1F] group"
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        <motion.p 
                            className="text-[#191C1F] text-[18px]"
                            initial={{ color: "#191C1F" }}
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
                            <FontAwesomeIcon icon={faArrowRight} className="size-4 text-[#191C1F] group-hover:text-black" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
            
            <motion.div 
                className="min-w-[350px] lg:min-w-0 mt-10 lg:mt-0 w-full lg:w-2/5 flex justify-center z-10"
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
                    className="w-full md:w-1/2 lg:w-2/4 mt-0 lg:mt-15"
                >
                    <Image
                        src={"/celular4.png"}
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