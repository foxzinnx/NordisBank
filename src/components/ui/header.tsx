"use client"
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import "../../app/li.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { MenuMobile } from "./mobilemenu"; 

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-in-out',
            mirror: true 
        });

        setIsAtTop(window.scrollY <= 10);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY <= 10) {
                setIsAtTop(true);
                setIsVisible(true);
            } else {
                setIsAtTop(false);
                
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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        
        if (!mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    useEffect(() => {
        if (!mobileMenuOpen) {
            document.body.style.overflow = "auto";
        }
    }, [mobileMenuOpen]);

    return (
        <>
            <header 
                className={`fixed top-0 w-full z-40 flex justify-center items-center px-4 transition-all duration-500 ease-in-out ${
                    isVisible ? "opacity-100 transform-none" : "opacity-0 -translate-y-full"
                } ${
                    isAtTop 
                        ? "backdrop-blur-sm" 
                        : "bg-[#fff] drop-shadow-md border-b-neutral-900"
                }`}
            >
                <div className="px-1 md:px-3 p-6 flex max-w-[1850px] w-full justify-between items-center" data-aos="fade-in" data-aos-duration="1200">
                    <div>
                        <Image 
                            src={"/letter.png"}
                            alt=""
                            height={140}
                            width={140}
                            quality={100}
                            className={`transition-all duration-300 ${
                                isAtTop
                                ? "brightness-0"
                                : "brightness-0"
                            }`}
                        />
                    </div>

                    <div>
                        <ul id="matter" className={`text-[19px] hidden lg:flex pl-30 px-8 justify-center items-center gap-8 font-medium ${
                            isAtTop
                            ? "text-gray-900"
                            : "text-gray-900"
                        }`}>
                            <div className="flex items-center gap-2">
                                <li className="hover:scale-115 transition-transform duration-300">Para você</li>
                                <Image 
                                    src={"/arrow-down.png"}
                                    alt=""
                                    width={14}
                                    height={14}
                                    className=""
                                />
                            </div>
                            <li className="hover:scale-115 transition-transform duration-300">Para seu negócio</li>
                            <li className="hover:scale-115 transition-transform duration-300">Ajuda</li>
                            <li className="hover:scale-115 transition-transform duration-300">Conta</li>
                            <li className="hover:scale-115 transition-transform duration-300">Blog</li>
                        </ul>
                    </div>

                    <div className="hidden lg:flex items-center gap-5">
                        
                        <Link href={"/signin"}>
                            <div className={`cursor-pointer flex px-6 items-center gap-2 group p-[9px] transition-all duration-300 rounded-3xl ${
                                isAtTop
                                ? "border-2 border-black hover:bg-gray-900"
                                : "border-2 border-black hover:bg-gray-900"
                            }`}>
                                <p id="matter" className={`text-[19px] font-semibold ${
                                    isAtTop
                                    ? "text-gray-900 group-hover:text-white"
                                    : "text-gray-900 group-hover:text-white"
                                }`}>Entrar</p>
                            </div>
                        </Link>

                        <Link href={"/signup"}>
                            <div className={`cursor-pointer flex p-2 py-2 group transition-all duration-500 group px-6 items-center gap-2 rounded-3xl ${
                                isAtTop
                                ? "border-2 bg-gray-900 hover:border-[#191C1F]"
                                : "border-2 bg-gray-900 hover:border-[#191C1F]"
                            }`}>
                                <p id="matter" className={`text-[19px] font-medium group-hover:text-white transition-all duration-300 ${
                                    isAtTop
                                    ? "text-white"
                                    : "text-white"
                                }`}>Abra sua conta</p>
                            </div>
                        </Link>
                        
                    </div>

                    <div className="flex lg:hidden md:block">
                        <FontAwesomeIcon 
                            icon={faBars} 
                            className={`size-5 cursor-pointer ${
                                isAtTop
                                ? "text-black"
                                : "text-black"
                            }`} 
                            onClick={toggleMobileMenu}
                            style={{fontSize: "20px"}}
                        />
                    </div>
                </div>
            </header>

            {mobileMenuOpen && <MenuMobile onClose={toggleMobileMenu} />}
        </>
    );
}