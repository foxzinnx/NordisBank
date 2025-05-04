"use client"
import { user } from "@/data/user";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
    const [greetings, setGreetings] = useState('Bom dia');

    useEffect(() => {
        const hour = new Date().getHours();

        if(hour >= 6 && hour < 12){
            setGreetings('Bom dia');
        } else if(hour >= 12 && hour < 18){
            setGreetings('Boa tarde');
        } else {
            setGreetings('Boa noite');
        }
    }, [])

    const router = useRouter();

    const handleProfile = () => {
        router.push('/beta/app/profile');
    }

    return(
        <header className="">
            <div className="flex justify-between items-center p-5 w-full">
                <div className="flex items-center gap-3">
                    <div onClick={handleProfile} className="w-[65px] cursor-pointer h-[65px] overflow-hidden rounded-full">
                        <img src={user.avatar} alt=""
                        className="w-full h-full object-cover" 
                        />
                    </div>
                    <div className="flex flex-col items-start leading-4 gap-[6px] pt-1">
                        <p className="font-semibold text-gray-900 opacity-40">{greetings}</p>
                        <p className="font-semibold text-gray-900 text-[1.2rem] truncate w-30">{user.name.split(' ')[0]} {user.name.split(' ')[1]?.charAt(0)}.</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="border border-slate-300 p-3 rounded-full">
                        <FontAwesomeIcon icon={faBell} className="size-6 text-gray-900" />
                    </div>
                    <FontAwesomeIcon icon={faBars} className="size-6 text-lg text-gray-900" />
                </div>
            </div>
        </header>
    );
}