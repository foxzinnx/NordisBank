"use client"
import Image from "next/image";
import "../../app/font.css";
import { useRouter } from "next/navigation";

export const AppDownloadScreen = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push('/');
  }


  return (
    <div className="w-full flex md:justify-center lg:justify-between items-center h-screen"> {/* Defina uma altura para o contêiner pai */}
      <div className="w-1/2 h-full flex justify-center items-center overflow-hidden">
        {/* <div className="absolute top-7 left-8">
          <Image 
            src={"/letter-black.png"}
            alt=""
            width={125}
            height={125}
            className="brightness-0"
          />
        </div> */}
        <div className="flex flex-col items-center leading-16 text-center">
          <Image 
            src={"/gray-logo.png"}
            alt=""
            width={170}
            height={170}
            onClick={handleHome}
            className="mb-5 cursor-pointer"
          />
          <h1 id="aeonik" className="font-semibold text-[3rem] px-8 text-gray-900">EXPERIMENTE NOSSO APP</h1>
          <p id="matter" className="text-xl text-gray-900 px-10 mb-3 md:px-0 lg:px-10 font-medium">Tenha acesso a todas as funcionalidades na palma da sua mão</p>
          <div className="bg-gray-200 mt-6 p-4 rounded-xl">
            <Image 
              src={"/frame.png"}
              alt=""
              width={150}
              height={150}
            />
          </div>
          <p id="matter" className="text-gray-900 text-[16.5px] font-medium">Escaneie o QR-Code com a camera do seu celular</p>
        </div>
      </div>

      <div className="lg:w-1/2 md:w-full md:hidden lg:block h-full overflow-hidden relative">
        <Image 
          src="/mockup.jpg"
          alt="Descrição da imagem"
          layout="fill"
          objectFit="cover"
          quality={100}
          className=""
        />
      </div>
    </div>
  );
}