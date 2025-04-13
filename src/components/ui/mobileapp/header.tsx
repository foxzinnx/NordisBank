import { user } from "@/data/user";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
    return(
        <header className="">
            <div className="flex justify-between items-center p-5 w-full">
                <div className="flex items-center gap-3">
                    <div className="w-[65px] h-[65px] overflow-hidden rounded-full">
                        <img src={user.avatar} alt=""
                        className="w-full h-full object-cover" 
                        />
                    </div>
                    <div className="flex flex-col items-start leading-4 pt-1">
                        <p className="font-medium opacity-40">Bom dia</p>
                        <p className="font-semibold text-lg truncate w-30">{user.name.split(' ')[0]} {user.name.split(' ')[1]?.charAt(0)}.</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="border border-slate-300 p-3 rounded-full">
                        <FontAwesomeIcon icon={faBell} className="size-6 text-gray-900" />
                    </div>
                    <FontAwesomeIcon icon={faBars} className="size-6 text-gray-900" />
                </div>
            </div>
        </header>
    );
}