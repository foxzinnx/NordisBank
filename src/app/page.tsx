import { Card } from "@/components/ui/card";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Cartões } from "@/components/ui/cartões";
import { Pagamentos } from "@/components/ui/pagamentos";
import { Notification } from "@/components/ui/notification";
import { Informacoes } from "@/components/ui/informacoes";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Card />
      <Cartões />
      <Pagamentos />
      <Notification />
      <Informacoes />
      <Footer />
    </div>
  );
}
