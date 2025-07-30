import { HelpCircle } from "lucide-react";
import { InteractiveBondingCurveChart } from "./InteractiveBondingCurveChart";
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Componente de Sección Reutilizable
const InfoSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-6 text-center">{title}</h2>
    {children}
  </section>
);

// Componente de Tooltip para definiciones rápidas
const InfoTooltip = ({ children, text }: { children: React.ReactNode, text: string }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="cursor-help">
        <span className="text-emerald-300 border-b border-dotted border-emerald-300">{children}</span>
      </TooltipTrigger>
      <TooltipContent className="bg-gray-800 text-white border-emerald-500 max-w-xs">
        <div>{text}</div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// Componente principal de la página
export function AlpakaTokenInfo() {
  return (
    <div className="container mx-auto p-4 md:p-8 text-white">
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Todo Sobre el Token <span className="text-emerald-400">$ALPAKA</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Una guía completa para entender cómo funciona nuestro token, por qué es diferente y cómo impulsa nuestro ecosistema.
        </p>
      </header>

      {/* Sección 1: La Idea Principal */}
      <InfoSection title="El Corazón de $ALPAKA: La Curva de Bonos">
        <div className="text-lg text-center max-w-4xl mx-auto text-muted-foreground mb-12">
          <div className="mb-4">
            Olvida todo lo que crees saber sobre cómo se compran y venden las criptomonedas. $ALPAKA no usa los mercados tradicionales. En su lugar, opera con un sistema llamado <strong>Curva de Bonos</strong>, que es como un dispensador automático e inteligente para nuestro token.
          </div>
          <div>
            Piensa en ello como una máquina expendedora: tú pones dinero (en este caso, la criptomoneda <InfoTooltip text="BNB es la moneda nativa de la red BNB Smart Chain, la tecnología sobre la que construimos. Es como el 'combustible' necesario para hacer transacciones en esa red.">BNB</InfoTooltip>) y la máquina te da un producto ($ALPAKA). La magia está en que el precio cambia automáticamente según cuánta gente esté comprando o vendiendo.
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Columna de Explicación */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-2xl text-white mb-2">Cuando Compras $ALPAKA...</h3>
              <p className="text-muted-foreground">...no se lo estás comprando a otra persona. Lo estás comprando directamente del sistema. El sistema <strong>crea nuevos tokens</strong> para ti. Como ahora hay más tokens en circulación, el precio para la siguiente persona que compre será un poquito más alto. Esto recompensa a los que llegan temprano.</p>
            </div>
            <div>
              <h3 className="font-semibold text-2xl text-white mb-2">Cuando Vendes $ALPAKA...</h3>
              <p className="text-muted-foreground">...no necesitas esperar a que alguien quiera comprar. El sistema siempre está dispuesto a recomprártelos. Al vender, tus tokens se <strong>destruyen (o 'queman')</strong>, sacándolos de circulación. Como ahora hay menos tokens, el precio para la siguiente persona que venda será un poquito más bajo.</p>
            </div>
          </div>
          {/* Columna del Gráfico */}
          <div>
            <InteractiveBondingCurveChart />
          </div>
        </div>
      </InfoSection>

      {/* Sección 2: Beneficios */}
      <InfoSection title="¿Por Qué Usar un Sistema Tan Diferente?">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card className="bg-gray-900 border-gray-700 p-6">
            <CardHeader>
              <CardTitle className="text-emerald-400 text-2xl">Liquidez Infinita</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Nunca te quedarás 'atascado' con tus tokens. El sistema siempre tiene fondos (BNB) para recomprar tus $ALPAKA si decides vender. No dependes de la suerte de encontrar un comprador.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-700 p-6">
            <CardHeader>
              <CardTitle className="text-emerald-400 text-2xl">Precio Justo y Predecible</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">El precio se mueve según una fórmula matemática clara, no por los caprichos de un mercado o la manipulación de grandes jugadores. Es transparente y cualquiera puede verificarlo.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-700 p-6">
            <CardHeader>
              <CardTitle className="text-emerald-400 text-2xl">Crecimiento Sostenible</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Cada compra de $ALPAKA con BNB añade fondos a la tesorería del proyecto. Este dinero se usa para construir, mejorar y promocionar el ecosistema Alpaka, beneficiando a todos.</p>
            </CardContent>
          </Card>
        </div>
      </InfoSection>

      {/* Sección 3: La Tesorería */}
      <InfoSection title="La Tesorería: El Motor del Ecosistema">
         <div className="text-lg text-center max-w-4xl mx-auto text-muted-foreground mb-12">
            <p>El dinero (BNB) que entra al sistema de la curva de bonos forma la <strong>Tesorería del Proyecto</strong>. Este es un fondo comunitario, visible públicamente en la blockchain, que se utiliza para financiar todo lo que hacemos.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700 p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-white">¿En qué se usa el dinero?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Desarrollo de Alpaka Hub:</strong> Pagar a programadores para crear nuevas herramientas y mantener la plataforma.</li>
                  <li><strong>Marketing:</strong> Dar a conocer el proyecto para atraer a más usuarios.</li>
                  <li><strong>Recompensas:</strong> Premiar a los miembros de la comunidad que ayudan a crecer el ecosistema.</li>
                  <li><strong>Seguridad:</strong> Pagar a expertos para que revisen nuestro código y aseguren que los fondos estén a salvo.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-white">¿Quién controla la Tesorería?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground mb-4">
                  Al principio, el equipo fundador gestiona los fondos para poder avanzar rápidamente. Sin embargo, nuestro objetivo es la descentralización total.
                </div>
                <div className="text-muted-foreground">
                  En el futuro, el control pasará a una <InfoTooltip text="Una DAO es como un club digital donde los miembros (tenedores de tokens) votan para tomar decisiones. Es una forma de gobierno democrático y transparente en la blockchain.">DAO (Organización Autónoma Descentralizada)</InfoTooltip>. Esto significa que <strong>tú</strong>, como tenedor de $ALPAKA, podrás votar y decidir cómo se gasta el dinero de la tesorería.
                </div>
              </CardContent>
            </Card>
        </div>
      </InfoSection>

      {/* Sección 4: FAQ */}
      <InfoSection title="Preguntas Frecuentes">
        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          <AccordionItem value="faq-1" className="border-b border-gray-700">
            <AccordionTrigger className="text-lg text-left">Entonces, ¿no compro $ALPAKA en un exchange como Binance o KuCoin?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base p-4">
              Correcto. Al menos al principio, la única forma de obtener $ALPAKA es directamente desde nuestro sitio web, interactuando con el contrato de la curva de bonos. Esto nos permite controlar la economía del token y asegurar que los fondos beneficien al proyecto.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2" className="border-b border-gray-700">
            <AccordionTrigger className="text-lg text-left">¿Qué significa que el suministro es 'dinámico'?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base p-4">
              Significa que no hay un número fijo de tokens. Se crean cuando la gente compra y se destruyen cuando venden. La cantidad total de tokens $ALPAKA siempre reflejará cuánta gente está participando activamente en el proyecto.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3" className="border-b border-gray-700">
            <AccordionTrigger className="text-lg text-left">¿Es seguro este sistema? ¿Puedo perder mi dinero?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base p-4">
              El modelo de curva de bonos es una tecnología probada. Sin embargo, como cualquier criptomoneda, el valor de $ALPAKA puede subir o bajar. El precio está garantizado por la fórmula, pero si mucha gente vende, el precio bajará. Nunca inviertas más de lo que estás dispuesto a perder. La seguridad de nuestro contrato será verificada por auditores externos.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="faq-5" className="border-b-0">
            <AccordionTrigger className="text-lg text-left">¿Y si solo tengo USDT (dólar digital)? ¿Cómo compro?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base p-4">
              ¡Excelente pregunta! Entendemos que muchos usuarios manejan sus ahorros en USDT. Para facilitar el proceso, nuestra plataforma Alpaka Hub incluirá una herramienta para ayudarte:
              <br/><br/>
              <ol class="list-decimal list-inside space-y-2">
                <li><strong>Paso 1: Intercambiar USDT por BNB.</strong> Dentro de Alpaka Hub, podrás conectar tu wallet e intercambiar tus USDT por BNB de forma segura, utilizando un servicio de intercambio descentralizado integrado.</li>
                <li><strong>Paso 2: Comprar $ALPAKA con BNB.</strong> Una vez que tengas BNB en tu wallet, el proceso es el mismo: usas esos BNB para comprar $ALPAKA directamente desde el sistema de la curva de bonos.</li>
              </ol>
              <br/>
              Nuestra meta es que el proceso sea lo más sencillo y directo posible, todo desde un mismo lugar.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </InfoSection>

      {/* Sección 5: Llamada a la Acción */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">¿Listo para Ser Parte del Cambio?</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
          $ALPAKA es más que un token. Es una invitación a construir un futuro financiero más transparente y accesible para Bolivia. Únete a nuestra comunidad para aprender, participar y crecer con nosotros.
        </p>
        <div className="flex justify-center items-center gap-4">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white" disabled>
            Comprar $ALPAKA (Próximamente)
          </Button>
          <Link href="https://t.me/ComunidadCryptoBolivia" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">
              Únete a la Comunidad en Telegram
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
