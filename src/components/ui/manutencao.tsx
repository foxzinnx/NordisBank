"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Manutencao = () => {
    const router = useRouter();
    
    const handleHome = () => {
        router.push("/");
    }

    return(
        <div className="bg-white min-h-screen flex flex-col justify-center items-center">
            <Image 
                src={"/Maintenance-pana.png"}
                alt=""
                height={500}
                width={500}
            />
            <div className="flex flex-col items-center gap-1">
                <h1 className="text-black text-[20px] font-medium">App em construção..</h1>
                <h1 className="text-black text-[17px] opacity-80 font-medium">Enquanto isso, aproveite nosso site</h1>
            </div>
            <button onClick={handleHome} className="bg-gray-900 text-white mt-5 h-10 px-4 text-[15px] rounded-xl font-semibold cursor-pointer transition-all duration-300 hover:bg-transparent hover:border hover:border-black hover:text-black">Página principal</button>
        </div>
    );
}