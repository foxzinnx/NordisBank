export const MobileNav = () => {
    return(
        <div className="sticky bottom-0 bg-white w-full rounded-3xl [box-shadow:0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)] flex items-center h-18 left-0 right-0">
            <div className="w-full flex gap-3 justify-evenly px-3 items-center">

                <div className="cursor-pointer">
                    <img src="/icons/home-icon.png" alt="" className="w-10"/>
                </div>
                
                <div className="cursor-pointer">
                    <img src="/icons/card-icon.png" alt="" className="w-9 opacity-50"/>
                </div>

                <div className="cursor-pointer">
                    <img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" alt="" className="w-[25px] opacity-50" />
                </div>

                <div className="cursor-pointer"> 
                    <img src="https://www.iconpacks.net/icons/1/free-chart-icon-646-thumb.png" alt="" className="w-8 opacity-50" />
                </div>

                <div className="cursor-pointer">
                    <img src="/icons/chat-icon.png" alt="" className="w-9 opacity-50" />
                </div>

                <div className="cursor-pointer">
                    <img src="/icons/profile-icon.png" alt="" className="w-9 opacity-50" />
                </div>
            </div>
        </div>
    );
}