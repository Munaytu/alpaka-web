import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Gem } from "lucide-react";

const beginnerGuides = [
  {
    title: "¿Qué es Bitcoin?",
    content: "Bitcoin es la primera criptomoneda descentralizada. Es como oro digital que puedes enviar a través de internet sin necesidad de un banco. Su principal valor es ser resistente a la censura y a la inflación controlada por gobiernos.",
  },
  {
    title: "¿Qué es una wallet?",
    content: "Una wallet o billetera de criptomonedas es una aplicación o dispositivo que te permite guardar y gestionar tus activos digitales. Tú y solo tú controlas los fondos si tienes las 'llaves privadas'. No es tu llave, no es tu cripto.",
  },
  {
    title: "¿Cómo comprar tu primer criptoactivo en Bolivia?",
    content: "La forma más común es a través de plataformas P2P (persona a persona) como Binance P2P. Compras directamente a otro usuario boliviano usando transferencia bancaria, Tigo Money, etc. Alpaka Hub te ayuda a encontrar los mejores precios.",
  },
  {
    title: "¿Cómo evitar estafas?",
    content: "Nunca compartas tus llaves privadas o frases de recuperación. Desconfía de promesas de ganancias garantizadas y rápidas. No hagas clic en enlaces sospechosos. Utiliza siempre la autenticación de dos factores (2FA).",
  },
];

const advancedGuides = [
  {
    title: "Introducción a DeFi (Finanzas Descentralizadas)",
    content: "DeFi es un sistema financiero alternativo construido sobre blockchains. Permite prestar, pedir prestado, y ganar intereses con tus criptomonedas sin intermediarios, a través de 'contratos inteligentes'.",
  },
  {
    title: "Guía sobre Staking",
    content: "El staking es el proceso de bloquear tus criptomonedas para ayudar a mantener la seguridad y las operaciones de una red blockchain. A cambio, recibes recompensas, similar a ganar intereses en una cuenta de ahorros.",
  },
];


export default function EducationalGuides() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="font-headline text-2xl font-semibold flex items-center gap-2 mb-4"><BookOpen className="text-primary h-6 w-6"/> Para Principiantes</h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
            {beginnerGuides.map((guide, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border bg-secondary/50 rounded-md px-4">
                <AccordionTrigger className="text-left hover:no-underline">{guide.title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                {guide.content}
                </AccordionContent>
            </AccordionItem>
            ))}
        </Accordion>
      </div>
      
      <div>
        <h2 className="font-headline text-2xl font-semibold flex items-center gap-2 mb-4"><Gem className="text-primary h-6 w-6"/> Para Avanzados</h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
            {advancedGuides.map((guide, index) => (
            <AccordionItem value={`item-adv-${index}`} key={index} className="border bg-secondary/50 rounded-md px-4">
                <AccordionTrigger className="text-left hover:no-underline">{guide.title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                {guide.content}
                </AccordionContent>
            </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
