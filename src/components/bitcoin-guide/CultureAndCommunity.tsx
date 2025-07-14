
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CultureAndCommunity: React.FC = () => {
  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Cultura y Comunidad: El Ecosistema Humano</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">

          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold">3.1 Las Voces de la Comunidad</AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-700 rounded-md">
              <p className="mb-4">
                El universo de Bitcoin está lleno de debates apasionados sobre su propósito y futuro. Conocer a sus figuras más influyentes ayuda a entender las diferentes corrientes de pensamiento:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Andreas M. Antonopoulos (El Filósofo Educador):</strong> Se enfoca en el "porqué" de Bitcoin: la soberanía individual, la resistencia a la censura y el poder que devuelve al individuo.</li>
                <li><strong>Vitalik Buterin (El Crítico Constructor):</strong> Cofundador de Ethereum, reconoce el valor de Bitcoin pero señala sus limitaciones, impulsando al ecosistema a innovar en escalabilidad y funcionalidad.</li>
                <li><strong>Jack Dorsey (El Pragmatista de la Adopción):</strong> Cofundador de Twitter, ve a Bitcoin como la moneda nativa de internet y trabaja para que sea una herramienta de pagos diarios accesible para todos.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold">3.2 Bitcoin como Fenómeno Cultural</AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-700 rounded-md">
              <p className="mb-2 font-bold">La Jerga de la Tribu:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>HODL:</strong> Mantener tus bitcoins a largo plazo, sin importar la volatilidad.</li>
                <li><strong>To the Moon:</strong> Expresión de optimismo sobre el aumento del precio.</li>
                <li><strong>FUD (Fear, Uncertainty, and Doubt):</strong> Miedo, incertidumbre y duda; usado para desestimar noticias negativas.</li>
                <li><strong>DYOR (Do Your Own Research):</strong> Haz tu propia investigación; un mantra sobre la responsabilidad personal.</li>
              </ul>
              <p className="mb-2 font-bold">Memes, Arte y Música:</p>
              <p>
                La cultura de Bitcoin es visual y se nutre de la cultura de internet. Los memes, el arte digital y la música son vehículos para expresar las emociones colectivas de la comunidad, desde la euforia de los mercados alcistas hasta la depresión de los bajistas.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold">3.3 El Espejo Crítico: Visiones Alternativas</AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-700 rounded-md">
              <p className="mb-4">
                Un recurso honesto debe presentar también las críticas fundamentadas a Bitcoin:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Crítica Económica:</strong> Su extrema volatilidad lo hace una pobre unidad de cuenta y una arriesgada reserva de valor a corto plazo, funcionando más como un activo especulativo.</li>
                <li><strong>Crítica Política y Social:</strong> Su naturaleza resistente a la censura es vista por los estados como una amenaza, y una herramienta para actividades ilícitas y evasión fiscal.</li>
                <li><strong>Crítica Medioambiental:</strong> El mecanismo de Prueba de Trabajo (Proof-of-Work) consume una cantidad masiva de energía, comparable a la de países enteros, con una huella de carbono significativa.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold">3.4 Más Allá de Bitcoin: Las Altcoins</AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-700 rounded-md">
              <p className="mb-4">
                Bitcoin es solo el comienzo. Miles de otras criptomonedas, conocidas como "altcoins", han surgido para abordar las limitaciones de Bitcoin o explorar nuevos casos de uso.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Ethereum (ETH):</strong> La más importante. Permite "contratos inteligentes" y aplicaciones descentralizadas (dApps), dando origen a las Finanzas Descentralizadas (DeFi) y los NFTs.</li>
                <li><strong>Litecoin (LTC):</strong> "La plata del oro de Bitcoin", diseñada para ser más rápida en las transacciones.</li>
                <li><strong>Monero (XMR):</strong> Enfocada en la privacidad, ocultando remitente, receptor y cantidad en las transacciones.</li>
                <li><strong>Stablecoins (USDT, USDC):</strong> Monedas vinculadas a activos estables como el dólar, para ofrecer los beneficios de la blockchain sin la volatilidad.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </CardContent>
    </Card>
  );
};

export default CultureAndCommunity;
