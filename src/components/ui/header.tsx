"use client"
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import "../../app/li.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);
    
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-in-out',
            mirror: true 
        });

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY <= 10) {
                setIsAtTop(true);
                setIsVisible(true);
            } else {
                setIsAtTop(false);
                
                // Adicionamos um pequeno debounce para evitar mudanças rápidas demais
                if (currentScrollY > lastScrollY + 5) {
                    setIsVisible(false);
                } 
                else if (currentScrollY < lastScrollY - 5) {
                    setIsVisible(true);
                }
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header 
            className={`fixed top-0 w-full z-50 flex justify-center items-center px-4 transition-all duration-500 ease-in-out ${
                isVisible ? "opacity-100 transform-none" : "opacity-0 -translate-y-full"
            } ${
                isAtTop 
                    ? "backdrop-blur-sm border-b border-b-slate-50" 
                    : "bg-[#fff] drop-shadow-md border-b-neutral-900"
            }`}
        >
            <div className="px-1 p-6 flex max-w-[1850px] w-full justify-between items-center" data-aos="fade-in" data-aos-duration="1200">
                <div>
                    <Image 
                        src={"/letter.png"}
                        alt=""
                        height={140}
                        width={140}
                        quality={100}
                        className={`transition-all duration-300 ${
                            isAtTop
                            ? "brightness-100"
                            : "brightness-0"
                        }`}
                    />
                </div>

                <div>
                    <ul className={`text-[16px] hidden lg:flex pl-30 px-8 justify-center items-center gap-10 font-medium ${
                        isAtTop
                        ? "text-white"
                        : "text-black"
                    }`}>
                        <li className="hover:scale-115 transition-transform duration-300">Início</li>
                        <li className="hover:scale-115 transition-transform duration-300">Para você</li>
                        <li className="hover:scale-115 transition-transform duration-300">Para seu negócio</li>
                        <li className="hover:scale-115 transition-transform duration-300">Ajuda</li>
                        <li className="hover:scale-115 transition-transform duration-300">Conta</li>
                        <li className="hover:scale-115 transition-transform duration-300">Blog</li>
                    </ul>
                </div>

                <div className="hidden lg:flex items-center gap-5">
                    <div className={`cursor-pointer flex p-2 py-2 group transition-all duration-300 group px-6 items-center gap-2 rounded-3xl ${
                        isAtTop
                        ? "border-2 border-white hover:border-white hover:bg-white "
                        : "border-2 border-black hover:bg-black"
                    }`}>
                        <p className={`text-[17px] font-semibold group-hover:text-black transition-all duration-300 ${
                            isAtTop
                            ? "text-white"
                            : "text-black group-hover:text-white"
                        }`}>Abra sua conta</p>
                    </div>
                    <div className={`cursor-pointer flex px-6 items-center gap-2  group p-3 transition-all duration-300 rounded-3xl ${
                        isAtTop
                        ? "bg-white hover:bg-[#f0f0f0]"
                        : "bg-black hover:bg-[#1b1b1b]"
                    }`}>
                        <p className={`text-black text-[17px] font-bold ${
                            isAtTop
                            ? "text-black"
                            : "text-white"
                        }`}>Entrar</p>
                    </div>
                </div>

                <div className="flex lg:hidden md:block">
                    <FontAwesomeIcon icon={faBars} className={`size-5 ${
                        isAtTop
                        ? "text-white"
                        : "text-black"
                    }`} />
                </div>
            </div>
        </header>
    );
}