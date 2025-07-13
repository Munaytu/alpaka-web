'use client';

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
                        <strong>Comisiones de transacción:</strong> Los que envían bitcoins pueden pagar una pequeña propina para que los mineros incluyan su transacción más rápido. ¡El minero que gana el bloque se lleva todas esas propinas! 💸
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
                <p className="mb-4">
                    Lo más CRÍTICO para tu seguridad es la <strong>frase semilla</strong> (seed phrase). Es una lista de 12 o 24 palabras que te da tu billetera al crearla. ¡Es la llave maestra para recuperar TODO si pierdes tu dispositivo! 🗝️ La regla de oro: escríbela en papel (o metal), guárdala en un lugar físico, seguro y secreto (¡NUNCA online!), y ¡jamás la compartas con nadie! Perderla es perder tus bitcoins para siempre. 💔
                </p>
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
                        <strong>2014: El Tsunami de Mt. Gox.</strong> El colapso de la bolsa de Bitcoin más grande del mundo (¡veremos el estudio de caso!). Un golpe duro, pero que enseñó lecciones cruciales de seguridad. 💔
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
            {/* Ejemplo: Agrega aquí tus imágenes/memes con enlaces si los tienes */}
            {/*
            <img src="/ruta/a/tu/meme1.jpg" alt="Bitcoin Meme 1" className="rounded-md"/>
            <img src="/ruta/a/tu/meme2.png" alt="Bitcoin Meme 2" className="rounded-md"/>
            */}
             <p className="italic text-sm text-center text-muted-foreground col-span-full">
              🖼️ ¡Aquí irían algunos memes e imágenes icónicas de la cultura Bitcoin! 🖼️
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
          Bitcoin genera debates apasionados y muchas críticas. Es fundamental conocerlas y entender por qué, desde la perspectiva de sus defensores, muchas se basan en malentendidos o comparaciones injustas.
        </p>
        <p className="mb-4 font-semibold">Críticas Comunes (y Respuestas):</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            <strong>Crítica Económica (Volatilidad):</strong> "¡El precio sube y baja demasiado, no sirve como moneda!"
            <p className="ml-4 italic text-muted-foreground">
              <strong>Respuesta:</strong> La volatilidad es parte de su fase de descubrimiento como activo global. El dinero fíat también pierde valor (inflación constante) de forma menos visible. Bitcoin, al ser escaso, es visto por muchos como una mejor reserva de valor a largo plazo, similar al oro, cuya volatilidad no le quita su valor como activo.
            </p>
          </li>
          <li>
            <strong>Crítica de Uso Ilícito:</strong> "¡Bitcoin solo lo usan los criminales!"
            <p className="ml-4 italic text-muted-foreground">
              <strong>Respuesta:</strong> Aunque se ha usado en actividades ilícitas (como cualquier tecnología o dinero), las investigaciones muestran que el efectivo tradicional sigue siendo el rey indiscutible para el lavado de dinero y el crimen organizado. Además, las transacciones de Bitcoin quedan registradas PARA SIEMPRE en una blockchain pública, dejando un rastro que las autoridades pueden (y han usado) para rastrear fondos, algo mucho más difícil con efectivo.
            </p>
          </li>
          <li>
            <strong>Crítica Política/Social (Descentralización):</strong> "Sin un banco o gobierno, ¿quién protege al usuario? ¿Y qué pasa si alguien pierde sus claves?"
            <p className="ml-4 italic text-muted-foreground">
              <strong>Respuesta:</strong> La descentralización te da soberanía, pero implica 100% de responsabilidad personal. Es el precio de la libertad financiera. La red te protege de la censura y manipulación externa, pero la seguridad de tus claves es TU tarea. La educación es clave (¡por eso estás aquí! 😉).
            </p>
          </li>
          <li>
            <strong>Crítica Medioambiental (Consumo Energético):</strong> "¡La minería de Bitcoin gasta demasiada electricidad y daña el planeta!"
            <p className="ml-4 italic text-muted-foreground">
              <strong>Respuesta:</strong> Este es un debate complejo. La Prueba de Trabajo (PoW) consume energía A PROPÓSITO; es el "costo" de la seguridad inquebrantable de la red. Esa energía no es "desperdiciada", sino usada para asegurar un libro de contabilidad global inmutable. Comparado con la energía que consume el sistema financiero tradicional (bancos, cajeros, seguridad, impresión de dinero), la diferencia no es tan abismal como a veces se pinta. Además, un porcentaje creciente de la minería de Bitcoin utiliza energías renovables, y la minería puede incentivar el uso de energía que de otra forma se desperdiciaría. Se considera el costo de tener dinero incorruptible, libre de la impresión infinita que sí daña el medio ambiente a largo plazo.
            </p>
          </li>
        </ul>
        <p>
          Entender estas críticas y las respuestas desde la comunidad de Bitcoin es crucial para tener una visión completa y no caer en la desinformación.
        </p>
      </>
    )
  },
  {
    title: "3.4. El Ruido de las 'Altcoins': ¿Por Qué Enfocarse en Bitcoin?",
    content: (
      <>
        <p className="mb-4">
          Después de Bitcoin, ¡explotó la creación de miles de otras criptomonedas! Se les llama <strong>"Altcoins"</strong> (alternativas a Bitcoin). Algunas buscan ser "mejores" que Bitcoin (más rápidas, más baratas, con más funcionalidades), otras tienen propósitos diferentes (plataformas para crear apps, tokens de utilidad, etc.).
        </p>
        <p className="mb-4 font-semibold">Un Vistazo Rápido a Algunas Altcoins Populares:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            <strong>Ethereum (ETH):</strong> La segunda más grande. No solo dinero, es una plataforma para "contratos inteligentes" y apps descentralizadas (DeFi, NFTs). Cambió su sistema de seguridad a "Prueba de Participación" (Proof-of-Stake - PoS), que consume menos energía, pero es más centralizado.
          </li>
          <li>
            <strong>Litecoin (LTC):</strong> Creada como una versión "ligera" y más rápida de Bitcoin. A menudo llamada la "plata digital" frente al "oro digital" de Bitcoin.
          </li>
          <li>
            <strong>Monero (XMR):</strong> Enfocada en la privacidad. Las transacciones son mucho más difíciles de rastrear que en Bitcoin.
          </li>
          <li>
            <strong>Stablecoins (USDT, USDC, etc.):</strong> Criptomonedas cuyo valor está atado a otro activo (como el dólar estadounidense). Buscan reducir la volatilidad. Son útiles para comerciar o guardar valor sin las oscilaciones de Bitcoin, pero a menudo son centralizadas y dependen de la entidad que las emite.
          </li>
        </ul>
        <p className="mb-4">
          Aunque algunas altcoins tienen usos interesantes, es crucial entender por qué en Alpaca Educa nos enfocamos principalmente en Bitcoin, especialmente para empezar:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 font-semibold">
          <li>
            Descentralización Real: La mayoría de las altcoins no alcanzan el nivel de descentralización de Bitcoin, haciéndolas más vulnerables a controles y censura por parte de sus creadores o grandes poseedores.
          </li>
          <li>
            Seguridad Probada: Bitcoin lleva más de una década funcionando sin fallas en su red principal, protegiendo billones en valor. Su Prueba de Trabajo es costosa, pero es lo que garantiza su seguridad sin precedentes.
          </li>
          <li>
            Escasez Verdadera: Solo 21 millones. Muchas altcoins tienen inflación, o sus creadores pueden cambiar las reglas de emisión.
          </li>
          <li>
            El Objetivo Principal: Mientras muchas altcoins buscan ser "mejores pagos" o plataformas, Bitcoin se enfoca en el objetivo fundamental de ser DINERO SANO, una alternativa al dinero fíat que puede ser inflacionario y controlado.
          </li>
        </ul>
        <p>
          El mundo de las altcoins es vasto y complejo, a menudo lleno de proyectos especulativos. Comprender Bitcoin a fondo es la base sólida antes de explorar otras criptomonedas, si ese es tu interés. Bitcoin es la revolución monetaria; muchas altcoins son experimentos o herramientas con otros propósitos (¡y otros riesgos!).
        </p>
         {/* Marcador para Enlace a Recurso sobre Altcoins vs Bitcoin */}
         <p className="mt-4 italic text-sm text-center text-muted-foreground">
          📊 ¿Quieres saber más sobre las diferencias clave entre Bitcoin y algunas Altcoins populares? Aquí podríamos tener un recurso adicional. 📊
         </p>
      </>
    )
  }
];

