"use client"
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const handleHome = () => {
        router.push("/");
    }

    return(
        <div className="bg-white min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-black text-[18px]">App em construção...</h1>
            <h1 className="text-black text-[16px]">Enquanto isso, aproveite nosso site</h1>
            <button onClick={handleHome} className="bg-black text-white mt-5 h-10 px-4 text-[15px] rounded-2xl font-semibold cursor-pointer transition-all duration-300 hover:bg-transparent hover:border hover:border-black hover:text-black">Página principal</button>
        </div>
    );
}