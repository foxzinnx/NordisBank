import Image from "next/image";

export const Screen = () => {
    return(
        <div>
            <div className="w-full h-screen overflow-hidden hidden md:block relative">
                <Image
                    src={"/praia2.jpg"}
                    alt=""
                    layout="fill"
                    quality={100}
                    objectFit="cover"
                    className="absolute top-0 left-0"
                />

                <div className="absolute flex justify-center flex-col items-center top-32 p-5 left-40 h-[40rem] w-[30rem]">
                    <h1 className="font-bold text-3xl text-gray-900">VENHA SER NORDISBANK</h1>
                    <p className="text-lg">Baixe o app</p>
                </div>
            </div>
        </div>
    );
}