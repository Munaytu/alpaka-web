
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HistoryOfBitcoin: React.FC = () => {
  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">La Saga de Bitcoin: Historia y Hitos Clave</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">

          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold">2.1 El Origen del Mito: Satoshi Nakamoto</AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-700 rounded-md">
              <p className="mb-4">
                La historia de Bitcoin comienza con un misterio: su creador, conocido solo como Satoshi Nakamoto. El 31 de octubre de 2008, en medio de la crisis financiera global, Nakamoto publicó el whitepaper "Bitcoin: A Peer-to-Peer Electronic Cash System", sentando las bases para una revolución financiera.
              </p>
              <p>
                La identidad de Satoshi sigue siendo desconocida. Al permanecer en el anonimato y desaparecer en 2011, aseguró que Bitcoin no tuviera un líder, reforzando su naturaleza descentralizada.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold">2.2 De la Teoría a la Práctica: Los Primeros Días</AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-700 rounded-md">
              <ul className="list-disc list-inside space-y-3">
                <li><strong>3 de enero de 2009: El Bloque Génesis.</strong> Satoshi mina el primer bloque, incluyendo el titular "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks", una crítica directa al sistema financiero tradicional.</li>
                <li><strong>12 de enero de 2009: La Primera Transacción.</strong> Satoshi envía 10 bitcoins al criptógrafo Hal Finney, demostrando que la red era funcional.</li>
                <li><strong>22 de mayo de 2010: El "Bitcoin Pizza Day".</strong> Se realiza la primera compra comercial con Bitcoin: 10,000 BTC por dos pizzas. Este día se celebra anualmente y marca el momento en que Bitcoin adquirió un valor en el mundo real.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold">2.4 Estudio de Caso - El Colapso de Mt. Gox</AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-700 rounded-md">
              <p className="mb-4">
                En 2014, Mt. Gox, el mayor exchange de Bitcoin del mundo, colapsó tras el robo de cientos de miles de bitcoins. El evento provocó un desplome del precio y una crisis de confianza.
              </p>
              <p className="font-bold">
                La lección más importante de Mt. Gox fue: "Not your keys, not your coins" (No son tus llaves, no son tus monedas). Enseñó a los usuarios la importancia de la autocustodia y los riesgos de confiar sus fondos a terceros.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold">2.5 Estudio de Caso - El Experimento de El Salvador</AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-700 rounded-md">
              <p className="mb-4">
                En 2021, El Salvador se convirtió en el primer país en adoptar Bitcoin como moneda de curso legal. El gobierno lanzó la billetera "Chivo" y ofreció bonos para incentivar su uso.
              </p>
              <p>
                Sin embargo, la adopción ha sido limitada debido a problemas técnicos, la volatilidad del precio y la preferencia de la población por el dólar. El caso de El Salvador es un laboratorio en tiempo real que muestra tanto las promesas como los desafíos de la adopción de Bitcoin a nivel nacional.
              </p>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </CardContent>
    </Card>
  );
};

export default HistoryOfBitcoin;