const interactionAndAudiovisualContent = [
  {
    title: "5.1. Quizzes y Trivias: Refuerza lo Aprendido Jugando",
    content: (
      <>
        <p className="mb-4">
          ¿Listo para poner a prueba tu conocimiento? 💪 Nuestros <strong>Quizzes y Trivias Interactivas</strong> están diseñados para ayudarte a consolidar los conceptos clave de cada sección. Son divertidos, rápidos y te dan retroalimentación instantánea para que sepas dónde necesitas repasar.
        </p>
        <p className="mb-4">
          Cada módulo de contenido podría tener un quiz asociado. ¡Es una excelente manera de asegurarte de que has entendido antes de pasar al siguiente tema!
        </p>
        {/* Marcador para Integración de Quiz */}
        <p className="mt-4 italic text-sm text-center text-muted-foreground">
          🧠 Aquí se integraría un componente de quiz interactivo para esta sección. 🧠
        </p>
      </>
    ),
  },
  {
    title: "5.2. Simulador de Wallet Interactivo: Aprende Haciendo",
    content: (
      <>
        <p className="mb-4">
          ¡La mejor forma de entender las billeteras es usándolas! 📱 Nuestro <strong>Simulador de Wallet</strong> te permitirá experimentar con una billetera de Bitcoin en un entorno seguro y sin riesgos.
        </p>
        <p className="mb-4">
          Podrás:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Crear una billetera "de juguete".</li>
          <li>Generar direcciones de recepción.</li>
          <li>Recibir "bitcoins de prueba" en tu billetera simulada.</li>
          <li>Hacer tu primera transacción simulada a otra dirección.</li>
          <li>Entender la diferencia entre claves públicas y privadas de forma práctica.</li>
        </ul>
        <p>
          ¡Es una herramienta fantástica para ganar confianza antes de manejar bitcoins reales!
        </p>
        {/* Marcador para Integración de Simulador de Wallet */}
        <p className="mt-4 italic text-sm text-center text-muted-foreground">
           वॉलेट Aquí se integraría un componente de simulador de wallet interactivo.  वॉलेट
        </p>
      </>
    ),
  },
   {
    title: "5.3. Contenido Audiovisual y Multimedia: Haz tu Aprendizaje Dinámico",
    content: (
      <>
         <p className="mb-4">
            ¡A veces una imagen (o un video) dice más que mil palabras! 🎬 Hemos seleccionado y enlazaremos una variedad de recursos multimedia para complementar tu aprendizaje:
         </p>
          <p className="mb-4 font-semibold">Videos Recomendados:</p>
         <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
                <strong>Videos Explicativos Cortos:</strong> Animaciones o tutoriales rápidos que desglosan conceptos complejos de forma visual.
            </li>
             <li>
                <strong>Canales de YouTube para Principiantes:</strong>
             </li>
               <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><a href="https://www.youtube.com/c/btcenespanol" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">BTC en Español</a>: Explicaciones claras y detalladas.</li>
                  <li><a href="https://www.youtube.com/@ElClubDeInversion" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">El Club de Inversión</a>: Cursos gratuitos y guías completas.</li>
                  <li><a href="https://www.youtube.com/@erikaespinal" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Erika Espinal - Bitcoin y Criptomonedas</a>: Enfoque práctico y tutoriales.</li>
               </ul>
              <li>
                 <strong>Playlists para Empezar desde Cero:</strong>
              </li>
         </ul>
         <p className="mb-4">
            Explora estos recursos para diferentes perspectivas y formatos de aprendizaje. Aquí tienes algunos enlaces recomendados:
         </p>
         <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
                Andreas Antonopoulos - Canal de YouTube (en inglés, con muchas charlas subtituladas): <a href="https://www.youtube.com/user/aantonop" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://www.youtube.com/user/aantonop</a>
            </li>
             <li>
                Introducción a Bitcoin (Playlist de BTC en Español): <a href="https://www.youtube.com/playlist?list=PL5SSph68Ohvb49c3Od2mJRnqQ1bwWYMM6" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://www.youtube.com/playlist?list=PL5SSph68Ohvb49c3Od2mJRnqQ1bwWYMM6</a>
            </li>
            <li>
                Curso de Criptomonedas GRATIS (Playlist de Jose Navarro DAI): <a href="https://www.youtube.com/playlist?list=PLpeyFKIeKP15dSDnnmjJjQK6DDscCOXHs" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://www.youtube.com/playlist?list=PLpeyFKIeKP15dSDnnmjJjQK6DDscCOXHs</a>
            </li>
             <li>
                 Documental 'Banking on Bitcoin': <a href="https://www.youtube.com/watch?v=tmYf6dJ602k" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://www.youtube.com/watch?v=tmYf6dJ602k</a> (Verificar disponibilidad y derechos en tu región)
            </li>
             <li>
                Charla de Andreas Antonopoulos 'La Internet del Dinero': <a href="https://www.youtube.com/watch?v=jo0k7GzLwOU" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://www.youtube.com/watch?v=jo0k7GzLwOU</a>
             </li>
         </ul>
         <p>
            ¡Disfruta explorando estos recursos visuales y auditivos!
         </p>
      </>
    ),
  },
];

