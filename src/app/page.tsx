import { Beneficios } from "@/components/ui/beneficios";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Patrocinadores } from "@/components/ui/patrocinadores";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Card />
      <Patrocinadores />
      <Beneficios />
    </div>
  );
}
