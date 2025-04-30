import { AppDownloadScreen } from "@/components/ui/appdownloadscreen";
import { Balance } from "@/components/ui/mobileapp/balance";
import { Card } from "@/components/ui/mobileapp/card";
import { Header } from "@/components/ui/mobileapp/header";
import { MobileNav } from "@/components/ui/mobileapp/mobilenav";
import { OptionsGrid } from "@/components/ui/mobileapp/optionsgrid";
import { Transactions } from "@/components/ui/mobileapp/transactions";

export default function Page() {
    
    return(
        <div className="min-h-screen">
            <div className="hidden md:block">
                <AppDownloadScreen />
            </div>
            
            <div className="block md:hidden">
                <Header />
                <Balance />
                <OptionsGrid />
                <Card />
                <Transactions />
                {/* <MobileNav /> */}
            </div>
        </div>
    );
}