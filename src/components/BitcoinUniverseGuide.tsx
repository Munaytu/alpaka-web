'use client';

interface Guide {
  title: string;
  content: React.ReactNode;
}
// Importaciones necesarias

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
import { Separator } from "@/components/ui/separator"; // Importar Separator

// --- CONTENIDO EDUCATIVO DETALLADO ---

// PARTE I: Investigación y Análisis de Contenido
// Sección 1: Los Cimientos de Bitcoin: ¿Qué Es y Cómo Funciona?
const fundamentalsContent = [
    {
        title: "1.1. Desmitificando Bitcoin: El Dinero de Internet",
        content: (
            <>
                <p className="mb-4">
                    ¡Hola! Prepárate para conocer a <strong>Bitcoin</strong>, a menudo descrito como el "dinero de internet". Imagina un tipo de dinero que no existe en billetes o monedas, ¡vive enteramente en el mundo digital! 🤩 Se apoya en una tecnología súper ingeniosa llamada <strong>blockchain</strong>.
                </p>
                <p className="mb-4">
                    Su misión es simple pero poderosa: ser un medio para comprar, vender e invertir, como cualquier otra moneda. Pero aquí viene lo emocionante: ¡Bitcoin es <strong>descentralizado</strong>! 🎉 Esto significa que no hay un jefe central, ni un banco poderoso, ni un gobierno que lo emita o controle. ¡Es dinero del pueblo, para el pueblo (digitalmente hablando)!
                </p>
                <p className="mb-4">
                    Las transacciones ocurren directamente entre personas (eso es P2P o par a par), sin necesidad de pedir permiso a un banco. ¿Quieres enviar dinero de México a Japón? ¡Con Bitcoin es posible en segundos y sin intermediarios costosos! ✨ Fue la primera criptomoneda (nació en 2009) y sigue siendo la más grande. Pero ¡ojo!, hay miles de criptomonedas, cada una con su propia chispa.
                </p>
                <p className="mb-4">
                    Para que veas la diferencia con el dinero que usas a diario (el dinero tradicional o fíat), ¡mira esta comparación rápida!
                </p>
                <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 text-left">Característica</th>
                                <th className="border px-4 py-2 text-left">Dinero Tradicional (Fíat)</th>
                                <th className="border px-4 py-2 text-left">Bitcoin (BTC)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 font-semibold">Emisión y Control</td>
                                <td className="border px-4 py-2">Centralizado por bancos centrales y gobiernos.</td>
                                <td className="border px-4 py-2">Descentralizado, creado por "minería", sin autoridad central.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold">Suministro</td>
                                <td className="border px-4 py-2">Potencialmente ilimitado (pueden imprimir más).</td>
                                <td className="border px-4 py-2">Finito y predecible (solo 21 millones existirán).</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold">Transacciones</td>
                                <td className="border px-4 py-2">Requieren intermediarios (bancos).</td>
                                <td className="border px-4 py-2">Directas (P2P), verificadas por la red global de computadoras.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold">Transparencia</td>
                                <td className="border px-4 py-2">Privadas, libros de contabilidad centralizados y opacos.</td>
                                <td className="border px-4 py-2">Pseudónimas, registradas en un libro público (blockchain) que cualquiera puede auditar.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold">Respaldo</td>
                                <td className="border px-4 py-2">Confianza en el gobierno emisor ("fe" o "fíat").</td>
                                <td className="border px-4 py-2">Criptografía, matemáticas y confianza distribuida en la red.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold">Censura y Reversibilidad</td>
                                <td className="border px-4 py-2">Pueden ser bloqueadas o revertidas por autoridades/bancos.</td>
                                <td className="border px-4 py-2">Resistentes a la censura e irreversibles una vez confirmadas.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <img src="/images/alpaca con moneda de bitcoin.png" alt="Alpaca con moneda de bitcoin" className="w-full object-cover rounded-md mb-4" />
                <p>
                    Esta tabla muestra un punto clave: el sistema tradicional ofrece seguridad con intermediarios, mientras que Bitcoin te da soberanía total sobre tu dinero... ¡pero asumes toda la responsabilidad!
                </p>
                {/* Marcador para Quiz */}
                <p className="mt-4 italic text-sm text-center text-muted-foreground">
                    ✨ ¡Pon a prueba tu conocimiento! Aquí podrías encontrar un pequeño quiz interactivo sobre las diferencias entre Bitcoin y el dinero tradicional. ✨
                </p>
            </>
        )
    },
    {
        title: "1.2. El Corazón de la Revolución: La Tecnología Blockchain",
        content: (
            <>
                <p className="mb-4">
                    La magia detrás de Bitcoin es la <strong>blockchain</strong>, o cadena de bloques. Piensa en ella como un libro de contabilidad digital gigante 📖, pero con superpoderes que lo hacen único y seguro. ¡Este libro registra cada transacción de Bitcoin desde el día uno!
                </p>
                <p className="mb-4">
                    Sus superpoderes son tres:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>Descentralización:</strong> ¡No hay un único banco con el libro! Miles de computadoras voluntarias alrededor del mundo (los "nodos") tienen una copia exacta. Si alguien quisiera alterar el registro, tendría que hackear a miles de computadoras al mismo tiempo. ¡Casi imposible! 💪
                    </li>
                    <li>
                        <strong>Inmutabilidad:</strong> Las transacciones se agrupan en "bloques". Cada nuevo bloque se conecta al anterior usando criptografía (como un sello digital súper fuerte), formando una cadena. Una vez que un bloque se une a la cadena, ¡la información dentro es casi inalterable! Intentar cambiar algo viejo requeriría rehacer todos los sellos posteriores, un esfuerzo computacional titánico. Esto garantiza que el registro sea permanente y a prueba de trampas. 🛡️
                    </li>
                    <li>
                        <strong>Transparencia y Pseudonimato:</strong> ¡El libro es público! Cualquiera puede ver todas las transacciones que han ocurrido. Pero no te preocupes, no muestra tu nombre o datos personales. Las transacciones son entre "direcciones" de Bitcoin (largas cadenas de letras y números). Es como ver que el buzón A envió una carta al buzón B, ¡pero no sabes quién vive en A o B! 🕵️
                    </li>
                </ul>
                <p>
                    Así funciona una transacción simple: quieres enviar bitcoins, tu solicitud va a la red de nodos, ellos verifican que todo esté bien, y luego ¡espera a ser incluida en el siguiente bloque de la cadena! Es un sistema ingenioso para intercambiar valor de forma directa y segura.
                </p>
                 {/* Marcador para Animación Interactiva/Video */}
                 <p className="mt-4 italic text-sm text-center text-muted-foreground">
                    🎬 ¡Mira cómo funciona la blockchain en acción! Aquí podríamos tener una animación interactiva que muestre cómo se crean y enlazan los bloques. 🎬
                </p>
            </>
        )
    },
    {
        title: "1.3. Creando Monedas Digitales: El Proceso de Minería",
        content: (
            <>
                <p className="mb-4">
                    Imagina que la <strong>minería</strong> es el corazón que bombea sangre a la red de Bitcoin. ❤️ Tiene dos trabajos súper importantes: traer nuevos bitcoins al mundo y mantener toda la red segura. Es como la forma en que el sistema, sin un jefe, decide qué transacciones son válidas y se añaden al libro (la blockchain).
                </p>
                <p className="mb-4">
                    Esto funciona con algo llamado <strong>Prueba de Trabajo</strong> (Proof-of-Work o PoW). Piensa en ello como una carrera mundial de acertijos matemáticos súper difíciles. 🧠 Computadoras muy potentes, llamadas "mineros", compiten para ser las primeras en resolver uno de estos acertijos. ¡No hay trucos, solo fuerza bruta computacional, probando miles de millones de soluciones cada segundo!
                </p>
                <p className="mb-4">
                    El primer minero que encuentra la solución mágica gana el derecho de cerrar el bloque de transacciones pendientes y añadirlo a la blockchain. ¿Y cuál es su premio por tanto esfuerzo? 🏆
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>Bitcoins recién nacidos:</strong> El protocolo de Bitcoin crea un número fijo de bitcoins nuevos en cada bloque minado. ¡Así es como entran nuevas monedas en circulación! Por eso se parece a la minería de oro, ¡gastas recursos para encontrar algo valioso! ⛏️
                    </li>
                    <li>
                        <strong>Comisiones de transacción:</strong> Los que envían bitcoins pueden pagar una pequeña propina para que los mineros incluyaan su transacción más rápido. ¡El minero que gana el bloque se lleva todas esas propinas! 💸
                    </li>
                </ul>
                <p className="mb-4">
                    Este sistema consume mucha energía a propósito. ¡Ese gran gasto de electricidad y poder computacional es lo que hace que la red sea increíblemente segura! Para que alguien hiciera trampa, necesitaría más poder que todos los mineros honestos juntos. ¡Es casi imposible y carísimo! 🚫
                </p>
                <p>
                    Pero sí, este consumo energético es una de las críticas más sonoras a Bitcoin. Hay granjas de minería enormes que usan tanta luz como ciudades, algo que genera preocupación por el medio ambiente. ¡Lo analizaremos más adelante!
                </p>
                {/* Marcador para Simulador Simplificado de Minería */}
                <p className="mt-4 italic text-sm text-center text-muted-foreground">
                    🕹️ ¿Quieres probar qué se siente ser un minero (de juguete)? ¡Aquí podrías interactuar con nuestro simulador simplificado de minería! 🕹️
                </p>
            </>
        )
    },
    {
        title: "1.4. Tu Billetera Digital: Gestión y Seguridad de Criptoactivos",
        content: (
            <>
                <p className="mb-4">
                    Para empezar a jugar con Bitcoin, necesitas una <strong>billetera</strong> (o wallet). 👛 ¡Este es un concepto clave! Al principio, piensa en ella como tu cartera o cuenta bancaria digital. ¡Pero aquí viene la parte importante! 👇
                </p>
                <p className="mb-4">
                    <strong>¡Tu billetera NO guarda tus bitcoins físicamente!</strong> Los bitcoins ¡nunca salen de la blockchain! Lo que tu billetera sí guarda son unos códigos secretos: tus <strong>claves criptográficas</strong>. Son la llave 🔑 para acceder y mover los bitcoins que la blockchain dice que son tuyos.
                </p>
                <p className="mb-4 font-semibold">Hay dos tipos de claves:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>Clave Pública:</strong> De aquí sale tu <strong>dirección de Bitcoin</strong>. ¡Es como tu número de cuenta o email! La compartes para que te envíen bitcoins. ¡Puedes tener muchas direcciones para más privacidad! 📬
                    </li>
                    <li>
                        <strong>Clave Privada:</strong> ¡ESTA es tu super contraseña secreta! 🤫 Es la prueba de que los bitcoins de tu dirección son tuyos. ¡Quien tenga tu clave privada, controla tu dinero! <strong>¡Nunca la compartas!</strong>
                    </li>
                </ul>
                <p className="mb-4 font-semibold">Tipos de Billeteras:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>Billeteras Calientes (Hot Wallets):</strong> Son apps o programas conectados a internet (en tu teléfono, computadora o en un exchange). Son prácticas para el día a día (como la cartera de tu bolsillo), pero ¡más vulnerables a hackeos! 🔥
                    </li>
                    <li>
                        <strong>Billeteras Frías (Cold Wallets):</strong> Son dispositivos físicos (como un USB) que guardan tus claves SIN conexión a internet. ¡Son la caja fuerte digital! 🔒 Las más seguras para grandes cantidades.
                    </li>
                </ul>
                 {/* Marcador para Simulador de Wallet */}
                 <p className="mt-4 italic text-sm text-center text-muted-foreground">
                    📱 ¡Practica con nuestro simulador de billetera! Crea una de juguete, recibe "bitcoins de prueba" y haz tu primera transacción simulada. ¡Sin riesgo y muy divertido! 🤩
                </p>
            </>
        )
    },
    {
        title: "1.5. Ventajas y Riesgos Inherentes: Una Visión Equilibrada",
        content: (
            <>
                <p className="mb-4">
                    Como todo en la vida, Bitcoin tiene sus puntos brillantes ✨ y sus áreas de sombra 🌑. Es importante conocer ambos lados de la moneda (¡literalmente!) para navegar este universo. A menudo, una ventaja esconde un riesgo, ¡son dos caras de la misma moneda digital!
                </p>
                <p className="mb-4 font-semibold">¡Lo Genial! (Ventajas Potenciales):</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>Eres Tu Propio Banco:</strong> ¡Control total! Nadie puede congelar tu cuenta o detener tus envíos. Es resistencia a la censura, súper útil en lugares con problemas. 💪
                    </li>
                    <li>
                        <strong>Dinero Global e Instantáneo:</strong> Enviar valor al otro lado del mundo es tan fácil como mandar un email. ¡Adiós a las demoras y comisiones altas de los bancos internacionales! ✈️
                    </li>
                    <li>
                        <strong>Escasez Garantizada:</strong> ¡Solo habrá 21 millones de bitcoins! 💎 Esto está escrito en su código. Muchos lo ven como una protección contra la inflación del dinero fíat, que se puede imprimir sin parar. Es como "oro digital".
                    </li>
                    <li>
                        <strong>Fácil de Comprar/Vender y Más Aceptado:</strong> Al ser el rey, es el más líquido. Comprarlo, venderlo o cambiarlo a dólares es más simple. ¡Y cada vez más lugares lo aceptan! 🛍️
                    </li>
                    <li>
                        <strong>Privacidad (Pseudonimato):</strong> Tu identidad no está atada a tu dirección. Ves las transacciones, pero no quién las hace. Es más privado que el banco tradicional, que sabe TODO de ti. 🤫
                    </li>
                </ul>
                <p className="mb-4 font-semibold">¡Cuidado! (Riesgos Fundamentales):</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>El Precio es una Montaña Rusa:</strong> ¡La volatilidad es EXTREMA! El valor puede subir o bajar muchísimo en días. Esto puede dar grandes ganancias, pero también pérdidas dolorosas. ¡Nunca inviertas lo que no puedes perder! 🎢
                    </li>
                    <li>
                        <strong>Transacciones Sin Reversa:</strong> ¡Una vez que envías, se fue para siempre! 😱 No hay botón de "deshacer" ni servicio al cliente si te equivocas de dirección o caes en una estafa. La responsabilidad es 100% tuya.
                    </li>
                    <li>
                        <strong>La Seguridad es Tu Tarea:</strong> Ser tu propio banco es genial, pero si pierdes tus claves privadas o tu frase semilla... ¡adiós a tus bitcoins! 😭 Los exchanges también pueden ser hackeados. ¡La seguridad personal es clave!
                    </li>
                    <li>
                        <strong>Reglas Cambiantes:</strong> Los gobiernos aún no saben bien qué hacer con las criptos. Las leyes pueden cambiar y afectar el uso y el valor de Bitcoin. 📜
                    </li>
                    <li>
                        <strong>La Sombra Ilícita:</strong> Aunque la mayoría lo usa bien, su privacidad lo ha hecho atractivo para cosas ilegales. Esto mancha un poco su imagen y puede afectar su adopción masiva. 😔
                    </li>
                </ul>
                <p>
                    Entender esto te ayuda a tomar decisiones más inteligentes y seguras en el mundo de Bitcoin. ¡No todo es color de rosa, pero las posibilidades son inmensas si eres precavido!
                </p>
            </>
        )
    }
];

