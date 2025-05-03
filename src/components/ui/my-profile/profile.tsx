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

        <div className="w-full flex flex-col pb-8 md:pb-0 justify-start items-start px-4 md:px-0">
            
            <div className="w-full hidden md:flex">
                <AppDownloadScreen title="ACESSE PELO CELULAR" body="Essa página só está disponível em dispositivos móveis" />
            </div>

            <div onClick={handleBack} className="mt-5 md:hidden flex justify-start items-center gap-3 self-start">
                <div className="border-2 border-gray-900 w-12 h-12 flex justify-center items-center rounded-full">
                    <FontAwesomeIcon icon={faArrowLeft} className="size-5" />
                </div>
                <p className="text-gray-900 font-semibold">Voltar</p>
            </div>
            
            <div className="flex md:hidden items-center mt-0 gap-3 self-start">
                <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
                    <img src={user.avatar} alt=""
                    className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="flex gap-3 flex-col items-start pt-7">
                    <div>
                        <p id="matter" className="font-semibold text-gray-900 text-xl truncate w-50">{user.name}</p>
                        <p id="matter" className="font-medium text-gray-900 text-lg opacity-75">{user.slug}</p>
                    </div>
                    
                    <div className="pt-1 flex items-center gap-7">
                        <div className="flex flex-col justify-center items-center leading-6">
                            <p className="font-semibold text-[17px]">{user.followers}</p>
                            <p id="matter" className="font-medium text-[16px] opacity-70">Seguidores</p>
                        </div>

                        <div className="flex flex-col justify-center items-center leading-6">
                            <p className="font-semibold text-[17px]">{user.following}</p>
                            <p id="matter" className="font-medium text-[16px] opacity-70">Seguindo</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}