'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const journeySteps = [
    {
        title: "Paso 1: ¿Qué es el Dinero?",
        content: "Una breve introducción animada que compara el dinero físico, el dinero bancario digital y presenta la idea de un nuevo tipo de dinero que no controla nadie."
    },
    {
        title: "Paso 2: Te Presentamos a Bitcoin, el Dinero de Internet.",
        content: "Explicación fundamental de Bitcoin como un sistema P2P descentralizado, usando la analogía del correo electrónico con valor."
    },
    {
        title: "Paso 3: ¿Cómo Funciona? La Magia de la Blockchain.",
        content: "Una explicación visual y animada de la blockchain como un libro de contabilidad público, inmutable y distribuido."
    },
    {
        title: "Paso 4: Tu Primera Billetera (¡de Prueba!).",
        content: "Aquí se introducirá el Simulador de Wallet Interactivo. El usuario podrá crear una billetera de juguete, recibir \"bitcoins de prueba\" y hacer una transacción simulada. Esta experiencia práctica es clave para desmitificar el proceso y reducir el miedo."
    },
    {
        title: "Paso 5: Los 10 Mandamientos de la Seguridad en Bitcoin.",
        content: "Una lección crítica y visual sobre las reglas de oro de la seguridad: \"Protegerás tu frase semilla sobre todas las cosas\", \"No confiarás en promesas de dinero fácil\", etc."
    },
    {
        title: "Paso 6: La Increíble Historia de las Pizzas de 10,000 Bitcoins.",
        content: "Una narración en formato de cómic o video corto sobre el Bitcoin Pizza Day para ilustrar cómo Bitcoin adquirió valor en el mundo real."
    },
    {
        title: "Paso 7: ¿Por Qué Sube y Baja Tanto de Precio? Entendiendo la Volatilidad.",
        content: "Una explicación sencilla sobre la oferta y la demanda, la especulación y por qué el precio de Bitcoin es tan volátil, utilizando gráficos simples y analogías."
    },
    {
        title: "Paso 8: ¡Felicidades! Ya Sabes Más que el 99% de la Gente.",
        content: "Una página de finalización que celebra el progreso del usuario y le ofrece enlaces para profundizar en las secciones principales del sitio (Historia, Riesgos, Cultura, etc.), dándole el control para continuar su aprendizaje."
    }
];

export default function BeginnerJourney({ onBack }) {
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
                            <p className="text-muted-foreground">{step.content}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