const resourcesAndCommunityContent = [
    {
        title: "6.1. Recursos Descargables para Llevar Contigo",
        content: (
            <>
                <p className="mb-4">
                    ¡El aprendizaje no tiene por qué quedarse en la pantalla! 📚 Estamos preparando una serie de <strong>recursos descargables</strong> para que puedas consultarlos sin conexión, compartirlos o simplemente tener una referencia rápida a mano.
                </p>
                <p className="mb-4">
                    Imagina tener acceso a:
                </p> {/* Añadido el párrafo */}
                 <ul className="list-disc list-inside space-y-2 mb-4"> {/* Movida la lista aquí */}
                    <li><strong>Infografías Clave:</strong> Resúmenes visuales de conceptos complejos (blockchain, minería, etc.).</li> {/* Movido el item aquí */}
                    <li><strong>Infografías Clave:</strong> Resúmenes visuales de conceptos complejos (blockchain, minería, etc.).</li>
                    <li>
                        <strong>Cómics y Novelas Gráficas:</strong> ¡Sí, cómics! Aprender sobre Bitcoin de una forma súper divertida. Aunque no podemos ofrecer los cómics completos aquí por derechos, puedes explorar títulos como 'Bitcoin: La caza de Satoshi Nakamoto'.
                        <ul className="list-disc list-inside ml-4 mt-2">
                           <li>Información sobre 'Bitcoin: La caza de Satoshi Nakamoto': <a href="https://malpasoycia.es/libreria/bitcoin/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Malpaso y Cía.</a></li>
                           <li>Reseña de 'Mr. Meta' (otro cómic): <a href="https://www.zonanegativa.com/mr-meta/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Zona Negativa</a></li>
                        </ul>
                    </li> {/* Movido el item aquí */}
                     <li><strong>Galerías de Memes y Arte:</strong> Un espacio para el humor y la creatividad de la comunidad.</li> {/* Agregado el item aquí */}

                    <li><strong>Glosario de Términos Cripto:</strong> Un diccionario amigable para que no te pierdas con la jerga.</li>
                    <li><strong>Checklist de Seguridad Esencial:</strong> Una guía paso a paso para proteger tus bitcoins y tu información.</li>
                </ul>
                <p>
                    Estos recursos están pensados para ser herramientas prácticas en tu viaje hacia la soberanía financiera.
                </p>
                {/* Marcador para Sección de Descargas */}
                <p className="mt-4 italic text-sm text-center text-muted-foreground">
                    📥 Aquí se mostrarían los enlaces o miniaturas para descargar los recursos disponibles (infografías, glosario, checklist). 📥
                </p>
            </>
        ),
    },
    {
        title: "6.2. Fomentando la Comunidad: Comparte y Pregunta",
        content: (
            <>
                <p className="mb-4">
                    No estás solo en este viaje. ¡La comunidad es una parte vital del ecosistema Bitcoin! Queremos crear un espacio seguro y constructivo para que interactúes con otros exploradores.
                </p>
                <p className="mb-4">
                    Nuestra propuesta incluye:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>Sistema de Comentarios en Cada Sección:</strong> ¿Una duda sobre un concepto? ¿Quieres compartir una idea? Deja un comentario directo en la sección correspondiente. ¡Otros usuarios o moderadores podrán ayudarte!
                    </li>
                    <li>
                        <strong>Foro o Grupo de Discusión Moderado:</strong> Para conversaciones más profundas, debates sobre noticias, o compartir experiencias. Un espacio dedicado a construir conocimiento juntos.
                    </li>
                </ul>
                <p className="mb-4">
                    La clave de nuestra comunidad será una <strong>moderación activa y estricta</strong>. Queremos un ambiente libre de estafas, desinformación y toxicidad. La prioridad es la seguridad y el aprendizaje honesto. ¡Un espacio donde puedas preguntar sin miedo y recibir ayuda real!
                </p>
                <p>
                    ¡Únete a la conversación y sé parte de la comunidad Alpaca Educa!
                </p>
                {/* Marcador para Integración de Comentarios/Foro */}
                <p className="mt-4 italic text-sm text-center text-muted-foreground">
 💬 Aquí se integrarían los componentes de comentarios o un enlace al foro/grupo de discusión. 💬
                </p>
                {/* Envuelto el contenido de texto plano en una etiqueta <p> */}
 <p className="mt-4 italic text-sm text-center text-muted-foreground">
 🖼️ Fuentes de Imágenes e Ilustraciones Gratuitas:
 <ul className="list-disc list-inside ml-4 mt-2">
 <li><a href="https://www.freepik.es/fotos-vectores-gratis/bitcoin" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Freepik - Bitcoin</a></li>
 <li><a href="https://unsplash.com/es/s/fotos/cryptocurrency" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Unsplash - Cryptocurrency</a></li>
 <li><a href="https://www.flaticon.es/iconos-gratis/bitcoin" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Flaticon - Iconos de Bitcoin</a></li>
 </ul>
                </p> {/* Agregado el marcador para memes e imágenes */}
                {/* Envuelto el contenido de texto plano en una etiqueta <p> */}
 <p className="mt-4 italic text-sm text-center text-muted-foreground">
 😂 Para Memes sobre Bitcoin y Cripto, explora redes sociales con hashtags como #cryptomemes, #bitcoinmemes, #memescripto, o busca en galerías como:
 <ul className="list-disc list-inside ml-4 mt-2">
 <li><a href="https://www.shutterstock.com/es/search/crypto-memes" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Shutterstock - Crypto Memes</a></li>
 </ul>
                </p>
            </>
        ),
    },

];

