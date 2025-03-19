import Image from "next/image";
import "../../app/li.css";

export const Card = () => {
  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row min-h-[40rem] bg-white p-8 md:p-12 justify-between items-center shadow-sm">
      <div className="max-w-[100rem] pl-0 md:pl-0 lg:pl-10 flex-col lg:flex-row flex justify-between items-center mx-auto py-20 w-full">
        <div className="px-2 gap-3 text-center lg:text-start md:px-8 flex flex-col justify-center items-start lg:w-[60rem] mb-8 lg:mb-0 w-full">
            <h1 id="titulo" className="text-[#191C1F] text-3xl md:text-4xl lg:text-6xl font-bold" data-aos="fade-right" data-aos-duration="900">
            <span className="text-blue-600">NordisBank Card</span> — Seu Estilo, Sua Liberdade Financeira
            </h1>
            <div className="w-32 mx-auto lg:mx-0 h-1 bg-blue-600 my-4" data-aos="fade-right" data-aos-duration="950"></div>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed" data-aos="fade-right" data-aos-duration="1000">
            Descubra o poder da <strong>exclusividade</strong> com o NordisBank Card. 
            Desfrute de vantagens premium como <span className="text-blue-600 font-semibold">zero anuidade</span>, 
            até <span className="text-blue-600 font-semibold">3% de cashback</span> em todas as compras e 
            tecnologia contactless de última geração. Gerencie seus gastos em tempo real pelo app e 
            transforme sua experiência financeira com um cartão que reflete seu estilo de vida.
            </p>
            <button className="mt-6 cursor-pointer hidden lg:block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all" data-aos="fade-right" data-aos-duration="1200">
            Solicite Agora
            </button>
        </div>
            
        <div className="w-full flex-col gap-5 lg:w-[40rem] flex justify-center items-center" data-aos="fade-right">
            <div className="relative cursor-pointer hover:rotate-12 transform hover:scale-105 transition-transform duration-300">
            <Image
                src="/cartão2.png"
                alt="NordisBank Card Premium"
                height={350}
                width={350}
                quality={100}
                className="drop-shadow-2xl max-w-[15rem] lg:max-w-[18rem]"
            />
            <div className="absolute -z-10 bg-blue-400 opacity-20 blur-3xl w-64 h-64 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <button className="mt-6 cursor-pointer block lg:hidden bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all">
            Solicite Agora
            </button>
        </div>
      </div>
    </div>
  );
};