import React from 'react';
import Quiz from '@/components/Quiz';
import CommentSection from '@/components/CommentSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const LaHistoriaDeBitcoinPage = () => {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-3xl font-bold mb-4">Los Inicios de Bitcoin: De un Misterio a una Pizza de Millones</CardTitle>
            <CardDescription className="mb-4">¡Prepárate para un viaje en el tiempo! Vamos a explorar los orígenes de Bitcoin, una historia llena de misterio, ingenio y... ¡pizza! 🍕</CardDescription>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">El Enigmático Satoshi Nakamoto: ¿Un Genio o un Fantasma?</CardTitle>
            <CardDescription className="mb-4">
              La historia de Bitcoin comienza con una figura tan misteriosa como fascinante: <strong>Satoshi Nakamoto</strong>. Nadie sabe a ciencia cierta quién es. ¿Es una persona? ¿Un grupo de programadores superinteligentes? ¿Un viajero del tiempo? 🤔 ¡Las teorías son tan variadas como divertidas!
            </CardDescription>
            <CardDescription className="mb-4">
              Lo que sí sabemos es que en 2008, en medio de una crisis financiera mundial, este nombre apareció en internet publicando un documento que cambiaría el mundo: el "whitepaper" de Bitcoin. En este, describía un "Sistema de Efectivo Electrónico de Usuario a Usuario". En resumen, una forma de enviar dinero por internet sin necesidad de bancos. ¡Una idea revolucionaria!
            </CardDescription>
            <CardDescription className="mb-4">
              Satoshi colaboró en línea con otros programadores durante un par de años, pero siempre manteniendo su identidad en secreto. Era conocido por su brillantez técnica y su inglés impecable (con modismos británicos, para añadir más misterio). Y tan repentinamente como apareció, en 2011, envió su último correo electrónico y se desvaneció, dejando su creación en manos de la comunidad. Se estima que Satoshi minó alrededor de un millón de bitcoins, una fortuna que, hasta el día de hoy, permanece intacta.
            </CardDescription>
            <div className="mb-4">
              <iframe loading="lazy"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLPQwGV1yk6AQ9bwU-j4NArcbk-GeRt9jF"
                title="La Historia de Bitcoin"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p className="text-sm text-gray-500">
                Fuente: YouTube - La Historia de Bitcoin
              </p>
            </div>
            <div className="mb-4">
              <img loading="lazy"
                src="https://images.unsplash.com/photo-1634193295622-aa5f7e102448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Satoshi Nakamoto"
                className="mx-auto rounded-lg"
              />
              <p className="text-sm text-gray-500">
                Fuente: Unsplash - Satoshi Nakamoto
              </p>
            </div>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">El Bloque Génesis: El Big Bang de Bitcoin</CardTitle>
            <CardDescription className="mb-4">
              El <strong>3 de enero de 2009</strong>, Satoshi Nakamoto minó el primer bloque de la cadena de Bitcoin, conocido como el <strong>Bloque Génesis</strong> o Bloque 0. Este no es un bloque cualquiera; es el fundamento sobre el cual se ha construido toda la red de Bitcoin.
            </CardDescription>
            <CardDescription className="mb-4">
              Lo más intrigante de este bloque es un mensaje que Satoshi incrustó en él para siempre:
            </CardDescription>
            <blockquote className="mb-4">
              "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"
            </blockquote>
            <CardDescription className="mb-4">
              Este titular del periódico británico <em>The Times</em> no fue una elección al azar. Es una poderosa declaración sobre la razón de ser de Bitcoin: una alternativa a un sistema financiero tradicional que, en ese momento, estaba en crisis. Fue la forma en que Satoshi dijo: "Aquí hay una nueva opción". Los 50 bitcoins generados en este bloque son, por una peculiaridad del código, imposibles de gastar, como una pieza de museo digital.
            </CardDescription>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Bitcoin Pizza Day: La Transacción Más Sabrosa (y Cara) de la Historia</CardTitle>
            <CardDescription className="mb-4">
              Ahora, hablemos de comida. El <strong>22 de mayo de 2010</strong>, un programador de Florida llamado <strong>Laszlo Hanyecz</strong> hizo historia. Tenía un montón de esos "bitcoins" que en ese momento no valían casi nada y se le antojó una pizza. Así que publicó un mensaje en un foro de internet:
            </CardDescription>
            <blockquote className="mb-4">
              "Pagaré 10,000 bitcoins por un par de pizzas... tal vez 2 grandes para que me sobre algo para el día siguiente."
            </blockquote>
            <CardDescription className="mb-4">
              Un estudiante en el Reino Unido aceptó el trato. Llamó a una pizzería de Papa John's cerca de la casa de Laszlo, pagó con su tarjeta de crédito y Laszlo le envió los 10,000 bitcoins. ¡Fue la primera vez que se usó Bitcoin para comprar un bien del mundo real!
            </CardDescription>
            <CardDescription className="mb-4">
              En ese momento, esos 10,000 bitcoins valían unos 41 dólares. Hoy, esa cantidad vale cientos de millones de dólares. 🤯 Cada 22 de mayo, la comunidad cripto celebra el <strong>"Bitcoin Pizza Day"</strong> para recordar esta legendaria transacción, ¡comiendo pizza, por supuesto!
            </CardDescription>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Hitos Clave en la Evolución de Bitcoin: ¡Al Infinito y Más Allá!</CardTitle>
            <CardDescription className="mb-4">
              Desde esa primera compra de pizza, Bitcoin ha tenido un viaje salvaje. Aquí tienes algunos de los momentos más importantes:
            </CardDescription>
            <ul className="list-disc list-inside">
              <li><strong>2008:</strong> Se publica el <strong>whitepaper</strong> de Bitcoin.</li>
              <li><strong>2009:</strong> Se mina el <strong>Bloque Génesis</strong> y se realiza la <strong>primera transacción</strong> de Bitcoin entre Satoshi y el criptógrafo Hal Finney.</li>
              <li><strong>2010:</strong> ¡El famoso <strong>Bitcoin Pizza Day</strong>! Y se funda Mt. Gox, uno de los primeros y más notorios intercambios de Bitcoin.</li>
              <li><strong>2011:</strong> El valor de un bitcoin, por primera vez, alcanza la paridad con el dólar estadounidense. <strong>1 BTC = 1 USD</strong>. ¡Y aparecen las primeras "altcoins" (criptomonedas alternativas)!</li>
              <li><strong>2013:</strong> Bitcoin experimenta su primera gran "burbuja", con su precio disparándose y luego cayendo drásticamente.</li>
              <li><strong>2017:</strong> ¡Un año de locura! El precio de Bitcoin se dispara a casi <strong>20,000 dólares</strong>, atrayendo la atención de todo el mundo.</li>
              <li><strong>2021:</strong> El Salvador se convierte en el <strong>primer país en adoptar Bitcoin como moneda de curso legal</strong>.</li>
              <li><strong>2024:</strong> Se aprueban los primeros <strong>ETFs de Bitcoin al contado</strong> en los Estados Unidos, un hito que integra aún más a Bitcoin en el sistema financiero tradicional.</li>
            </ul>
            <CardDescription className="mb-4">
              Y la historia de Bitcoin continúa escribiéndose cada día. Lo que comenzó como un experimento de un misterioso programador es ahora un fenómeno global que está redefiniendo el concepto de dinero.
            </CardDescription>
          </section>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <section>
            <CardTitle className="text-2xl font-bold mb-4">Video Relacionado</CardTitle>
            <CardDescription className="mb-4">Este video explora el intrigante mensaje oculto por Satoshi Nakamoto en el primer bloque de Bitcoin, ofreciendo una perspectiva sobre los fundamentos ideológicos de la criptomoneda.</CardDescription>
            <a href="https://www.youtube.com/watch?v=jbLZqsy1Qfg" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Mensaje Secreto de #BITCOIN [Bloque Génesis - Satoshi Nakamoto]
            </a>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Quiz</CardTitle>
            <Quiz
              questions={[
                {
                  question: "¿Quién es Satoshi Nakamoto?",
                  options: [
                    "El creador de Ethereum",
                    "El CEO de MicroStrategy",
                    "El creador anónimo de Bitcoin",
                    "Un famoso trader de Bitcoin",
                  ],
                  correctAnswer: 2,
                  explanation:
                    "Satoshi Nakamoto es el seudónimo utilizado por la persona o grupo de personas que diseñaron Bitcoin.",
                },
                {
                  question: "¿Qué evento se celebra el Bitcoin Pizza Day?",
                  options: [
                    "El lanzamiento del whitepaper de Bitcoin",
                    "La primera transacción de Bitcoin por bienes del mundo real",
                    "El día en que Bitcoin alcanzó $1,000",
                    "El halving de Bitcoin",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "El Bitcoin Pizza Day celebra el día en que Laszlo Hanyecz compró dos pizzas por 10,000 Bitcoins.",
                },
                {
                  question: "¿Qué es el Bloque Génesis?",
                  options: [
                    "El último bloque minado de Bitcoin",
                    "El primer bloque minado de Bitcoin",
                    "El bloque más grande de la blockchain de Bitcoin",
                    "Un bloque que contiene información sobre Satoshi Nakamoto",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "El Bloque Génesis es el primer bloque de la blockchain de Bitcoin, minado por Satoshi Nakamoto.",
                },
              ]}
            />
          </section>
        </CardContent>
      </Card>
      <CommentSection />
    </div>
  );
};

export default LaHistoriaDeBitcoinPage;