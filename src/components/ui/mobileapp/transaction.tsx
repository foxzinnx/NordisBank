
export const Transaction = () => {
    return(
        <div className="w-full flex justify-start bg-gray-200/30 shadow-sm rounded-xl items-start">
            <div className="w-full flex justify-between items-center p-3">
              <div className="flex justify-start items-start">
                <div className="overflow-hidden w-[3.5rem] h-[3.5rem] bg-white rounded-full relative">
                    <img src="https://venturebeat.com/wp-content/uploads/2014/07/airbnb-logo-red.jpg" alt="" className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col items-start leading-[25px] pt-1 pl-3">
                    <p id="matter" className="font-medium text-[19px] w-[8rem] truncate">Alan Dyogo</p>
                    <p id="matter" className="opacity-60">29 de Fev</p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p id="matter" className="text-red-500 font-medium text-[16px]">R$ -250,00</p>
                <p id="matter" className="opacity-50">22:16</p>
              </div>
            </div>
            
        </div>
    );
}