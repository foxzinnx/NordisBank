"use client"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MenuMobileProps {
    onClose: () => void;
}

export const MenuMobile = ({ onClose }: MenuMobileProps) => {
    const [animationState, setAnimationState] = useState("entering");

    useEffect(() => {
        setAnimationState("entered");

        document.body.style.overflow = "hidden";
        
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleClose = () => {
        setAnimationState("exiting");
        
        setTimeout(() => {
            onClose();
        }, 300);
    };

    return(
        <div 
            className={`w-full lg:hidden fixed z-50 inset-0 h-screen bg-white transition-all duration-300 ease-in-out overflow-y-auto ${
                animationState === "entering" ? "opacity-0 translate-y-full" :
                animationState === "entered" ? "opacity-100 translate-y-0" :
                "opacity-0 translate-y-full"
            }`}
        >
            <div className="w-full px-4 pt-4 sticky top-0 bg-white">
                <div className="flex justify-between items-center">
                    <Image 
                        src={"/letter.png"}
                        alt=""
                        height={80}
                        width={100}
                        className="brightness-0 h-auto"
                    />

                    <FontAwesomeIcon 
                        icon={faXmark} 
                        className="text-2xl p-2 cursor-pointer" 
                        onClick={handleClose}
                    />
                </div>
            </div>
            
            <div className="flex flex-col min-h-[calc(100%-80px)] justify-between">
                <div className="px-4 pt-8">
                    <ul className="font-bold text-xl sm:text-2xl flex flex-col items-start gap-4 sm:gap-5 w-full">
                        <Link href={"/"} onClick={handleClose}><li className="cursor-pointer hover:opacity-80">Início</li></Link> 
                        <li className="cursor-pointer hover:opacity-80">Para você</li>
                        <li className="cursor-pointer hover:opacity-80">Para seu negócio</li>
                        <li className="cursor-pointer hover:opacity-80">Ajuda</li>
                        <li className="cursor-pointer hover:opacity-80">Conta</li>
                        <li className="cursor-pointer hover:opacity-80">Blog</li>
                    </ul>
                </div>
            
                <div className="px-4 py-10 flex flex-col gap-3 w-full">
                    <Link href={"/signin"} className="w-full" onClick={handleClose}>
                        <button className="w-full py-2.5 border-2 font-semibold px-6 bg-black text-white border-black text-base sm:text-lg rounded-3xl hover:bg-gray-900 transition-colors">Entrar</button>
                    </Link>
                    <Link href={"/signup"} className="w-full" onClick={handleClose}>
                        <button className="w-full py-2.5 border-2 font-semibold px-4 border-black text-base sm:text-lg rounded-3xl hover:bg-gray-100 transition-colors">Abrir uma conta</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}