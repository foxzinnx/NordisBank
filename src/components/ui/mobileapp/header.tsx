import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
    return(
        <header className="visible md:hidden">
            <div className="flex justify-between items-center p-5 w-full">
                <div className="flex items-center gap-3">
                    <div className="w-[65px] h-[65px] overflow-hidden rounded-full">
                        <img src="https://st4.depositphotos.com/13318524/30649/i/450/depositphotos_306490252-stock-photo-close-headshot-young-caucasian-man.jpg" alt=""
                        className="w-full h-full object-cover" 
                        />
                    </div>
                    <div className="flex flex-col items-start leading-4 pt-1">
                        <p className="font-medium opacity-40">Bom dia</p>
                        <p className="font-semibold text-lg">BRYAN G.</p>
                    </div>
                </div>

                <div>
                    <FontAwesomeIcon icon={faBars} className="size-5" />
                </div>
            </div>
        </header>
    );
}