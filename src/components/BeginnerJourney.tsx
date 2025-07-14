'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BeginnerJourneyProps {
    onBack: () => void;
}

const journeySteps = [
    {
        title: "Paso 1: ¿Qué es el Dinero?",
        content: (
            <>
                <p className="text-muted-foreground">Una breve introducción animada que compara el dinero físico, el dinero bancario digital y presenta la idea de un nuevo tipo de dinero que no controla nadie.</p>
                <img src="/images/alpaca gestinando dinero.jpg" alt="Alpaca Gestinando Dinero" className="rounded-md mt-2" />
            </>
        )
    },
    {
        title: "Paso 2: Te Presentamos a Bitcoin, el Dinero de Internet.",
        content: (
            <>
                <p className="text-muted-foreground">Explicación fundamental de Bitcoin como un sistema P2P descentralizado, usando la analogía del correo electrónico con valor.</p>
                <img src="/images/alpaca difundiendo la palabra.jpg" alt="Alpaca Difundiendo la Palabra" className="rounded-md mt-2" />
            </>
        )
    },
    {
        title: "Paso 3: ¿Cómo Funciona? La Magia de la Blockchain.",
        content: (
            <>
                <p className="text-muted-foreground">Una explicación visual y animada de la blockchain como un libro de contabilidad público, inmutable y distribuido.</p>
                <img src="/images/alpaca aprendiendo de bitcoin.jpg" alt="Alpaca Aprendiendo de Bitcoin" className="rounded-md mt-2" />
            </>
        )
    },
    {
        title: "Paso 4: Tu Primera Billetera (¡de Prueba!).",
        content: (
            <>
                <p className="text-muted-foreground">Aquí se introducirá el Simulador de Wallet Interactivo. El usuario podrá crear una billetera de juguete, recibir "bitcoins de prueba" y hacer una transacción simulada. Esta experiencia práctica es clave para desmitificar el proceso y reducir el miedo.</p>
                <img src="/images/alpaca dan wallet a oveja.jpg" alt="Alpaca Dando Wallet a Oveja" className="rounded-md mt-2" />
            </>
        )
    },
    {
        title: "Paso 5: Los 10 Mandamientos de la Seguridad en Bitcoin.",
        content: (
            <>
                <p className="text-muted-foreground">Una lección crítica y visual sobre las reglas de oro de la seguridad: "Protegerás tu frase semilla sobre todas las cosas", "No confiarás en promesas de dinero fácil", etc.</p>
                <img src="/images/alpaca con ojo rojo.jpg" alt="Alpaca Con Ojo Rojo" className="rounded-md mt-2" />
            </>
        )
    },
    {
        title: "Paso 6: La Increíble Historia de las Pizzas de 10,000 Bitcoins.",
        content: (
            <>
                <p className="text-muted-foreground">Una narración en formato de cómic o video corto sobre el Bitcoin Pizza Day para ilustrar cómo Bitcoin adquirió valor en el mundo real.</p>
            </>
        )
    },
    {
        title: "Paso 7: ¿Por Qué Sube y Baja Tanto de Precio? Entendiendo la Volatilidad.",
        content: (
            <>
                <p className="text-muted-foreground">Una explicación sencilla sobre la oferta y la demanda, la especulación y por qué el precio de Bitcoin es tan volátil, utilizando gráficos simples y analogías.</p>
                <img src="/images/alpaca con moneda de bitcoin.png" alt="Alpaca Con Moneda de Bitcoin" className="rounded-md mt-2" />
            </>
        )
    },
    {
        title: "Paso 8: ¡Felicidades! Ya Sabes Más que el 99% de la Gente.",
        content: "Una página de finalización que celebra el progreso del usuario y le ofrece enlaces para profundizar en las secciones principales del sitio (Historia, Riesgos, Cultura, etc.), dándole el control para continuar su aprendizaje."
    }
];

export default function BeginnerJourney({ onBack }: BeginnerJourneyProps) {
    return (
        <div className="max-w-4xl mx-auto">
            <Button onClick={onBack} variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a todas las guías
            </Button>
            <div className="space-y-6">
                {journeySteps.map((step, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {step.content}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
