import Quiz from '@/components/Quiz';
import React from 'react';
import CommentSection from '@/components/CommentSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const QueEsBitcoinPage = () => {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-3xl font-bold mb-4">¡Hola, Bitcoin! - La Aventura Comienza</CardTitle>
            {/* Video animado corto y amigable */}
            <CardDescription className="mb-4">
              ¡Bienvenido/a al increíble mundo de Bitcoin!
            </CardDescription>
            <CardDescription className="mb-4">
              ¿Alguna vez has pensado en cómo funciona el dinero? Usamos billetes, monedas y tarjetas todos los días, pero rara vez nos detenemos a pensar en qué es realmente el dinero.
            </CardDescription>
            <CardDescription className="mb-4">
              Imagina por un momento un dinero que no pertenece a ningún país, que no lo controla ningún banco y que puedes enviar a cualquier persona en cualquier parte del mundo de forma casi instantánea, sin pedir permiso a nadie.
            </CardDescription>
            <CardDescription className="mb-4">
              ¡Eso es Bitcoin!
            </CardDescription>
            <CardDescription className="mb-4">
              Bitcoin es una <strong>moneda digital</strong>, lo que significa que no puedes tocarla como una moneda o un billete, ya que vive exclusivamente en el mundo de internet. Es como el dinero que usas para comprar en línea, pero con una gran diferencia: es <strong>descentralizado</strong>.
            </CardDescription>
            <CardDescription className="mb-4">
              "Descentralizado" suena complicado, pero es muy simple: significa que no hay una autoridad central (como un banco o un gobierno) que lo controle todo. En lugar de eso, Bitcoin funciona gracias a una red de miles de computadoras en todo el mundo que colaboran para mantenerlo seguro y funcionando.
            </CardDescription>
            <CardDescription className="mb-4">
              Piensa en Bitcoin como el "dinero de internet": una forma de valor que es nativa del mundo digital, diseñada para un mundo global y conectado.
            </CardDescription>
            <div className="mb-4">
              <iframe loading="lazy"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLPQwGV1yk6AS1xCOjEw7jX-jWspVqK-sf"
                title="¿Qué es Bitcoin? Explicación para principiantes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="mb-4">
                <img loading="lazy"
                  src="https://images.unsplash.com/photo-1614353394941-2c76925999c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Bitcoin"
                  className="mx-auto rounded-lg"
                />
                <p className="text-sm text-gray-500">
                  Fuente: Unsplash - Bitcoin
                </p>
              </div>
              <p className="text-sm text-gray-500">
                Fuente: YouTube - ¿Qué es Bitcoin? Explicación para principiantes
              </p>
            </div>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Bitcoin vs. Dinero Tradicional: ¿Cuáles son las diferencias?</CardTitle>
            <CardDescription className="mb-4">
              A primera vista, pueden parecer similares, pero Bitcoin y el dinero que usamos todos los días (conocido como dinero "fiduciario", como el dólar, el euro o el peso) tienen diferencias clave. Aquí te las mostramos de forma sencilla:
            </CardDescription>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="px-4 py-2">Característica</TableHead>
                  <TableHead className="px-4 py-2">Dinero Tradicional (Dólar, Euro, etc.)</TableHead>
                  <TableHead className="px-4 py-2">Bitcoin</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border px-4 py-2">¿Quién lo controla?</TableCell>
                  <TableCell className="border px-4 py-2">Los gobiernos y los bancos centrales.</TableCell>
                  <TableCell className="border px-4 py-2">Nadie y todos. Es una red descentralizada.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border px-4 py-2">¿Cómo se crea?</TableCell>
                  <TableCell className="border px-4 py-2">Los bancos centrales lo imprimen según sus políticas.</TableCell>
                  <TableCell className="border px-4 py-2">Se "mina" a través de computadoras que resuelven problemas matemáticos.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border px-4 py-2">Cantidad total</TableCell>
                  <TableCell className="border px-4 py-2">Ilimitada. Se puede imprimir más en cualquier momento.</TableCell>
                  <TableCell className="border px-4 py-2">Limitada. Solo existirán 21 millones de bitcoins.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border px-4 py-2">Transacciones</TableCell>
                  <TableCell className="border px-4 py-2">Pasan a través de bancos y procesadores de pago (intermediarios).</TableCell>
                  <TableCell className="border px-4 py-2">Son directas, de persona a persona (peer-to-peer).</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border px-4 py-2">Transparencia</TableCell>
                  <TableCell className="border px-4 py-2">Las transacciones son privadas y solo las ven los bancos.</TableCell>
                  <TableCell className="border px-4 py-2">Todas las transacciones son públicas y se registran en la blockchain.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border px-4 py-2">Accesibilidad</TableCell>
                  <TableCell className="border px-4 py-2">Necesitas una cuenta bancaria.</TableCell>
                  <TableCell className="border px-4 py-2">Solo necesitas una conexión a internet y un monedero digital.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border px-4 py-2">Fronteras</TableCell>
                  <TableCell className="border px-4 py-2">Está limitado por países y tipos de cambio.</TableCell>
                  <TableCell className="border px-4 py-2">Es global. No tiene fronteras.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">¡A Prueba de Mitos! Verdadero o Falso</CardTitle>
            <CardDescription className="mb-4">
              ¿Listo/a para poner a prueba lo que acabas de aprender? Desafiemos algunos de los mitos más comunes sobre Bitcoin.
            </CardDescription>
            {/* Elemento interactivo donde el usuario selecciona Verdadero o Falso para cada afirmación */}
            <div className="mb-4">
              <CardDescription className="font-bold">1. ¿Necesito comprar un Bitcoin entero para poder usarlo?</CardDescription>
              <CardDescription><strong>Respuesta:</strong> ¡Falso! Cada Bitcoin se puede dividir en 100 millones de unidades más pequeñas llamadas "satoshis". Puedes comprar o usar una fracción muy pequeña de un Bitcoin.</CardDescription>
            </div>
            <div className="mb-4">
              <CardDescription className="font-bold">2. ¿Bitcoin es completamente anónimo?</CardDescription>
              <CardDescription><strong>Respuesta:</strong> ¡Falso! Aunque tu nombre real no está directamente vinculado a tus transacciones, todas las operaciones son públicas y pueden ser rastreadas en la blockchain. Por eso se dice que es "pseudónimo", no anónimo.</CardDescription>
            </div>
            <div className="mb-4">
              <CardDescription className="font-bold">3. ¿Bitcoin es ilegal?</CardDescription>
              <CardDescription><strong>Respuesta:</strong> ¡Falso! En la gran mayoría de los países del mundo, es perfectamente legal comprar, vender y poseer Bitcoin. Sin embargo, su regulación puede variar mucho de un lugar a otro.</CardDescription>
            </div>
            <div>
              <CardDescription className="font-bold">4. ¿Bitcoin es solo para expertos en tecnología?</CardDescription>
              <CardDescription><strong>Respuesta:</strong> ¡Falso! Aunque su tecnología es compleja, usar Bitcoin hoy en día es cada vez más fácil gracias a aplicaciones y servicios muy intuitivos. ¡Si sabes usar una app en tu teléfono, puedes usar Bitcoin!</CardDescription>
            </div>
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
                  question: "¿Qué es Bitcoin?",
                  options: [
                    "Una moneda física",
                    "Una moneda digital descentralizada",
                    "Una empresa de tecnología",
                    "Un banco central",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "Bitcoin es una moneda digital descentralizada, lo que significa que no está controlada por ningún banco central o gobierno.",
                },
                {
                  question: "¿Cuál es la cantidad máxima de Bitcoins que existirán?",
                  options: ["1 millón", "10 millones", "21 millones", "Ilimitada"],
                  correctAnswer: 2,
                  explanation:
                    "Solo existirán 21 millones de Bitcoins. Esta es una característica clave que lo diferencia del dinero tradicional.",
                },
                {
                  question: "¿Quién controla Bitcoin?",
                  options: [
                    "El gobierno de Estados Unidos",
                    "El Banco Central Europeo",
                    "Una red descentralizada de computadoras",
                    "La empresa Bitcoin",
                  ],
                  correctAnswer: 2,
                  explanation:
                    "Bitcoin es controlado por una red descentralizada de computadoras en todo el mundo, lo que lo hace resistente a la censura y al control de una sola entidad.",
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

export default QueEsBitcoinPage;