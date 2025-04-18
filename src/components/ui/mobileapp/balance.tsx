import { user } from "@/data/user";

export const Balance = () => {
    return(
        <div className="flex justify-start items-start px-5 mt-2">
            <div className="flex flex-col leading-10">
                <p id="matter" className="text-[20px] font-medium opacity-100">Saldo disponível</p>
                <h1 id="matter" className="text-[44px] text-gray-900 font-semibold truncate w-80"><span id="matter" className="opacity-50 font-medium">R$</span> {user.balance}</h1>
                <p id="matter" className="pt-1 opacity-100 text-gray-500 text-[15px] font-medium">Ultima atualização há 10 dias</p>
            </div>
        </div>
    );
}