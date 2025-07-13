import BitcoinUniverseGuide from '@/components/BitcoinUniverseGuide';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Gem, Bitcoin } from 'lucide-react';

const otherGuides = [
  {
    title: "Introducción a DeFi (Finanzas Descentralizadas)",
    content: "DeFi es un sistema financiero alternativo construido sobre blockchains. Permite prestar, pedir prestado, y ganar intereses con tus criptomonedas sin intermediarios, a través de 'contratos inteligentes'.",
  },
  {
    title: "Guía sobre Staking",
    content: "El staking es el proceso de bloquear tus criptomonedas para ayudar a mantener la seguridad y las operaciones de una red blockchain. A cambio, recibes recompensas, similar a ganar intereses en una cuenta de ahorros.",
  },
];

export default function EducationPage() {
    return (
        <div className="space-y-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold font-headline mb-2">Alpaka Educa</h1>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Una base de conocimiento completa para navegar el ecosistema cripto con confianza y seguridad. Empieza tu viaje hacia la soberanía financiera aquí.
                </p>
            </div>

            {/* Curso Principal: El Universo Bitcoin */}
            <BitcoinUniverseGuide />

            <div className="border-t pt-12">
                <h2 className="font-headline text-2xl font-semibold flex items-center gap-2 mb-4"><Gem className="text-primary h-6 w-6"/> Guías Adicionales para Exploradores</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    {otherGuides.map((guide, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle className="text-xl">{guide.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{guide.content}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}