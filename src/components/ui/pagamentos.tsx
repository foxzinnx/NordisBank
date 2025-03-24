"use client"
import Image from "next/image";
import "../../app/font.css";
import WaveButton from "./button";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Pagamentos = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const paymentIconVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 0.4,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: { 
            scale: 0.95,
            transition: { duration: 0.1 }
        }
    };

    const phoneImageVariants = {
        hidden: { 
            y: 100, 
            opacity: 0, 
            rotateY: 180,
            scale: 0.6
        },
        visible: { 
            y: 0, 
            opacity: 1, 
            rotateY: 0,
            scale: 1,
            transition: { 
                y: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 0.8 },
                rotateY: { duration: 1.5, ease: "easeOut" },
                scale: { duration: 1, ease: "easeOut" }
            }
        },

        animate: {
            y: [-3, 3, -3],
            transition: {
                y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }
        }
    };

    return(
        <section 
            ref={sectionRef}
            className="bg-white w-full flex justify-center items-center py-10 overflow-hidden"
        >
            <div className="max-w-[1500px] flex-col lg:flex-row w-full flex justify-between py-15 items-center px-7 lg:px-10">
                <motion.div 
                    variants={paymentIconVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className=""
                >
                    <Image 
                        src={"/gpay.png"}
                        alt=""
                        height={1000}
                        width={200}
                        className="opacity-40 hidden lg:block"
                    />
                </motion.div>

                <motion.div 
                    className="flex mt-5 flex-col justify-center items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    <motion.p 
                        id="aeonik" 
                        className="text-4xl text-center lg:text-[53px] pb-1 text-[#0e0e0e]"
                        variants={itemVariants}
                    >
                        ENVIE E RECEBA EM SEGUNDOS
                    </motion.p>
                    
                    <motion.p 
                        id="aeonik" 
                        className="text-[1rem] lg:text-[1.3rem] text-center text-[#636363]"
                        variants={itemVariants}
                    >
                        CONECTE-SE COM FACILIDADE E AGILIDADE EM CADA TRANSAÇÃO
                    </motion.p>
                    
                    <div className="pt-10 perspective-1000">
                        <motion.div
                            initial="hidden"
                            animate={isVisible ? ["visible", "animate"] : "hidden"}
                            variants={phoneImageVariants}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <Image 
                                src={"/pagamento.png"}
                                alt=""
                                height={500}
                                width={500}
                                className="max-w-[330px] lg:max-w-[370px]"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        variants={itemVariants}
                        whileHover="hover"
                        whileTap="tap"
                        initial="initial"
                        className="mt-2"
                    >
                        <WaveButton label="Baixar app" />

                    </motion.div>
                </motion.div>

                <div className="flex mt-25 gap-10 md:gap-25 items-center justify-center">
                            
                    <Image 
                        src={"/gpay.png"}
                        alt=""
                        height={1000}
                        width={200}
                        className="opacity-40 lg:hidden max-w-[110px] md:max-w-[140px]"
                    />
                    
                    <Image 
                        src={"/applepay.png"}
                        alt=""
                        height={1000}
                        width={200}
                        className="opacity-40 lg:hidden max-w-[110px] md:max-w-[140px]"
                    />

                </div>

                <motion.div
                    variants={paymentIconVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    <Image 
                        src={"/applepay.png"}
                        alt=""
                        height={1000}
                        width={200}
                        className="opacity-40 hidden lg:block"
                    />
                </motion.div>
            </div>
        </section>
    );
}