'use client';

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Lightbulb, Scroll, HandCoins, Shield, Users, Rocket } from "lucide-react";
import BeginnerJourney from "@/components/BeginnerJourney";

const fundamentals = [
    {
        title: "1.1. Desmitificando Bitcoin: El Dinero de Internet",
        content: "Bitcoin es una moneda digital, el 'dinero de internet'. A diferencia del dinero tradicional, es puramente digital y se basa en la tecnología blockchain. Su propósito es ser un medio de intercambio y una inversión, pero su característica clave es la descentralización: no lo controla ningún banco o gobierno. Las transacciones son directas entre usuarios (P2P), eliminando intermediarios. Aunque es la primera y más famosa, es solo una de miles de criptomonedas."
    },
    {
        title: "1.2. El Corazón de la Revolución: La Tecnología Blockchain",
        content: "La blockchain es el libro de contabilidad digital que registra todas las transacciones de Bitcoin. Es descentralizada (copias en miles de computadoras o nodos), inmutable (una vez que se añade un bloque, no se puede cambiar) y transparente pero pseudónima (las transacciones son públicas, pero las identidades no)."
    },
    {
        title: "1.3. Creando Monedas Digitales: El Proceso de Minería",
        content: "La minería es el proceso que crea nuevos bitcoins y asegura la red. Los 'mineros' usan computadoras potentes para resolver complejos acertijos matemáticos (Prueba de Trabajo o PoW). El primero en resolverlo añade un nuevo bloque de transacciones a la blockchain y es recompensado con nuevos bitcoins y comisiones. Este proceso es muy costoso en energía, lo que asegura la red pero también genera críticas por su impacto ambiental."
    },
    {
        title: "1.4. Tu Billetera Digital: Gestión y Seguridad de Criptoactivos",
        content: "Una billetera (wallet) no almacena tus bitcoins, sino las claves criptográficas que te dan acceso a ellos en la blockchain. La clave pública genera tu dirección (como un número de cuenta), y la clave privada es tu contraseña secreta para gastar tus fondos. Las 'hot wallets' (online) son convenientes pero vulnerables; las 'cold wallets' (offline) son más seguras. La 'frase semilla' (12-24 palabras) es la llave maestra para recuperar tu billetera; guárdala en un lugar seguro y secreto, ¡nunca online!"
    },
    {
        title: "1.5. Ventajas y Riesgos Inherentes: Una Visión Equilibrada",
        content: "Ventajas: Soberanía financiera, transacciones globales sin fronteras, escasez programada (solo 21 millones de BTC) como protección contra la inflación, y privacidad mejorada. Riesgos: Volatilidad extrema de precios, las transacciones son irreversibles (un error o estafa es final), riesgos de seguridad si no proteges tus claves, incertidumbre regulatoria y su asociación histórica con actividades ilícitas."
    }
];

const history = [
    {
        title: "2.1. El Origen del Mito: Satoshi Nakamoto y el Whitepaper",
        content: "La historia de Bitcoin comienza el 31 de octubre de 2008, cuando una persona (o grupo) bajo el seudónimo de Satoshi Nakamoto publicó el whitepaper 'Bitcoin: A Peer-to-Peer Electronic Cash System'. La genialidad de Nakamoto fue combinar tecnologías existentes para resolver el problema del 'doble gasto' sin una autoridad central. Su anonimato fue clave para la descentralización del proyecto."
    },
    {
        title: "2.2. De la Teoría a la Práctica: Los Primeros Días",
        content: "El 3 de enero de 2009, Nakamoto minó el 'Bloque Génesis', incluyendo un titular de periódico sobre los rescates bancarios, posicionando a Bitcoin como una alternativa. La primera transacción fue el 12 de enero de 2009 a Hal Finney. El 22 de mayo de 2010, se realizó la primera compra real: 10,000 bitcoins por dos pizzas, un evento ahora celebrado como el 'Bitcoin Pizza Day'."
    },
    {
        title: "2.3. Hitos de una Década: La Evolución de Bitcoin",
        content: "Hitos clave: 2011 (paridad con el dólar), 2012 (primer 'halving' que reduce la creación de nuevos BTC), 2014 (colapso de Mt. Gox), 2017 (boom de precios a casi 20,000 USD), 2021 (El Salvador lo adopta como moneda de curso legal), 2024 (aprobación de ETFs de Bitcoin en EE.UU., integrándolo en Wall Street)."
    },
    {
        title: "2.4. Estudio de Caso - El Colapso de Mt. Gox: La Primera Gran Crisis",
        content: "Mt. Gox, que llegó a procesar el 70% de las transacciones de Bitcoin, colapsó en 2014 tras el robo de cientos de miles de bitcoins. La crisis provocó un desplome del precio y enseñó a la comunidad una lección fundamental: 'Not your keys, not your coins' (No son tus llaves, no son tus monedas), impulsando la autocustodia como el estándar de seguridad."
    },
    {
        title: "2.5. Estudio de Caso - El Experimento de El Salvador: Soberanía o Fantasía",
        content: "En 2021, El Salvador se convirtió en el primer país en adoptar Bitcoin como moneda de curso legal. A pesar de los esfuerzos del gobierno con la 'Chivo Wallet', la adopción ha sido muy limitada debido a problemas técnicos, la volatilidad del precio y la preferencia de la población por el dólar. El caso muestra la enorme brecha entre la visión de Bitcoin y los desafíos prácticos de su implementación a nivel nacional."
    }
];

