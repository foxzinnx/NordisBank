import { Home } from "@/components/home-mobile/home";
import { AppDownloadScreen } from "@/components/ui/appdownloadscreen";
import { Balance } from "@/components/ui/mobileapp/balance";
import { Card } from "@/components/ui/mobileapp/card";
import { Header } from "@/components/ui/mobileapp/header";
import { MobileNav } from "@/components/ui/mobileapp/mobilenav";
import { OptionsGrid } from "@/components/ui/mobileapp/optionsgrid";
import { Transactions } from "@/components/ui/mobileapp/transactions";

export const metadata = {
    title: 'NordisApp | Pagamentos Digitais',
    description: 'Pagamentos rápidos e seguros com NordisApp',
};

export default function Page() {


    return(
        <div className="min-h-screen">
        

            <div className="hidden md:block">
                <AppDownloadScreen title="EXPERIMENTE NOSSO APP" body="Tenha acesso a todas as funcionalidades na palma da sua mão" />
            </div>
            
            <div className="block md:hidden">
                <Home />
            </div>
        </div>
    );
}