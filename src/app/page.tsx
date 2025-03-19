import { Card } from "@/components/ui/card";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Cartões } from "@/components/ui/cartões";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Card />
      <Cartões />
    </div>
  );
}
