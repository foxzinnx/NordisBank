import { Manutencao } from "@/components/ui/manutencao";
import { Balance } from "@/components/ui/mobileapp/balance";
import { Header } from "@/components/ui/mobileapp/header";

export default function Page() {
    
    return(
        <div className="min-h-screen">
            <div className="hidden md:block">
                <Manutencao />
            </div>
            <div className="block md:hidden">
                <Header />
                <Balance />
            </div>
        </div>
    );
}