const architectureAndBeginnerJourneyContent = [
  {
    title: "4.1. Arquitectura de la Experiencia de Aprendizaje: Tu Viaje Guiado",
    content: (
      <>
        <p className="mb-4">
          Hemos diseñado Alpaca Educa para que tu viaje de aprendizaje en el universo Bitcoin sea emocionante, claro y efectivo. La arquitectura del sitio está pensada para guiarte, estés donde estés en tu conocimiento.
        </p>
        <p className="mb-4 font-semibold">Estructura del Sitio y Navegación Temática:</p>
        <p className="mb-4">
          Todo el contenido está organizado por temas clave (como los que ves en las pestañas de arriba: Fundamentos, Historia, Cultura, Uso Práctico y Seguridad). Puedes explorar cada tema a tu propio ritmo, profundizando en lo que más te interese. Usamos un sistema de acordeón para que puedas abrir y cerrar secciones fácilmente y concentrarte en lo importante.
        </p>
        <p className="mb-4 font-semibold">El Viaje del Principiante: Tu Camino de Aprendizaje Guiado:</p>
        <p className="mb-4">
          Si eres nuevo, ¡no te preocupes por dónde empezar! Tenemos un <strong>"Viaje del Principiante"</strong> diseñado para ti. Es un camino paso a paso, cuidadosamente secuenciado, que te lleva de la mano por los conceptos fundamentales en el orden más lógico y fácil de entender. Es como un mapa del tesoro 🗺️ que te guía para construir una base sólida sin sentirte abrumado.
        </p>
        <p>
          Este viaje te presentará la información en pequeñas dosis, reforzada con actividades y resúmenes para asegurar que absorbas lo esencial antes de pasar al siguiente nivel. ¡Solo sigue el camino y te convertirás en un experto poco a poco!
        </p>
        {/* Marcador para el Viaje del Principiante interactivo */}
        <p className="mt-4 italic text-sm text-center text-muted-foreground">
          ➡️ ¡Haz clic en \"Inicia tu Misión\" para comenzar tu Viaje del Principiante guiado y desbloquear cada paso a medida que avanzas! ⬅️
        </p>
      </>
    )
  }
]; // Cierre de architectureAndBeginnerJourneyContent

