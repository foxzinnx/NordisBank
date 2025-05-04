"use client"
import { user } from "@/data/user";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { AppDownloadScreen } from "../appdownloadscreen";

export const Profile = () => {

    const router = useRouter();

    const handleBack = () => {
        router.push('/beta/app');
    }

    return(

        <div className="w-full flex flex-col pb-8 border-b-2 border-b-gray-300 md:pb-0 justify-center items-center px-4 md:px-0">
            
            <div className="w-full hidden md:flex">
                <AppDownloadScreen title="ACESSE PELO CELULAR" body="Essa página só está disponível em dispositivos móveis" />
            </div>

            <div onClick={handleBack} className="mt-4 cursor-pointer md:hidden flex justify-start items-center gap-3 self-start">
                <div className="border-2 border-gray-900 w-12 h-12 flex group justify-center hover:bg-gray-900 transition-all duration-300 items-center rounded-full">
                    <FontAwesomeIcon icon={faArrowLeft} className="size-5 group-hover:text-white transition-all duration-300" />
                </div>
                <p className="text-gray-900 font-semibold">Voltar</p>
            </div>
            
            <div className="flex flex-col md:hidden items-center mt-5 gap-3 self-center">
                <div className="w-[130px] h-[130px] border-3 border-gray-400 overflow-hidden rounded-full">
                    <img src={user.avatar} alt=""
                    className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="flex gap-3 flex-col items-center pt-4">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1">
                            <p id="matter" className="font-semibold text-gray-900 text-2xl select-none">{user.name}</p>
                            {user.verified && (
                                <img src="https://static-00.iconduck.com/assets.00/verify-icon-512x512-j1zk7t41.png" alt="Verificado" width={19} />
                            )}
                        </div>
                        
                        <p id="matter" className="font-medium text-gray-900 text-xl opacity-75 select-none">{user.slug}</p>
                    </div>
                    
                    <div className="pt-3 flex items-center gap-10">
                        <div className="flex flex-col justify-center items-center leading-6">
                            <p className="font-semibold text-[18px]">{user.followers}</p>
                            <p id="matter" className="font-medium text-[17px] opacity-70">Seguidores</p>
                        </div>

                        <div className="flex flex-col justify-center items-center leading-6">
                            <p className="font-semibold text-[18px]">{user.following}</p>
                            <p id="matter" className="font-medium text-[17px] opacity-70">Seguindo</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}