const cultureAndCommunity = [
    {
        title: "3.1. Las Voces de la Comunidad: Los Guías del Ecosistema",
        content: "Figuras clave definen el debate. Andreas M. Antonopoulos (el educador) se enfoca en la soberanía individual. Vitalik Buterin (creador de Ethereum) es un 'crítico constructor' que busca evolucionar más allá de las limitaciones de Bitcoin. Jack Dorsey (cofundador de Twitter) impulsa su adopción como la moneda nativa de internet para pagos diarios."
    },
    {
        title: "3.2. Bitcoin como Fenómeno Cultural: Más Allá del Código",
        content: "Bitcoin tiene una cultura global con su propia jerga: HODL (mantener a largo plazo), To the Moon (optimismo de precios), FUD (miedo, incertidumbre y duda), y DYOR (haz tu propia investigación). Los memes, el arte y la música son vehículos clave para expresar las emociones colectivas de la comunidad. Incluso artistas como ChocQuibTown lo usan como símbolo de éxito, demostrando su impacto cultural. Sin embargo, es crucial distinguir entre los verdaderos constructores y los 'cripto-bros' especuladores, que a menudo no comprenden los principios fundamentales de la revolución."
    },
    {
        title: "3.3. Desmontando Mitos: Las Críticas a Bitcoin",
        content: "A menudo se ataca a Bitcoin con críticas que no comprenden su diseño. ¿Volatilidad? Es el precio de descubrir un activo monetario global sin un control central. ¿Uso ilícito? El efectivo tradicional sigue siendo el rey para eso; Bitcoin deja un rastro público en la blockchain. ¿Consumo energético? No es un desperdicio, es la energía que asegura la red y la hace inmune a ataques, convirtiendo el caos en orden. Es el costo de tener un dinero incorruptible."
    },
    {
        title: "3.4. El Ruido de las 'Altcoins': ¿Por Qué Solo Bitcoin?",
        content: "Después de Bitcoin, surgieron miles de 'altcoins'. La mayoría son copias centralizadas que sacrifican la seguridad y la descentralización por promesas de velocidad o funcionalidades extra. Se controlan por fundaciones o equipos pequeños, haciéndolas vulnerables a la censura y manipulación. Bitcoin es el único activo digital verdaderamente descentralizado, escaso y seguro. El resto es una distracción del verdadero objetivo: la separación del dinero y el Estado."
    }
];

const practicalUse = [
    {
        title: "4.1. ¿Cómo y Dónde Comprar tus Primeros Satoshis?",
        content: "La forma más común en Bolivia es a través de plataformas P2P (persona a persona) como las que encuentras en nuestro monitor de precios. Compras directamente a otros usuarios usando métodos de pago locales. Empieza con poco, no necesitas comprar un Bitcoin entero. ¡Puedes comprar fracciones llamadas Satoshis!"
    },
    {
        title: "4.2. Enviando y Recibiendo Bitcoin: Tu Dirección Pública",
        content: "Para recibir Bitcoin, comparte tu 'dirección pública' (una larga cadena de caracteres o un código QR). Para enviar, pega la dirección del destinatario en tu wallet, elige el monto y confirma. ¡Cuidado! Las transacciones son irreversibles, así que siempre verifica la dirección."
    },
    {
        title: "4.3. ¿Dónde Puedo Usar Bitcoin?",
        content: "Aunque aún no es aceptado en todas partes, puedes usar Bitcoin para pagar servicios online, comprar tarjetas de regalo, donar a causas o incluso en algunos cafés y tiendas. Su uso principal hoy en día sigue siendo como una reserva de valor, similar al oro digital."
    },
    {
        title: "4.4. El Simulador Interactivo: ¡Practica sin Riesgo!",
        content: "Próximamente: Usa nuestro simulador de wallet para practicar cómo enviar y recibir Bitcoin de juguete. Es la mejor manera de aprender y ganar confianza sin usar dinero real."
    }
];

