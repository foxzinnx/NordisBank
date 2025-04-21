import { Manutencao } from "@/components/ui/manutencao";
import { Balance } from "@/components/ui/mobileapp/balance";
import { Card } from "@/components/ui/mobileapp/card";
import { Header } from "@/components/ui/mobileapp/header";
import { Screen } from "@/components/ui/screen";
import Image from "next/image";

export default function Page() {
    
    return(
        <div className="min-h-screen">
            <div className="hidden md:block">
                <Manutencao />
            </div>
            
            <div className="block md:hidden">
                <Header />
                <Balance />
                <Card />
            </div>
        </div>
    );
}