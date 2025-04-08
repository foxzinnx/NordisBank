import { faLock, faMobileScreen, faMoneyBillTransfer, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Informacoes = () => {
    return(
        <section className="w-full bg-white flex justify-center items-center py-10 pb-35">
            <div className="max-w-[1500px] w-full flex flex-col gap-10 justify-center items-center md:justify-start md:items-start px-8">
                <h1 className="font-semibold text-2xl text-gray-900">Mais informações</h1>
                <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-8 flex-wrap">
                    <div className="flex flex-col justify-start items-start gap-1 p-4 transition-all duration-500 border-2 border-neutral-300 cursor-pointer hover:border-gray-900 w-[16rem] rounded-2xl">
                        <FontAwesomeIcon icon={faMobileScreen} style={{ fontSize: "32px", paddingBottom: "15px"}} className="text-[#222222]" />
                        <h1 className="font-semibold text-[17px] text-gray-900">Aplicativo</h1>
                        <p className="text-[15px]">Baixe o app NordisBank e gerencie suas finanças</p>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-1 p-4  transition-all duration-500 border-2 border-neutral-300 cursor-pointer hover:border-gray-900 w-[16rem] rounded-2xl">
                        <FontAwesomeIcon icon={faReceipt} style={{ fontSize: "32px", paddingBottom: "15px"}} className="text-[#222222]" />
                        <h1 className="font-semibold text-[17px] text-gray-900">Comprovantes</h1>
                        <p className="text-[14.5px]">Solicite uma 2ª via de comprovantes de transações</p>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-1 p-4 transition-all duration-500 border-2 border-neutral-300 cursor-pointer hover:border-gray-900 w-[16rem] rounded-2xl">
                        <Image 
                            src={"/atendimento.png"}
                            alt=""
                            width={30}
                            height={30}
                            className="pb-3"
                        />
                        <h1 className="font-semibold text-[17px] text-gray-900">Atendimento</h1>
                        <p className="text-[14.5px]">Explore nossos canais de atendimento digital</p>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-1 p-4 transition-all duration-500 border-2 border-neutral-300 cursor-pointer hover:border-gray-900 w-[16rem] rounded-2xl">
                        <FontAwesomeIcon icon={faMoneyBillTransfer} style={{ fontSize: "32px", paddingBottom: "15px"}} className="text-[#222222]" />
                        <h1 className="font-semibold text-[17px] text-gray-900">Transferências</h1>
                        <p className="text-[14.5px]">Realize transferências rápidas e seguras</p>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-1 p-4 transition-all duration-500 border-2 border-neutral-300 cursor-pointer hover:border-gray-900 w-[16rem] rounded-2xl">
                        <FontAwesomeIcon icon={faLock} style={{ fontSize: "32px", paddingBottom: "15px"}} className="text-[#222222]" />
                        <h1 className="font-semibold text-[17px] text-gray-900">Segurança</h1>
                        <p className="text-[14.5px]">Saiba como proteger sua conta NordisBank</p>
                    </div>
                </div>
            </div>
        </section>
    );
}