"use client"
import Image from "next/image";
import "../../app/font.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Notification = () => {

    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.7, delay: 0.2, ease: "easeOut" }
        }
    };

    const notificationVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, delay: 0.8, ease: "easeOut" }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.4, delay: 1, ease: "backOut" }
        }
    };

    return(
        <motion.section 
            ref={sectionRef}
            className="bg-white flex justify-center items-center py-20"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <div className="max-w-[1550px] px-6 w-full flex flex-col gap-14 lg:flex-row justify-between items-center">
                <div className="max-w-[800px] flex flex-col px-4 text-center lg:text-start gap-2">
                    <motion.h1 
                        variants={textVariants}
                        id="aeonik" 
                        className="text-4xl lg:text-6xl text-[#0e0e0e]"
                    >
                        DINHEIRO NA VELOCIDADE DA SUA VIDA
                    </motion.h1>
                    
                    <motion.p 
                        variants={textVariants}
                        className="font-medium text-[15px] px-4 lg:px-0 lg:text-[17px] pt-3"
                    >
                        Transferências instantâneas entre usuários Nordis, sem custos adicionais.
                        Integração completa: envie, receba e converse no mesmo aplicativo.
                    </motion.p>
                    
                    <motion.div 
                        variants={buttonVariants}
                        className="rounded-2xl hidden lg:block border-2 border-black w-[200px] cursor-pointer p-3 mt-7 hover:bg-black group transition-all duration-300"
                    >
                        <button className="w-full cursor-pointer font-semibold group-hover:text-white group-hover:font-bold">
                            Experimente hoje
                        </button>
                    </motion.div>
                </div>

                <motion.div 
                    variants={imageVariants}
                    className="h-[35rem] w-[25rem] md:w-[35rem] px-6 lg:px-2 lg:h-[43rem] lg:w-[30rem] rounded-2xl drop-shadow-md relative"
                >
                    <Image 
                        src={"/olhando.jpg"}
                        alt=""
                        width={500}
                        height={500}
                        quality={100}
                        className="rounded-2xl w-full h-full object-cover brightness-65"
                    />

                    <motion.div
                        variants={notificationVariants}
                    >
                        <Image 
                            src={"/notification.png"}
                            alt=""
                            height={100}
                            width={457}
                            className="absolute max-w-[335px] md:max-w-[430px] lg:max-w-[430px] drop-shadow-sm -translate-y-32 translate-x-2 md:translate-x-10 lg:translate-x-4"
                        />
                    </motion.div>
                </motion.div>

                <motion.div 
                    variants={buttonVariants}
                    className="rounded-2xl flex justify-center items-center mx-auto lg:hidden border-2 border-black w-[200px] hover:bg-black group transition-all duration-300 cursor-pointer p-3"
                >
                    <button className="w-full cursor-pointer font-semibold group-hover:text-white group-hover:font-bold">
                        Experimente hoje
                    </button>
                </motion.div>
            </div>
        </motion.section>
    );
}