import { Transaction } from "./transaction";

export const Transactions = () => {
    return(
        <div className="flex flex-col justify-start items-start px-6 mt-10">
            <div className="w-full flex justify-between items-center">
                <h1 id="matter" className="font-medium text-lg">Ultimas Transações</h1>
                <p id="matter" className="font-medium border-b border-b-gray-900 opacity-60">Ver mais</p>
            </div>

            <div className="mt-5 w-full mb-5 space-y-4">
                <Transaction />
                <Transaction />
                <Transaction />
            </div>
        </div>
    );
}