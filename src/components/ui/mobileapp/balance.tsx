import { user } from "@/data/user";

export const Balance = () => {
    return(
        <div className="flex justify-start items-start px-5 mt-2">
            <div className="flex flex-col leading-10">
                <p id="matter" className="text-[22px] font-regular opacity-80">Saldo disponível</p>
                <h1 id="matter" className="text-[44px] font-semibold truncate w-80">R$ {user.balance}</h1>
            </div>
        </div>
    );
}