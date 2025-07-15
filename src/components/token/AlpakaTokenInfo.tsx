
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Helper component for consistent section styling
const InfoSection = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-emerald-400">{title}</h2>
    <p className="text-muted-foreground mb-4">{description}</p>
    {children}
  </div>
);

export function AlpakaTokenInfo() {
  return (
    <div className="container mx-auto p-4 md:p-8 text-white">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2">
          Conoce <span className="text-emerald-400">$ALPAKA</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          El Hilo que Teje la Soberanía Financiera de Nuestro Ecosistema
        </p>
      </header>

      <Card className="mb-12 bg-gray-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-3xl">El Manifiesto Alpaka</CardTitle>
          <CardDescription>Nuestra Visión Cypherpunk Andina</CardDescription>
        </CardHeader>
        <CardContent className="text-lg">
          <p>
            En el corazón de los Andes, la alpaka simboliza resiliencia y comunidad. En la era digital, enfrentamos la incertidumbre económica. $ALPAKA es nuestro telar digital, un emblema de que podemos tejer nuestro propio futuro en la red blockchain.
          </p>
          <p className="mt-4">
            Inspirados en Bitcoin, creemos en el poder de la criptografía para crear sistemas más justos y soberanos. $ALPAKA es la puerta de entrada para que cada boliviano comprenda y abrace esta soberanía.
          </p>
        </CardContent>
      </Card>

      <InfoSection
        title="Parámetros Fundamentales"
        description="Las características esenciales que definen a nuestro token."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardHeader><CardTitle>Nombre</CardTitle></CardHeader>
            <CardContent><p>Alpaka Token</p></CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardHeader><CardTitle>Símbolo</CardTitle></CardHeader>
            <CardContent><p className="font-bold text-emerald-400">$ALPAKA</p></CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardHeader><CardTitle>Blockchain</CardTitle></CardHeader>
            <CardContent><p>BNB Smart Chain (BEP-20)</p></CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardHeader><CardTitle>Suministro Total</CardTitle></CardHeader>
            <CardContent><p>1,000,000,000,000</p></CardContent>
          </Card>
        </div>
      </InfoSection>

      <InfoSection
        title="El Impuesto del 2%: El Motor del Crecimiento"
        description="Cada transacción de $ALPAKA (compra o venta) tiene un pequeño impuesto del 2% que se reinvierte automáticamente en el ecosistema. Así es como funciona y por qué es crucial para nuestro futuro."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center"><span className="text-emerald-400 text-3xl mr-3">1%</span> Hacia la Liquidez Automática</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">¿Qué hace?</p>
              <p className="text-muted-foreground mb-4">Este 1% se bloquea permanentemente en el pool de liquidez de PancakeSwap.</p>
              <p className="font-semibold">¿Por qué es importante?</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2 mt-2">
                <li><span className="font-bold text-white">Crea un Suelo de Precios:</span> A medida que la liquidez crece, el precio se vuelve más estable y resistente a grandes ventas.</li>
                <li><span className="font-bold text-white">Protección Anti-"Rug Pull":</span> Al bloquear la liquidez, se elimina el riesgo de que los desarrolladores retiren los fondos, generando confianza a largo plazo.</li>
                <li><span className="font-bold text-white">Mejora el Trading:</span> Permite que se puedan realizar compras y ventas más grandes sin afectar drásticamente el precio.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center"><span className="text-emerald-400 text-3xl mr-3">1%</span> Hacia la Tesorería del Ecosistema</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">¿Qué hace?</p>
              <p className="text-muted-foreground mb-4">Este 1% se envía a una billetera pública del proyecto para financiar su crecimiento.</p>
              <p className="font-semibold">¿Por qué es importante?</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2 mt-2">
                <li><span className="font-bold text-white">Desarrollo Continuo:</span> Asegura fondos para mejorar Alpaka Hub, añadir nuevas herramientas y mantener la plataforma.</li>
                <li><span className="font-bold text-white">Marketing y Adopción:</span> Financia campañas para que más personas conozcan el proyecto, incluyendo programas de influencers y embajadores.</li>
                <li><span className="font-bold text-white">Recompensas:</span> Provee los tokens para recompensar a la comunidad por su participación y contribuciones.</li>
                <li><span className="font-bold text-white">Seguridad:</span> Paga por auditorías de seguridad para proteger a todos los usuarios.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </InfoSection>

      <InfoSection
        title="Distribución del Suministro: Un Lanzamiento Justo y Estratégico"
        description="El trillón de tokens $ALPAKA se distribuyó de manera pensada para garantizar la longevidad, la descentralización y el compromiso de todos."
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl hover:no-underline">
              <div className="flex items-center"><Badge className="text-lg mr-4">40%</Badge>Quema Inicial</div>
            </AccordionTrigger>
            <AccordionContent className="text-lg p-4">
              <p className="font-semibold">400,000,000,000 $ALPAKA enviados a una billetera irrecuperable.</p>
              <p className="text-muted-foreground mt-2"><span className="font-bold text-white">El Porqué:</span> Se reduce la cantidad de tokens en circulación desde el día uno. Esto crea escasez, lo que puede aumentar el valor para todos los tenedores y demuestra un compromiso con un modelo deflacionario a largo plazo.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl hover:no-underline">
              <div className="flex items-center"><Badge className="text-lg mr-4">25%</Badge>Liquidez Inicial en PancakeSwap</div>
            </AccordionTrigger>
            <AccordionContent className="text-lg p-4">
              <p className="font-semibold">250,000,000,000 $ALPAKA bloqueados con BNB de la preventa.</p>
              <p className="text-muted-foreground mt-2"><span className="font-bold text-white">El Porqué:</span> Esto crea un mercado robusto y confiable para comprar y vender $ALPAKA desde el lanzamiento. La liquidez se bloquea por un mínimo de 2 años, una señal clave de seguridad y compromiso que previene la manipulación.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl hover:no-underline">
              <div className="flex items-center"><Badge className="text-lg mr-4">20%</Badge>Preventa Pública</div>
            </AccordionTrigger>
            <AccordionContent className="text-lg p-4">
              <p className="font-semibold">200,000,000,000 $ALPAKA ofrecidos a la comunidad inicial.</p>
              <p className="text-muted-foreground mt-2"><span className="font-bold text-white">El Porqué:</span> Permite que los primeros creyentes del proyecto participen a un precio inicial y, fundamentalmente, recauda los fondos necesarios para crear la liquidez inicial en PancakeSwap y financiar las primeras campañas de marketing y auditoría.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl hover:no-underline">
              <div className="flex items-center"><Badge className="text-lg mr-4">10%</Badge>Tesorería del Ecosistema</div>
            </AccordionTrigger>
            <AccordionContent className="text-lg p-4">
              <p className="font-semibold">100,000,000,000 $ALPAKA para el futuro del proyecto.</p>
              <p className="text-muted-foreground mt-2"><span className="font-bold text-white">El Porqué:</span> Asegura que el proyecto tenga los recursos para desarrollarse y crecer durante años. Estos fondos están en "vesting" (se liberan lentamente durante 2 años) para no impactar el mercado y garantizar una gestión responsable.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl hover:no-underline">
              <div className="flex items-center"><Badge className="text-lg mr-4">5%</Badge>Equipo Fundador</div>
            </AccordionTrigger>
            <AccordionContent className="text-lg p-4">
              <p className="font-semibold">50,000,000,000 $ALPAKA para el equipo.</p>
              <p className="text-muted-foreground mt-2"><span className="font-bold text-white">El Porqué:</span> Incentiva al equipo a trabajar por el éxito a largo plazo. Estos tokens tienen el "vesting" más estricto (se liberan lentamente durante 3 años después de un periodo de espera de 6 meses), asegurando que el equipo esté comprometido con la visión del proyecto por muchos años.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </InfoSection>

      <InfoSection
        title="Sistema de Recompensas: Tu Contribución Tiene Valor"
        description="No solo puedes comprar $ALPAKA. Puedes ganarlo siendo una parte activa y valiosa de la comunidad. Así es como te recompensamos."
      >
        <Card className="bg-gray-900 border-gray-700">
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 text-lg space-y-3">
              <li>
                <span className="font-bold">Participa en Alpaka Hub:</span> Usa nuestras herramientas, comenta en el contenido educativo, reporta errores o sugiere mejoras. Tu interacción nos ayuda a crecer.
              </li>
              <li>
                <span className="font-bold">Crea y Educa:</span> ¿Eres bueno creando guías, videos o tutoriales? Recompensaremos tus contribuciones que ayuden a otros a aprender.
              </li>
              <li>
                <span className="font-bold">Sé un Embajador:</span> Ayuda a otros en Telegram, modera conversaciones y difunde la visión Alpaka. Los miembros más valiosos serán reconocidos como Embajadores con recompensas mensuales.
              </li>
              <li>
                <span className="font-bold">Completa Misiones:</span> Implementaremos un sistema de "gamificación" con tareas simples (ver un video, probar una nueva función) que te darán $ALPAKA como recompensa.
              </li>
            </ul>
          </CardContent>
        </Card>
      </InfoSection>

      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Únete a la Comunidad de Soberanos</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
          $ALPAKA es más que un meme; es una herramienta para construir un futuro financiero más justo y accesible para Bolivia. Aprende, participa y sé parte del cambio.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">Comprar en PancakeSwap</Button>
          <Link href="https://t.me/ComunidadCryptoBolivia" target="_blank">
            <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">Únete a Telegram</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