// Sección 2: La Saga de Bitcoin: Historia y Hitos Clave
const historyContent = [
    {
        title: "2.1. El Origen del Mito: Satoshi Nakamoto y el Whitepaper",
        content: (
            <>
                <p className="mb-4">
                    ¡Aquí empieza la aventura! 📜 Todo arrancó un <strong>31 de octubre de 2008</strong>, en medio de una crisis financiera mundial. Justo cuando la confianza en los bancos estaba por los suelos, apareció un documento mágico en un foro de internet: el <strong>Whitepaper de Bitcoin</strong>.
                </p>
                <p className="mb-4">
                    El autor era un tal <strong>Satoshi Nakamoto</strong>, ¡un nombre que sigue siendo un misterio! 🤔 Pudo ser una persona, un grupo... ¡nadie lo sabe! Pero su idea fue brillante: un sistema de dinero electrónico que no necesitara de bancos o gobiernos para funcionar.
                </p>
                <p className="mb-4">
                    El documento explicaba cómo usar la criptografía (códigos secretos y súper seguros) para resolver un problema clave: ¿cómo evitar que alguien gaste el mismo dinero digital dos veces sin un banco que lo controle? ¡Esto se llama el <strong>problema del doble gasto</strong>! Satoshi lo resolvió con la <strong>blockchain</strong> y la <strong>prueba de trabajo</strong> que vimos antes. ¡Eureka! ✨
                </p>
                <p>
                    El anonimato de Satoshi no fue casualidad. Al desaparecer después de poner todo en marcha, ¡se aseguró de que Bitcoin fuera verdaderamente descentralizado y no tuviera un líder al que atacar o presionar! ¡Un verdadero estratega! 🕵️‍♂️
                </p>
                 {/* Marcador para Enlace al Whitepaper */}
                 <p className="mt-4 italic text-sm text-center text-muted-foreground">
                    📖 ¿Curioso por leer el documento original? Aquí podrías encontrar un enlace al Whitepaper de Bitcoin (¡quizás una versión traducida al español para exploradores valientes!). 📖
                </p>
            </>
        )
    },
    {
        title: "2.2. De la Teoría a la Práctica: Los Primeros Días",
        content: (
            <>
                <p className="mb-4">
                    Después de la idea, vino la acción. El <strong>3 de enero de 2009</strong>, Satoshi Nakamoto activó la red y minó el primer bloque de la blockchain, el <strong>"Bloque Génesis"</strong>. ¡La chispa se encendió! 🔥 Dentro de este primer bloque, Satoshi incluyó un mensaje oculto: el titular de un periódico que hablaba sobre los rescates bancarios. Era una declaración clara: Bitcoin nacía como una respuesta a la falla del sistema financiero tradicional.
                </p>
                <p className="mb-4">
                    La primera transacción real ocurrió pocos días después, el <strong>12 de enero de 2009</strong>. Satoshi le envió 10 bitcoins a <strong>Hal Finney</strong>, un famoso programador que fue uno de los primeros en apoyar y mejorar Bitcoin. ¡Fue como el primer apretón de manos digital! 👋
                </p>
                <p className="mb-4">
                    Pero el hito más "sabroso" llegó el <strong>22 de mayo de 2010</strong>. Un programador llamado Laszlo Hanyecz pagó <strong>10,000 bitcoins</strong> por dos pizzas. 🍕🍕 En ese momento, 10,000 BTC valían unos 40 dólares. ¡Hoy valdrían cientos de millones! Este evento se celebra cada año como el <strong>"Bitcoin Pizza Day"</strong> y nos recuerda que Bitcoin pasó de ser un experimento de código a tener valor en el mundo real. ¡El inicio del camino!
                </p>
                 {/* Marcador para Enlace/Video sobre Bitcoin Pizza Day */}
                 <p className="mt-4 italic text-sm text-center text-muted-foreground">
                    🍕 ¡Celebra el Bitcoin Pizza Day! Aquí podrías ver un video corto sobre esta curiosa historia o leer más detalles. 🍕
                </p>
            </>
        )
    },
    {
        title: "2.3. Hitos de una Década: La Evolución de Bitcoin",
        content: (
            <>
                <p className="mb-4">
                    Bitcoin no se quedó quieto. Su historia es una montaña rusa 🎢 de avances, desafíos y momentos épicos. Aquí algunos de los capítulos más importantes:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>2011: ¡Paridad con el Dólar!</strong> 🎉 Por primera vez, 1 Bitcoin valió 1 dólar. ¡Un logro simbólico enorme!
                    </li>
                    <li>
                        <strong>2012: El Primer Halving.</strong> La recompensa por minar un bloque se redujo a la mitad. ¡Un evento programado que limita la oferta y ocurre cada 4 años! (Hablaremos más de esto).
                    </li>
                    <li>
                        <strong>2014: El Tsunami de Mt. Gox.</strong> El colapso de la bolsa de Bitcoin más grande del mundo (¡veremos el estudio de caso!). Un golpe duro, pero que enseñó lecciones cruciais de seguridad. 💔
                    </li>
                    <li>
                        <strong>2017: La Gran Corrida Alcista.</strong> El precio se disparó a casi $20,000 USD. Bitcoin se volvió famoso (¡y controvertido!) a nivel mundial. 🚀
                    </li>
                    <li>
                        <strong>2021: El Experimento de El Salvador.</strong> Se convirtió en el primer país en hacer de Bitcoin una moneda de curso legal. ¡Un experimento audaz (¡también lo veremos en un estudio de caso!) que puso a Bitcoin en el mapa geopolítico. 🇸🇻
                    </li>
                    <li>
                        <strong>2024: Los ETFs Llegan a Wall Street.</strong> La aprobación de Fondos Cotizados (ETFs) de Bitcoin en EE.UU. facilitó que grandes inversores accedieran a Bitcoin, integrándolo más al sistema financiero tradicional. Un paso clave para la adopción masiva. 🏦➡️₿
                    </li>
                </ul>
                 {/* Marcador para Línea de Tiempo Interactiva */}
                 <p className="mt-4 italic text-sm text-center text-muted-foreground">
                    ⏳ ¡Explora nuestra línea de tiempo interactiva! Sumérgete en los eventos clave de la historia de Bitcoin con más detalles, imágenes y enlaces. ⏳
                </p>
            </>
        )
    },
    {
        title: "2.4. Estudio de Caso - El Colapso de Mt. Gox: La Primera Gran Crisis",
        content: (
            <>
                <p className="mb-4">
                    En 2014, el mundo de Bitcoin recibió un golpe durísimo. 💥 <strong>Mt. Gox</strong> era la bolsa de Bitcoin más grande del momento, ¡manejaba el 70% de todas las transacciones! Era el lugar donde casi todos compraban y vendían sus bitcoins.
                </p>
                <p className="mb-4">
                    Pero Mt. Gox tenía problemas de seguridad enormes. Un día, anunciaron que habían sido hackeados y que se habían perdido <strong>cientos de miles de bitcoins</strong> (¡el equivalente a cientos de millones de dólares en ese momento!). La bolsa colapsó, los usuarios perdieron sus fondos y el precio de Bitcoin se desplomó. 📉
                </p>
                <p className="mb-4">
                    Esta crisis fue dolorosa, pero dejó una enseñanza fundamental que se volvió un mantra en la comunidad: <strong>"Not your keys, not your coins"</strong>. 🔑🚫🪙 Significa que si dejas tus bitcoins en una plataforma de terceros (como una bolsa), ¡realmente no los controlas tú! La plataforma tiene tus claves privadas. Si esa plataforma es hackeada o desaparece, ¡pierdes tus fondos!
                </p>
                <p>
                    La lección fue clara: para tener verdadera soberanía sobre tu dinero digital, debes tener tus claves privadas bajo tu control, usando billeteras que tú manejas (autocustodia). ¡Mt. Gox fue un recordatorio brutal de por qué la descentralización y la seguridad personal son tan importantes en Bitcoin! 💪
                </p>
                 {/* Marcador para Video/Artículo Detallado sobre Mt. Gox */}
                 <p className="mt-4 italic text-sm text-center text-muted-foreground">
                    📰 Profundiza en la historia de Mt. Gox. Aquí podrías ver un documental corto o leer un análisis más detallado sobre este evento crucial. 📰
                </p>
            </>
        )
    },
    {
        title: "2.5. Estudio de Caso - El Experimento de El Salvador: Soberanía o Fantasía",
        content: (
            <>
                <p className="mb-4">
                    En <strong>2021</strong>, El Salvador dio un paso histórico (y muy comentado) al convertirse en el <strong>primer país del mundo en hacer de Bitcoin una moneda de curso legal</strong>, junto al dólar estadounidense. 🇸🇻 ¡De repente, podías pagar impuestos y bienes en Bitcoin!
                </p>
                <p className="mb-4">
                    El gobierno lanzó una billetera oficial llamada <strong>"Chivo Wallet"</strong> y dio un bono en Bitcoin a cada ciudadano. La idea era genial: impulsar la adopción, reducir las comisiones por remesas (envíos de dinero de salvadoreños en el extranjero) y atraer inversión. ✨
                </p>
                <p className="mb-4">
                    Pero la realidad ha sido más compleja. La adopción real ha sido limitada; mucha gente recibió el bono pero no siguió usando Bitcoin. Ha habido problemas técnicos con la billetera, la volatilidad del precio asusta a la población y muchos prefieren la estabilidad percibida del dólar. Además, organizaciones internacionales han criticado la falta de transparencia y los riesgos para la economía. 🤔
                </p>
                <p>
                    El experimento salvadoreño muestra la enorme diferencia entre tener una visión tecnológica y la dificultad de implementarla en el mundo real, con todas sus complejidades sociales y económicas. Es un caso fascinante que sigue en desarrollo.
                </p>
                 {/* Marcador para Video/Artículo Detallado sobre El Salvador */}
                 <p className="mt-4 italic text-sm text-center text-muted-foreground">
                    🇸🇻 ¿Qué está pasando realmente en El Salvador? Aquí podrías ver un reportaje o leer un análisis sobre los éxitos y desafíos de este experimento único. 🇸🇻
                </p>
            </>
        )
    }
];

