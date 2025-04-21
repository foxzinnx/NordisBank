import { card } from "@/data/card";
import { user } from "@/data/user";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Card = () => {
    return(
        <section className="flex justify-center flex-col gap-3 items-start px-5 mt-10">
            <h1 id="matter" className="text-[19px] font-semibold">Meu cartão</h1>

            {/* Cartão */}

            <div className="border-2 border-gray-900 w-full p-5 rounded-xl">
                {/* Saldo e logo */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-start">
                        <p id="matter" className="font-semibold text-[16px] text-gray-900 opacity-70">Saldo do cartão</p>
                        <h1 id="matter" className="font-semibold text-gray-900 text-2xl"><span>R$</span> {user.balance}</h1>
                    </div>
                    <div>
                        <Image 
                            src={"/letter-black.png"}
                            alt=""
                            width={100}
                            height={100}
                            className="brightness-0"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-start gap-1 mt-6">
                    <h1 id="matter" className="font-semibold text-md opacity-70">Cartão digital</h1>
                    <p id="matter" className="font-semibold text-lg">{card.cardNumber && card.cardNumber.replace(/\d(?=.{0,14}\d{4}$)/g, '*')}</p>
                </div>
            </div>

            <div className="flex justify-between mt-2 items-center gap-2 px-2 w-full">
                <div className="w-1/2 cursor-pointer hover:bg-gray-100 transition-all duration-500 group flex justify-center items-center border-2 p-3 gap-2 rounded-lg border-gray-900">
                    <FontAwesomeIcon icon={faPlus} className="size-5 group-hover:-translate-x-1 transition-all duration-500" />
                    <span id="matter" className="font-semibold">Depositar</span>
                </div>

                <div className="w-1/2 flex group cursor-pointer hover:bg-gray-100 transition-all duration-500 justify-center items-center border-2 p-3 gap-2 rounded-lg border-gray-900">
                    <img src="https://cdn-icons-png.flaticon.com/512/2879/2879357.png" alt="" width={18} className="group-hover:-translate-x-1 group-hover:rotate-180 transition-transform duration-500" />
                    <span id="matter" className="font-semibold">Transferir</span>
                </div>
            </div>
        </section>
    );
}