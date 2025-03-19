import Image from "next/image";
import "../../app/font.css";

export const Cartões = () => {
    return(
        <section className="w-full bg-white flex justify-center items-center py-8">
            <div className="max-w-[1500px] gap-15 flex flex-col justify-center items-center w-full px-4">
                <div className="flex px-8 flex-col gap-2 justify-center items-center text-center">
                    <h1 id="aeonik" className="text-[33px] lg:text-5xl text-[#0e0e0e] font-bold">Escolha seu cartão ideal</h1>
                    <p className="text-[15px] lg:text-[16px]">Sem anuidades, sem tarifas abusivas e benefícios ilimitados</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 w-full gap-15 lg:gap-3">

                    <div className="p-5 gap-10 flex flex-col justify-center py-4 px-10 lg:px-30 lg:hover:px-20 transition-all duration-300">
                        <div className="border-2 cursor-pointer border-[#eeeeee] hover:border-[#FFDA25] group flex justify-center items-center hover:bg-neutral-100 group bg-white transition-all duration-300 rounded-lg">
                            <Image 
                                src={"/gold.png"}
                                alt=""
                                width={200}
                                height={200}
                                quality={100}
                                className="group-hover:scale-115 transition-all duration-300 group-hover:drop-shadow-md group-hover:-translate-y-10 group-hover:-rotate-6"
                            />

                        </div>

                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h1 className="text-[24px] font-semibold text-black border-b-2 pb-3 flex justify-center w-[13rem] border-b-[#d4d4d4]">Cartão Gold</h1>
                            <div className="flex mt-3 flex-col justify-center items-center gap-1">
                                <p className="text-center w-[25rem] text-[15.5px]">Cashback de 1% em todas as compras</p>
                                <p className="text-center w-[25rem] text-[15.5px]">Seguro de viagem incluso</p>
                                <p className="text-center w-[25rem] text-[15.5px]">Acesso a salas VIP em aeroportos</p>
                            </div>
                        </div>

                        <div className="flex cursor-pointer flex-col hover:bg-[#FFDA25] transition-all group duration-300 hover:border-[#FFDA25] mx-auto px-15 justify-center items-center border-2 border-[#e0c01d] p-3 rounded-4xl">
                            <button className="cursor-pointer font-medium w-full group-hover:font-bold transition-all duration-300">Solicite Agora</button>
                        </div>
                    </div>

                    <div className="p-5 gap-10 flex flex-col justify-center py-4 px-10 lg:px-30 lg:hover:px-20 transition-all duration-300">
                        <div className="border-2 cursor-pointer border-[#eeeeee] hover:border-purple-600 flex justify-center items-center hover:bg-neutral-100 group bg-white transition-all duration-300 rounded-lg">
                            <Image 
                                src={"/master.png"}
                                alt=""
                                width={200}
                                height={200}
                                quality={100}
                                className="group-hover:scale-115 transition-all duration-300 group-hover:drop-shadow-md group-hover:-translate-y-10 "
                            />
                            

                        </div>

                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h1 className="text-[24px] font-semibold text-black border-b-2 pb-3 flex justify-center w-[13rem] border-b-[#d4d4d4]">Cartão Master</h1>
                            <div className="flex mt-3 flex-col gap-1 justify-center items-center">
                                <p className="text-center w-[20rem] text-[15.3px]">Cashback de 2% em compras nacionais e internacionais</p>
                                <p className="text-center w-[25rem] text-[15.5px]">Seguro de viagem incluso</p>
                                <p className="text-center w-[25rem] text-[15.5px]">Acesso a salas VIP em aeroportos</p>
                            </div>
                        </div>

                        <div className="flex cursor-pointer flex-col hover:bg-purple-600 group transition-all duration-300 hover:border-purple-600 mx-auto px-15 justify-center items-center border-2 border-purple-600 p-3 rounded-4xl">
                            <button className="cursor-pointer font-medium group-hover:text-white group-hover:font-bold transition-all duration-300 w-full">Solicite Agora</button>
                        </div>
                    </div>

                    <div className="p-5 gap-10 flex flex-col justify-center py-4 px-10 lg:px-30 lg:hover:px-20 transition-all duration-300">
                        <div className="border-2 cursor-pointer border-[#eeeeee] hover:border-black flex justify-center items-center hover:bg-neutral-100 group bg-white transition-all duration-300 rounded-lg">
                            <Image 
                                src={"/blackcard.png"}
                                alt=""
                                width={200}
                                height={200}
                                quality={100}
                                className="group-hover:scale-115 transition-all duration-300 group-hover:drop-shadow-md group-hover:-translate-y-10 group-hover:rotate-6"
                            />

                        </div>

                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h1 className="text-[24px] font-semibold text-black border-b-2 pb-3 flex justify-center w-[13rem] border-b-[#d4d4d4]">Cartão Black</h1>
                            <div className="flex mt-3 flex-col gap-1 justify-center items-center">
                                <p className="text-center w-[20rem] text-[15px]">Cashback de 3% em todas as compras</p>
                                <p className="text-center w-[25rem] text-[15px]">Acesso ilimitado a salas VIP em aeroportos</p>
                                <p className="text-center w-[25rem] text-[15px]">Concierge 24 horas para serviços exclusivos</p>
                            </div>
                        </div>

                        <div className="flex cursor-pointer flex-col hover:bg-neutral-900 group transition-all duration-300 hover:border-neutral-900 mx-auto px-15 justify-center items-center border-2 border-neutral-900 p-3 rounded-4xl">
                            <button className="cursor-pointer font-medium group-hover:text-white group-hover:font-bold transition-all duration-300 w-full">Solicite Agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}