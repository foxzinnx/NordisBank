import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Page() {
    return (
        <div className="w-full flex justify-between items-center">
            <div className="bg-white hidden lg:block w-1/2 max-h-screen overflow-hidden">
                <Image 
                    src="/homem.jpg"
                    alt="Descrição da imagem"
                    width={1900} // Largura original da imagem
                    height={1500} // Altura original da imagem
                    className="h-screen object-cover" // Isso garante que a imagem cubra o contêiner sem distorção
                />
            </div>

            <div className="w-full flex justify-center items-center lg:w-1/2 h-screen bg-[#FFFFFF]">
                <div className="flex flex-col gap-10 justify-center items-center">
                    <h1 className="font-semibold text-2xl">Acesse sua conta</h1>

                    <div className="">
                        <h1 className="font-medium">CPF</h1>
                        <div className="w-[25rem] h-10 border-b">
                            <input type="text" maxLength={22} className="w-full h-full font-medium outline-none rounded-md focus:bg-slate-50 px-2 transition-all duration-300"/>
                        </div>

                        <h1 className="font-medium mt-15">Senha</h1>
                        <div className="w-[25rem] h-10 border-b">
                            <input type="password" maxLength={22} className="w-full h-full font-medium outline-none rounded-md focus:bg-slate-50 px-2 transition-all duration-300"/>
                        </div>

                        <div className="mt-5 cursor-pointer">
                            <button className="text-[#000000] rounded-3xl hover:px-6 hover:bg-black hover:text-white hover:font-semibold transition-all duration-500 cursor-pointer hover:p-2 font-medium">Esqueci a senha</button>
                        </div>

                        <div className="flex items-center mt-10">
                            <button type="submit" className="text-[18px]">Acessar</button>
                            <FontAwesomeIcon icon={faArrowRight} className="size-5 text-black" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}