const security = [
    {
        title: "5.1. La Regla de Oro: 'Not Your Keys, Not Your Coins'",
        content: "Si tus criptomonedas están en un exchange (plataforma de intercambio), no tienes el control total. La plataforma las custodia por ti. Para una verdadera soberanía, transfiere tus fondos a una billetera donde solo tú controles la clave privada (autocustodia)."
    },
    {
        title: "5.2. Tu Frase Semilla: La Llave Maestra de tu Tesoro",
        content: "Tu frase de recuperación (12 o 24 palabras) es la copia de seguridad de todos tus fondos. Escríbela en papel o metal, guárdala en un lugar secreto y seguro (a prueba de fuego y agua si es posible) y NUNCA la compartas con nadie ni la guardes en un dispositivo conectado a internet. Perderla es perder tu dinero para siempre."
    },
    {
        title: "5.3. El Manual del Detective de Estafas (SCAMs)",
        content: "Aprende a identificar las trampas más comunes: 1) Falsos regalos o duplicadores ('envía 1 BTC y recibe 2'). 2) Phishing: correos o sitios web falsos que imitan a plataformas reales para robar tus contraseñas. 3) Soporte técnico falso que te pide tu frase semilla. ¡Nadie legítimo te pedirá jamás tu frase semilla!"
    },
    {
        title: "5.4. Entendiendo la Volatilidad: El Sube y Baja de Bitcoin",
        content: "El precio de Bitcoin es extremadamente volátil. No inviertas más de lo que estás dispuesto a perder. La volatilidad puede traer grandes ganancias, pero también grandes pérdidas. Es crucial tener una perspectiva a largo plazo (HODL) y no entrar en pánico por las caídas del mercado."
    },
    {
        title: "5.5. Checklist de Seguridad Definitivo",
        content: "1. Usa la autenticación de dos factores (2FA) en todos tus intercambios. 2. Utiliza contraseñas fuertes y únicas. 3. Considera una billetera de hardware (cold wallet) para almacenar cantidades significativas. 4. Mantén tu software de billetera actualizado. 5. Sé escéptico y siempre haz tu propia investigación (DYOR)."
    }
];

const SectionContent = ({ guides }) => (
    <Accordion type="single" collapsible className="w-full space-y-2">
        {guides.map((guide, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border bg-secondary/50 rounded-md px-4">
                <AccordionTrigger className="text-left hover:no-underline">{guide.title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                    {guide.content}
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
);

export default function EducationalGuides() {
  const [showJourney, setShowJourney] = useState(false);

  if (showJourney) {
    return <BeginnerJourney onBack={() => setShowJourney(false)} />;
  }

  return (
    <div className="max-w-4xl mx-auto">
        <div className="text-center border-b pb-8 mb-8">
            <h1 className="text-4xl font-bold font-headline mb-4">El Universo Bitcoin</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                Bienvenido a tu centro de mando para la soberanía financiera. Aquí no solo aprenderás sobre Bitcoin, sino que entenderás por qué es la herramienta de libertad más poderosa de nuestro tiempo. Prepárate para unirte a la revolución.
            </p>
            <Button size="lg" className="text-lg" onClick={() => setShowJourney(true)}>
                <Rocket className="mr-2 h-5 w-5" />
                Inicia tu Misión
            </Button>
        </div>

        <Tabs defaultValue="fundamentals" className="w-full">
            <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 mb-4">
                <TabsTrigger value="fundamentals"><Lightbulb className="mr-2 h-4 w-4"/>Fundamentos</TabsTrigger>
                <TabsTrigger value="history"><Scroll className="mr-2 h-4 w-4"/>Historia</TabsTrigger>
                <TabsTrigger value="culture"><Users className="mr-2 h-4 w-4"/>Cultura</TabsTrigger>
                <TabsTrigger value="usage"><HandCoins className="mr-2 h-4 w-4"/>Uso Práctico</TabsTrigger>
                <TabsTrigger value="security"><Shield className="mr-2 h-4 w-4"/>Seguridad</TabsTrigger>
            </TabsList>
            <TabsContent value="fundamentals">
                <SectionContent guides={fundamentals} />
            </TabsContent>
            <TabsContent value="history">
                <SectionContent guides={history} />
            </TabsContent>
            <TabsContent value="culture">
                <SectionContent guides={cultureAndCommunity} />
            </TabsContent>
            <TabsContent value="usage">
                <SectionContent guides={practicalUse} />
            </TabsContent>
            <TabsContent value="security">
                <SectionContent guides={security} />
            </TabsContent>
        </Tabs>
    </div>
  );
}
