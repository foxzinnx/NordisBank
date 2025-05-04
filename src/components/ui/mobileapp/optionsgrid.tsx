import Image from "next/image";

export const OptionsGrid = () => {
    return(
        <div className="w-full flex justify-center items-center mt-5 px-4">
            <div className="w-full grid grid-cols-3 gap-5">
                <div className="flex gap-1 cursor-pointer hover:bg-gray-100 flex-col border-2 border-gray-900/40 p-3 rounded-xl w-2/2 justify-center items-center">
                    <Image 
                        src={"/pix-icon.png"}
                        alt=""
                        width={45}
                        height={45}
                        className=""
                    />
                    <p id="matter" className="font-medium">Pix</p>
                </div>

                <div className="flex gap-1 flex-col cursor-pointer hover:bg-gray-100 border-2 border-gray-900/40 p-3 rounded-xl w-2/2 justify-center items-center">
                    <Image 
                        src={"/icons/card-icon.png"}
                        alt=""
                        width={45}
                        height={45}
                        className=""
                    />
                    <p id="matter" className="font-medium">Cartão</p>
                </div>

                <div className="flex gap-1 flex-col cursor-pointer hover:bg-gray-100 border-2 border-gray-900/40 p-3 rounded-xl w-2/2 justify-center items-center">
                    <Image 
                        src={"/seta-icon.png"}
                        alt=""
                        width={45}
                        height={45}
                        className=""
                    />
                    <p id="matter" className="font-medium">Investir</p>
                </div>
            </div>
        </div>
    );
}