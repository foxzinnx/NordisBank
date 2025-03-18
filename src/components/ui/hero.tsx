import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import "../../app/li.css";

export const Hero = () => {
    return (
        <section className="px-4 min-h-screen py-10 lg:py-25 flex flex-col md:flex-col justify-around items-center">
            
            {/* <div className="absolute min-h-full">
                <img src="https://njstempathways.org/wp-content/uploads/2019/03/4k-wallpaper-blue-sky-blur-281260.jpg" alt="" />
            </div> */}

            <div className="flex drop-shadow-sm px-4 pt-30 md:px-8 flex-col justify-start w-full md:w-[55rem] items-center md:mb-0" data-aos="fade-in">
                <h1 id="titulo" className="text-white text-[32px] md:text-[37px] lg:text-6xl text-center font-poppins flex-wrap font-semibold">UM BANCO FEITO PARA VOCÊ. SIMPLES, SEGURO E <span className="text-white">100% DIGITAL.</span></h1>
                <div className="flex mt-2 items-center w-full gap-2 justify-center">
                    <div className="flex cursor-pointer transition-all duration-300 p-2 px-4 hover:rounded-3xl hover:bg-white group items-center gap-2 border-b border-b-white">
                        <p className="text-white text-[18px] group-hover:text-black">Conhecer</p>
                        <FontAwesomeIcon icon={faArrowRight} className="size-4 text-white group-hover:text-black" />
                    </div>
                </div>
            </div>
            
            <div className="min-w-[350px] lg:max-w-[500px] mt-10 w-full md:w-1/2 flex justify-center" data-aos="fade-up" data-aos-duration="1300">
                <Image
                    src={"/celular2.png"}
                    alt="Smartphone do banco digital"
                    height={600}
                    width={600}
                    quality={100}
                    className="w-full drop-shadow-xl"
                />
            </div>
        </section>
    );
}