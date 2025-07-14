
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const WhatIsBitcoin: React.FC = () => {
  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">¿Qué Es y Cómo Funciona Bitcoin?</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold">1.1 Desmitificando Bitcoin: El Dinero de Internet</AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-700 rounded-md">
              <p className="mb-4">
                Bitcoin es, en su forma más simple, una moneda digital, a menudo descrita como el "dinero de internet". A diferencia de las monedas tradicionales como el euro o el dólar, Bitcoin no existe en forma física; es una divisa que vive exclusivamente en el mundo digital, soportada por una tecnología llamada blockchain. Su propósito fundamental es servir como un medio de intercambio, permitiendo la compra y venta de productos y servicios, o como una forma de inversión.
              </p>
              <p className="mb-4">
                La característica que define a Bitcoin es su naturaleza descentralizada. No es emitido ni controlado por ninguna autoridad central, como un banco o un gobierno. Las transacciones se realizan directamente entre usuarios (peer-to-peer), eliminando la necesidad de intermediarios.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold">1.2 El Corazón de la Revolución: La Tecnología Blockchain</AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-700 rounded-md">
              <p className="mb-4">
                La tecnología que hace posible a Bitcoin se llama blockchain, o cadena de bloques. Es un libro de contabilidad digital que registra todas las transacciones de Bitcoin. Sus propiedades clave son:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Descentralización:</strong> Miles de computadoras (nodos) en todo el mundo mantienen una copia del libro de contabilidad, eliminando un punto único de fallo.</li>
                <li><strong>Inmutabilidad:</strong> Las transacciones se agrupan en bloques enlazados criptográficamente. Una vez añadido, un bloque no se puede alterar.</li>
                <li><strong>Transparencia y Pseudonimato:</strong> Cualquiera puede ver las transacciones, pero las identidades de los participantes están protegidas detrás de direcciones alfanuméricas.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold">1.3 Creando Monedas Digitales: El Proceso de Minería</AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-700 rounded-md">
              <p className="mb-4">
                La minería es el proceso que crea nuevos bitcoins y asegura la red. Computadoras especializadas, llamadas "mineros", compiten para resolver un complejo acertijo matemático (Prueba de Trabajo o Proof-of-Work).
              </p>
              <p>
                El primer minero en resolver el acertijo añade el siguiente bloque de transacciones a la blockchain y es recompensado con bitcoins recién creados y las comisiones de las transacciones que incluye en el bloque. Este proceso es intencionadamente costoso para asegurar la red.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold">1.4 Tu Billetera Digital: Gestión y Seguridad</AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-700 rounded-md">
              <p className="mb-4">
                Una billetera de Bitcoin (wallet) no almacena tus bitcoins, sino las claves criptográficas que te dan acceso a ellos en la blockchain.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Clave Pública:</strong> Como tu número de cuenta bancaria. La compartes para recibir fondos.</li>
                <li><strong>Clave Privada:</strong> Tu contraseña secreta. Quien la posea, controla tus fondos. ¡Nunca la compartas!</li>
              </ul>
              <p className="font-bold">Frase Semilla (Seed Phrase):</p>
              <p>
                Al crear una billetera, se genera una lista de 12 o 24 palabras. Esta es tu copia de seguridad maestra. Guárdala en un lugar físico y seguro, offline. Perderla significa perder tus fondos para siempre.
              </p>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </CardContent>
    </Card>
  );
};

export default WhatIsBitcoin;
