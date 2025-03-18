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
            mirror: true // Anima elementos ao sair também
        });

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Verificar se estamos no topo da página
            if (currentScrollY <= 10) {
                setIsAtTop(true);
                setIsVisible(true);
            } else {
                setIsAtTop(false);
                
                // Se estamos rolando para baixo e não estamos no topo
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false);
                } 
                // Se estamos rolando para cima
                else if (currentScrollY < lastScrollY) {
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
            className={`fixed top-0 w-full z-50 flex justify-center items-center px-4 transition-all duration-300 ${
                isVisible ? "transform-none" : "-translate-y-full"
            } ${
                isAtTop 
                    ? "backdrop-blur-md border-b border-b-slate-50" 
                    : "bg-[#0081FF] border-b border-b-slate-50"
            }`}
        >
            <div className="px-1 p-6 flex max-w-[1850px] w-full justify-between items-center" data-aos="fade-in">
                <div>
                    <Image 
                        src={"/letter.png"}
                        alt=""
                        height={140}
                        width={140}
                        quality={100}
                    />
                </div>

                <div>
                    <ul className="text-white text-[16px] hidden lg:flex pl-30 px-8 justify-center items-center gap-10 font-medium">
                        <li className="hover:scale-115 transition-transform duration-300">Início</li>
                        <li className="hover:scale-115 transition-transform duration-300">Para você</li>
                        <li className="hover:scale-115 transition-transform duration-300">Para seu negócio</li>
                        <li className="hover:scale-115 transition-transform duration-300">Ajuda</li>
                        <li className="hover:scale-115 transition-transform duration-300">Conta</li>
                        <li className="hover:scale-115 transition-transform duration-300">Blog</li>
                    </ul>
                </div>

                <div className="hidden lg:flex items-center gap-5">
                    <div className="cursor-pointer flex p-2 py-2 hover:bg-white group hover:border-blue-400 transition-all duration-300 group px-6 border-2 border-white items-center gap-2 rounded-3xl">
                        <p className="text-white text-[17px] font-semibold group-hover:text-black transition-all duration-300">Abra sua conta</p>
                    </div>
                    <div className="cursor-pointer flex px-6 items-center gap-2 bg-white hover:bg-[#f0f0f0] group p-3 transition-all duration-300 rounded-3xl">
                        {/* <FontAwesomeIcon icon={faUser} className="size-[16px] mb-[1px] text-black group-hover:text-white" /> */}
                        <p className="text-black text-[17px] font-bold">Entrar</p>
                    </div>
                </div>

                <div className="flex lg:hidden md:block">
                    <FontAwesomeIcon icon={faBars} className="size-5 text-white" />
                </div>
            </div>
        </header>
    );
}