const securityContent = [ // Renombrado a securityContent
    {
        title: "7.1. La Regla de Oro: 'Not Your Keys, Not Your Coins'", // Actualizado título
        content: "Si tus criptomonedas están en un exchange (plataforma de intercambio), no tienes el control total. La plataforma las custodia por ti. Para una verdadera soberanía, transfiere tus fondos a una billetera donde solo tú controles la clave privada (autocustodia)."
    },
    {
        title: "7.2. Tu Frase Semilla: La Llave Maestra de tu Tesoro", // Actualizado título
        content: "Tu frase de recuperación (12 o 24 palabras) es la copia de seguridad de todos tus fondos. Escríbela en papel o metal, guárdala en un lugar secreto y seguro (a prueba de fuego y agua si es posible) y NUNCA la compartas con nadie ni la guardes en un dispositivo conectado a internet. Perderla es perder tu dinero para siempre."
    },
    {
        title: "7.3. El Manual del Detective de Estafas (SCAMs)", // Actualizado título
        content: "Aprende a identificar las trampas más comunes: 1) Falsos regalos o duplicadores ('envía 1 BTC y recibe 2'). 2) Phishing: correos o sitios web falsos que imitan a plataformas reales para robar tus contraseñas. 3) Soporte técnico falso que te pide tu frase semilla. ¡Nadie legítimo te pedirá jamás tu frase semilla!"
    },
    {
        title: "7.4. Entendiendo la Volatilidad: El Sube y Baja de Bitcoin", // Actualizado título
        content: "El precio de Bitcoin es extremadamente volátil. No inviertas más de lo que estás dispuesto a perder. La volatilidad puede traer grandes ganancias, pero también grandes pérdidas. Es crucial tener una perspectiva a largo plazo (HODL) y no entrar en pánico por las caídas del mercado."
    },
    {
        title: "7.5. Checklist de Seguridad Definitivo", // Actualizado título
        content: "1. Usa la autenticación de dos factores (2FA) en todos tus intercambios. 2. Utiliza contraseñas fuertes y únicas. 3. Considera una billetera de hardware (cold wallet) para almacenar cantidades significativas. 4. Mantén tu software de billetera actualizado. 5. Sé escéptico y siempre haz tu propia investigación (DYOR)."
    }
]; // Cierre de securityContent

