import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Binance",
    description: "El exchange más grande del mundo, con un mercado P2P muy líquido para comprar y vender cripto con bolivianos (BOB).",
    tags: ["Exchange", "P2P", "Wallet"],
    url: "https://www.binance.com/",
    verified: true,
  },
  {
    name: "Bybit",
    description: "Una alternativa popular a Binance, también con un mercado P2P funcional en Bolivia. Suele tener comisiones competitivas.",
    tags: ["Exchange", "P2P", "Derivados"],
    url: "https://www.bybit.com/",
    verified: true,
  },
  {
    name: "Trezor",
    description: "Una billetera de hardware (hardware wallet) para máxima seguridad. Permite guardar tus criptomonedas fuera de línea.",
    tags: ["Hardware Wallet", "Seguridad"],
    url: "https://trezor.io/",
    verified: true,
  },
    {
    name: "Ledger",
    description: "Otra marca líder de hardware wallets. Competidor directo de Trezor, ofrece una alta seguridad para tus activos.",
    tags: ["Hardware Wallet", "Seguridad"],
    url: "https://www.ledger.com/",
    verified: true,
  },
];

export default function ServiceDirectory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => {
        const domain = new URL(service.url).hostname;
        const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}`;

        return (
            <Card key={service.name} className="flex flex-col">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <Image src={logoUrl} alt={`${service.name} logo`} width={48} height={48} className="rounded-lg" />
                    {service.verified && (
                        <Badge variant="outline" className="border-primary/50 text-primary">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Verificado
                        </Badge>
                    )}
                </div>
                <CardTitle className="pt-4">{service.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardDescription>{service.description}</CardDescription>
                <div className="flex flex-wrap gap-2 pt-4">
                {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button asChild variant="outline" className="w-full">
                <Link href={service.url} target="_blank" rel="noopener noreferrer">
                    Visitar Sitio <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
                </Button>
            </CardFooter>
            </Card>
        );
    })}
    </div>
  );
}