const humanEcosystemContent = [
  {
    title: "3.1. Las Voces de la Comunidad: Los Guías del Ecosistema",
    content: (
      <>
        <p className="mb-4">
          El universo Bitcoin no es solo código y tecnología, ¡también está lleno de personas apasionadas! 🤓 Hay figuras clave que han ayudado a guiar, educar y debatir sobre el futuro de Bitcoin. Conocer sus ideas te dará diferentes perspectivas:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            <strong>Andreas M. Antonopoulos:</strong> Un educador incansable, ¡es el gurú que explica Bitcoin para que todos lo entiendan! Se enfoca en la filosofía de la soberanía individual y la resistencia a la censura.
          </li>
          <li>
            <strong>Vitalik Buterin:</strong> Creador de Ethereum (otra criptomoneda importante). A menudo un "crítico constructor" de Bitcoin, buscando explorar otras vías tecnológicas y evoluciones. Representa la diversidad de ideas en el espacio cripto.
          </li>
          <li>
            <strong>Jack Dorsey:</strong> Cofundador de Twitter y Square (ahora Block). Un firme creyente en Bitcoin como la futura moneda nativa de internet, impulsando su adopción para pagos diarios.
          </li>
          <li>
            <strong>Max Keiser y Stacy Herbert:</strong> Presentadores y defensores acérrimos de Bitcoin, a menudo con un enfoque más político y macroeconómico, viéndolo como una herramienta contra la corrupción del dinero fíat.
          </li>
          <li>
            <strong>Michael Saylor:</strong> Empresario que convirtió su empresa (MicroStrategy) en una de las mayores poseedoras públicas de Bitcoin, argumentando que es la mejor reserva de valor frente a la inflación.
          </li>
        </ul>
        <p>
          ¡Escuchar y leer a estas voces (y a muchas otras!) es clave para entender el debate actual en la comunidad. Pero recuerda siempre hacer tu propia investigación (DYOR - Do Your Own Research)!
        </p>
        {/* Marcador para Enlaces a Charlas/Podcasts */}
        <p className="mt-4 italic text-sm text-center text-muted-foreground">
          🎙️ ¿Quieres escuchar a los expertos? Aquí podrías encontrar enlaces a charlas famosas o podcasts de estas figuras. 🎙️
        </p>
      </>
    )
  },
  {
    title: "3.2. Bitcoin como Fenómeno Cultural: Más Allá del Código",
    content: (
      <>
        <p className="mb-4">
          Bitcoin no es solo tecnología, ¡es un fenómeno cultural! 🎭 Ha creado su propio lenguaje, sus propios chistes y hasta su propio arte. Sumergirse en esta cultura te ayudará a entender mejor a la comunidad.
        </p>
        <p className="mb-4 font-semibold">La Jerga Bitcoin:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            <strong>HODL:</strong> Nació de un error de escritura de "hold" (mantener). Significa mantener tus bitcoins a largo plazo, especialmente en tiempos de volatilidad. ¡No vendas por pánico! 💪
          </li>
          <li>
            <strong>To the Moon (A la Luna):</strong> Expresa el optimismo de que el precio de Bitcoin subirá muchísimo. ¡Cuando todos están emocionados, se dice que vamos "To the Moon"! 🚀
          </li>
          <li>
            <strong>FUD (Fear, Uncertainty, Doubt):</strong> Miedo, Incertidumbre, Duda. Información negativa o rumores que buscan desanimar a la gente sobre Bitcoin. ¡Cuidado con el FUD! 🤫
          </li>
          <li>
            <strong>DYOR (Do Your Own Research):</strong> Haz Tu Propia Investigación. El mantra de la comunidad. No confíes ciegamente, ¡educate tú mismo! 📚
          </li>
          <li>
            <strong>Satoshi:</strong> La unidad más pequeña de Bitcoin (0.00000001 BTC). Nombrada en honor al creador. ¡Puedes comprar Satoshis, no necesitas comprar un Bitcoin entero! ✨
          </li>
        </ul>
        <p className="mb-4 font-semibold">Memes y Arte:</p>
        <p className="mb-4">
          Los memes son una parte gigante de la cultura Bitcoin, usados para bromear, criticar y expresar emociones sobre la volatilidad y los eventos. ¡Son una forma divertida de seguir el pulso de la comunidad!
        </p>
        {/* Integración de Imágenes/Memes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <img src="/images/alpaca con lambo.jpg" alt="Alpaca Lambo Meme" className="w-full object-cover rounded-md" />
            <img src="/images/alpaca feliz con su bircoin.jpg" alt="Alpaca Bitcoin Meme" className="w-full object-cover rounded-md" />
            <img src="/images/alpaca con moneda de bitcoin.png" alt="Alpaca Bitcoin Meme" className="w-full object-cover rounded-md" />
            <img src="/images/alpaca con ojo rojo.jpg" alt="Alpaca Bitcoin Meme" className="w-full object-cover rounded-md" />
             <p className="italic text-sm text-center text-muted-foreground col-span-full">
              {/* 🖼️ ¡Aquí irían algunos memes e imágenes icónicas de la cultura Bitcoin! 🖼️ */}
             </p>
        </div>
        <p className="mb-4">
          Incluso artistas de música popular, como el grupo colombiano <strong>ChocQuibTown</strong> en su canción "Bitcoin", han usado el concepto de Bitcoin como un símbolo de éxito y modernidad, mostrando cómo la idea trasciende el nicho tecnológico.
        </p>
        <p>
          Es importante distinguir entre los verdaderos "Bitcoiners" que entienden y valoran sus principios, y los "cripto-bros" que solo están interesados en la especulación rápida sin comprender la revolución subyacente. ¡Alpaca Educa te ayuda a ser de los primeros! 😉
        </p>
         {/* Marcador para Enlaces a Galerías de Memes/Arte */}
         <p className="mt-4 italic text-sm text-center text-muted-foreground">
          😂🎨 ¡Explora la creatividad! Aquí podrías encontrar enlaces a galerías de memes y arte digital inspirado en Bitcoin. 😂🎨
         </p>
      </>
    )
  },
  {
    title: "3.3. El Espejo Crítico: Desmontando Mitos y Entendiendo las Críticas",
    content: (
      <>
        <p className="mb-4">
          En este capítulo, vamos a ponernos las gafas de crítico y analizar las principales objeciones que se le hacen a Bitcoin. ¡No todo es miel sobre hojuelas! 🍯 Es importante
        </p>
      </>
    )
  }
];

const BitcoinUniverseGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState("fundamentals");

  const renderContent = (content: Guide[]) => (
    <Accordion type="single" collapsible className="w-full">
      {content.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <div className="p-4 md:p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-orange-500">La Guía Completa del Universo Bitcoin</h1>
      <p className="text-center text-lg text-gray-600 mb-8">Tu viaje para dominar la criptomoneda líder, presentado por Alpaca Educa.</p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-200 p-1 rounded-lg">
          <TabsTrigger value="fundamentals" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-md p-2 transition-all duration-300">
            <Lightbulb className="w-5 h-5 mr-2" />
            Fundamentos
          </TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-md p-2 transition-all duration-300">
            <Scroll className="w-5 h-5 mr-2" />
            Historia y Hitos
          </TabsTrigger>
          <TabsTrigger value="ecosystem" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-md p-2 transition-all duration-300">
            <Users className="w-5 h-5 mr-2" />
            Ecosistema Humano
          </TabsTrigger>
        </TabsList>
        <TabsContent value="fundamentals" className="mt-6">
          {renderContent(fundamentalsContent)}
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          {renderContent(historyContent)}
        </TabsContent>
        <TabsContent value="ecosystem" className="mt-6">
          {renderContent(humanEcosystemContent)}
        </TabsContent>
      </Tabs>

      <Separator className="my-8" />

      <BeginnerJourney />
    </div>
  );
};

export default BitcoinUniverseGuide;