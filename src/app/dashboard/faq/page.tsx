"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  {
    question: "¿Qué es el dólar paralelo en Bolivia?",
    answer: "El dólar paralelo, también conocido como dólar blue o dólar informal, es el precio al que se negocia la divisa estadounidense fuera de los canales oficiales (bancos y casas de cambio autorizadas). Este precio suele ser diferente al tipo de cambio oficial y se forma por la oferta y demanda en el mercado informal.",
  },
  {
    question: "¿Por qué es importante monitorear el dólar paralelo?",
    answer: "Monitorear el dólar paralelo es crucial para entender el valor real de la moneda boliviana frente al dólar en el mercado informal. Afecta decisiones de ahorro, inversión y consumo, especialmente en un contexto de restricciones cambiarias o incertidumbre económica.",
  },
  {
    question: "¿Cómo se calcula el precio del dólar paralelo en esta plataforma?",
    answer: "Utilizamos datos de plataformas P2P (Peer-to-Peer) de criptomonedas, donde los usuarios intercambian USDT (Tether, una stablecoin anclada al dólar) por moneda local. El precio de USDT/BOB en estas plataformas es un indicador muy cercano al valor del dólar paralelo en el mercado informal boliviano.",
  },
  {
    question: "¿Es legal operar con el dólar paralelo?",
    answer: "La compra y venta de divisas fuera de los canales oficiales puede tener implicaciones legales y riesgos asociados. Esta plataforma solo provee información referencial y no promueve ni facilita operaciones ilegales. Siempre se recomienda operar a través de canales regulados.",
  },
  {
    question: "¿Qué es USDT y por qué se usa como referencia?",
    answer: "USDT (Tether) es una criptomoneda estable (stablecoin) diseñada para mantener un valor de 1 a 1 con el dólar estadounidense. Se utiliza como referencia porque es ampliamente aceptada en plataformas P2P y su precio en el mercado informal refleja de cerca el valor del dólar físico, especialmente en países con controles cambiarios.",
  },
  {
    question: "¿Con qué frecuencia se actualizan los precios?",
    answer: "Los precios se actualizan en tiempo real, cada 30 segundos, para reflejar las fluctuaciones del mercado de la manera más precisa posible.",
  },
];

export default function FAQPage() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Preguntas Frecuentes (FAQ)</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
