"use client"
import Image from "next/image";
import "../../app/font.css";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const Cartões = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const controls = useAnimation();

    useEffect(() => {
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: "0px",
            threshold: 0.15
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]): void => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    controls.start("visible");
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [controls]);

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6, 
                ease: "easeOut" 
            }
        }
    };

    const cardContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return(
        <section 
            ref={sectionRef} 
            className="w-full bg-white flex justify-center items-center py-8 overflow-hidden"
        >
            <div className="max-w-[1500px] gap-15 flex flex-col justify-center items-center w-full px-4">
                <motion.div 
                    className="flex px-8 flex-col gap-2 justify-center items-center text-center"
                    initial="hidden"
                    animate={controls}
                    variants={headerVariants}
                >
                    <h1 id="aeonik" className="text-[33px] lg:text-5xl text-[#0e0e0e] font-bold">Escolha seu cartão ideal</h1>
                    <p className="text-[15px] lg:text-[16px]">Sem anuidades, sem tarifas abusivas e benefícios ilimitados</p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 w-full gap-15 lg:gap-3"
                    initial="hidden"
                    animate={controls}
                    variants={cardContainerVariants}
                >
                    <motion.div 
                        className="p-5 gap-10 flex flex-col justify-center py-4 px-10 md:px-[15rem] md:hover:px-[12rem] lg:px-[6rem] lg:hover:px-[4rem] transition-all duration-300"
                        variants={cardVariants}
                        layout
                    >
                        <div className="border-2 cursor-pointer border-[#eeeeee] hover:border-[#FFDA25] group flex justify-center items-center hover:bg-neutral-100 group bg-white transition-all duration-300 rounded-lg">
                            <Image 
                                src={"/gold.png"}
                                alt="Cartão Gold"
                                width={200}
                                height={200}
                                quality={100}
                                className="group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-md group-hover:-translate-y-10 group-hover:-rotate-6"
                                priority
                            />
                        </div>

                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h1 className="text-[24px] font-semibold text-black border-b-2 pb-3 flex justify-center w-[13rem] border-b-[#d4d4d4]">Cartão Gold</h1>
                            <div className="flex mt-3 flex-col justify-center items-center gap-1">
                                <p className="text-center w-full md:w-[20rem] lg:w-[16rem] xl:w-[20rem] text-[15.5px]">Cashback de 1% em todas as compras</p>
                                <p className="text-center w-full md:w-[20rem] lg:w-[16rem] xl:w-[20rem] text-[15.5px]">Seguro de viagem incluso</p>
                                <p className="text-center w-full md:w-[20rem] lg:w-[16rem] xl:w-[20rem] text-[15.5px]">Acesso a salas VIP em aeroportos</p>
                            </div>
                        </div>

                        <div className="flex cursor-pointer flex-col hover:bg-[#FFDA25] transition-all group duration-300 hover:border-[#FFDA25] mx-auto px-8 justify-center items-center border-2 border-[#e0c01d] p-3 rounded-full">
                            <button className="cursor-pointer font-medium w-full group-hover:font-bold transition-all duration-300">Solicite Agora</button>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="p-5 gap-10 flex flex-col justify-center py-4 px-10 md:px-[15rem] md:hover:px-[12rem] lg:px-[6rem] lg:hover:px-[4rem] transition-all duration-300"
                        variants={cardVariants}
                        layout
                    >
                        <div className="border-2 cursor-pointer border-[#eeeeee] hover:border-purple-600 flex justify-center items-center hover:bg-neutral-100 group bg-white transition-all duration-300 rounded-lg">
                            <Image 
                                src={"/master.png"}
                                alt="Cartão Master"
                                width={200}
                                height={200}
                                quality={100}
                                className="group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-md group-hover:-translate-y-10"
                                priority
                            />
                        </div>

                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h1 className="text-[24px] font-semibold text-black border-b-2 pb-3 flex justify-center w-[13rem] border-b-[#d4d4d4]">Cartão Master</h1>
                            <div className="flex mt-3 flex-col gap-1 justify-center items-center">
                                <p className="text-center w-full md:w-[20rem] lg:w-[16rem] xl:w-[20rem] text-[15.3px]">Cashback de 2% em compras nacionais e internacionais</p>
                                <p className="text-center w-full md:w-[20rem] lg:w-[16rem] xl:w-[20rem] text-[15.5px]">Seguro de viagem incluso</p>
                                <p className="text-center w-full md:w-[20rem] lg:w-[16rem] xl:w-[20rem] text-[15.5px]">Acesso a salas VIP em aeroportos</p>
                            </div>
                        </div>

                        <div className="flex cursor-pointer flex-col hover:bg-purple-600 group transition-all duration-300 hover:border-purple-600 mx-auto px-8 justify-center items-center border-2 border-purple-600 p-3 rounded-full">
                            <button className="cursor-pointer font-medium group-hover:text-white group-hover:font-bold transition-all duration-300 w-full">Solicite Agora</button>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="p-5 gap-10 flex flex-col justify-center py-4 px-10 md:px-[15rem] md:hover:px-[12rem] lg:px-[6rem] lg:hover:px-[4rem] transition-all duration-300"
                        variants={cardVariants}
                        layout
                    >
                        <div className="border-2 cursor-pointer border-[#eeeeee] hover:border-black flex justify-center items-center hover:bg-neutral-100 group bg-white transition-all duration-300 rounded-lg">
                            <Image 
                                src={"/blackcard.png"}
                                alt="Cartão Black"
                                width={200}
                                height={200}
                                quality={100}
                                className="group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-md group-hover:-translate-y-10 group-hover:rotate-6"
                                priority
                            />
                        </div>

                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h1 className="text-[24px] font-semibold text-black border-b-2 pb-3 flex justify-center w-[13rem] border-b-[#d4d4d4]">Cartão Black</h1>
                            <div className="flex mt-3 flex-col gap-1 justify-center items-center">
                                <p className="text-center w-full md:w-[20rem] lg:w-[16rem] xl:w-[20rem] text-[15px]">Cashback de 3% em todas as compras</p>
                                <p className="text-center w-full md:w-[20rem] lg:w-[16rem] xl:w-[20rem] text-[15px]">Acesso ilimitado a salas VIP em aeroportos</p>
                                <p className="text-center w-full md:w-[20rem] lg:w-[16rem] xl:w-[20rem] text-[15px]">Concierge 24 horas para serviços exclusivos</p>
                            </div>
                        </div>

                        <div className="flex cursor-pointer flex-col hover:bg-neutral-900 group transition-all duration-300 hover:border-neutral-900 mx-auto px-8 justify-center items-center border-2 border-neutral-900 p-3 rounded-full">
                            <button className="cursor-pointer font-medium group-hover:text-white group-hover:font-bold transition-all duration-300 w-full">Solicite Agora</button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}