// Contenido consolidado de comunidad y recursos, si fuera necesario.
// Como ya tenemos 'resourcesAndCommunityContent', podríamos no necesitar este
// const communityAndResources = [
//     // Combinar contenido relevante de community y resources aquí si se necesita
// ];

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

export default function BitcoinUniverseGuide() {
  const [showJourney, setShowJourney] = useState(false);

  if (showJourney) {
    return <BeginnerJourney onBack={() => setShowJourney(false)} />;
  }

  return (
    <div className="max-w-4xl mx-auto">
        <div className="text-center pb-8 mb-8">
            <h1 className="text-4xl font-bold font-headline mb-4">El Universo Bitcoin</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                Bienvenido a tu centro de mando para la soberanía financiera. Aquí no solo aprenderás sobre Bitcoin, sino que entenderás por qué es la herramienta de libertad más poderosa de nuestro tiempo. Prepárate para unirte a la revolución.
            </p>
            <Button size="lg" className="text-lg" onClick={() => setShowJourney(true)}>
                <Rocket className="mr-2 h-5 w-5" />
                Inicia tu Misión
            </Button> {/* Botón para iniciar el viaje guiado */}
            <Separator className="mt-8"/> {/* Separador visual */}
        </div>

        <Tabs defaultValue="fundamentals" className="w-full">
            <TabsList className="grid w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 mb-4"> {/* Ajustado gap para mejor visualización en diferentes tamaños */}
                <TabsTrigger value="fundamentals"><Lightbulb className="mr-2 h-4 w-4"/>Fundamentos</TabsTrigger>
                <TabsTrigger value="history"><Scroll className="mr-2 h-4 w-4"/>Historia</TabsTrigger>
                <TabsTrigger value="ecosystem"><Users className="mr-2 h-4 w-4"/>Ecosistema Humano</TabsTrigger>
                 <TabsTrigger value="architecture"><Rocket className="mr-2 h-4 w-4"/>Arquitectura & Viaje</TabsTrigger>
                 <TabsTrigger value="interaction"><HandCoins className="mr-2 h-4 w-4"/>Interacción</TabsTrigger>
                <TabsTrigger value="resources"><Scroll className="mr-2 h-4 w-4"/>Recursos & Comunidad</TabsTrigger>
                <TabsTrigger value="security"><Shield className="mr-2 h-4 w-4"/>Seguridad</TabsTrigger>
            </TabsList> {/* Cierre de TabsList */}
            <TabsContent value="fundamentals">
                <SectionContent guides={fundamentalsContent} />
            </TabsContent>
            <TabsContent value="history">
                <SectionContent guides={historyContent} />
            </TabsContent>
             <TabsContent value="ecosystem">
                <SectionContent guides={humanEcosystemContent} />
            </TabsContent>
             <TabsContent value="architecture">
                <SectionContent guides={architectureAndBeginnerJourneyContent} />
             </TabsContent>
             <TabsContent value="interaction">
                <SectionContent guides={interactionAndAudiovisualContent} />
             </TabsContent>
             <TabsContent value="resources">
                {/* Usamos resourcesAndCommunityContent para la pestaña de Recursos y Comunidad */}
                <SectionContent guides={resourcesAndCommunityContent} />
             </TabsContent>
             <TabsContent value="security">
                <SectionContent guides={securityContent} /> {/* Usar securityContent para la pestaña de Seguridad */}
            </TabsContent>
        </Tabs>
    </div>
  );
}
