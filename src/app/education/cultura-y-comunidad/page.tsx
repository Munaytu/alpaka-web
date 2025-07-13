import React from 'react';
import Quiz from '@/components/Quiz';
import CommentSection from '@/components/CommentSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const CulturaYComunidadPage = () => {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-3xl font-bold mb-4">Cultura y Comunidad: El Ecosistema</CardTitle>
            <CardDescription className="mb-4">
              En esta sección, exploraremos el lado humano de Bitcoin, incluyendo la jerga de la comunidad, los memes, el arte, las perspectivas de figuras influyentes y un análisis equilibrado de las críticas.
            </CardDescription>
            <div className="mb-4">
              <iframe loading="lazy"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLPQwGV1yk6ASV-jN_K9L_XJia7sZ-K-PM"
                title="Cultura y Comunidad de Bitcoin"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p className="text-sm text-gray-500">
                Fuente: YouTube - Cultura y Comunidad de Bitcoin
              </p>
            </div>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Jerga de la Comunidad</CardTitle>
            <CardDescription className="mb-4">
              La comunidad Bitcoin tiene su propia jerga y expresiones únicas. Aquí hay algunos ejemplos:
            </CardDescription>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>HODL:</strong> Mantener tus bitcoins a largo plazo, sin importar las fluctuaciones del mercado.
              </li>
              <li>
                <strong>Satoshi:</strong> La unidad más pequeña de Bitcoin (0.00000001 BTC).
              </li>
              <li>
            <div className="mb-4">
              <img loading="lazy"
                src="https://imgflip.com/s/meme/Bitcoin.jpg"
                alt="Bitcoin Meme 1"
                className="mx-auto rounded-lg"
              />
              <p className="text-sm text-gray-500">
                Fuente: imgflip.com - Bitcoin Meme
              </p>
            </div>
            <div className="mb-4">
              <img loading="lazy"
                src="https://i.redd.it/ymhn16qzx9481.jpg"
                alt="Bitcoin Meme 2"
                className="mx-auto rounded-lg"
              />
              <p className="text-sm text-gray-500">
                Fuente: reddit.com - Bitcoin Meme
              </p>
            </div>
                <strong>Moon:</strong> Un aumento significativo en el precio de Bitcoin.
              </li>
              <li>
                <strong>REKT:</strong> Arruinado debido a una mala inversión.
              </li>
            </ul>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Memes</CardTitle>
            <CardDescription className="mb-4">
              Los memes son una parte importante de la cultura Bitcoin. Se utilizan para expresar ideas, compartir humor y construir comunidad.
            </CardDescription>
            {/* Agregar ejemplos de memes de Bitcoin */}
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Arte</CardTitle>
            <CardDescription className="mb-4">
              Bitcoin ha inspirado a muchos artistas a crear obras de arte originales.
            </CardDescription>
            {/* Agregar ejemplos de arte de Bitcoin */}
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Perspectivas de Figuras Influyentes</CardTitle>
            <CardDescription className="mb-4">
              Muchas figuras influyentes han expresado sus opiniones sobre Bitcoin.
            </CardDescription>
            {/* Agregar citas de figuras influyentes sobre Bitcoin */}
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Críticas</CardTitle>
            <CardDescription className="mb-4">
              Bitcoin también ha recibido críticas por su volatilidad, su consumo de energía y su uso en actividades ilícitas.
            </CardDescription>
            <CardDescription className="mb-4">
              Es importante tener en cuenta estas críticas al evaluar Bitcoin.
            </CardDescription>
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
                  question: "¿Qué significa HODL en la comunidad Bitcoin?",
                  options: [
                    "Comprar Bitcoins rápidamente",
                    "Vender Bitcoins rápidamente",
                    "Mantener tus Bitcoins a largo plazo",
                    "Intercambiar Bitcoins por otras criptomonedas",
                  ],
                  correctAnswer: 2,
                  explanation:
                    "HODL significa mantener tus Bitcoins a largo plazo, sin importar las fluctuaciones del mercado.",
                },
                {
                  question: "¿Qué es un Satoshi?",
                  options: [
                    "El creador de Bitcoin",
                    "La unidad más pequeña de Bitcoin",
                    "Un tipo de monedero de Bitcoin",
                    "Un exchange de criptomonedas",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "Un Satoshi es la unidad más pequeña de Bitcoin (0.00000001 BTC).",
                },
                {
                  question: "¿Qué significa 'Moon' en la comunidad Bitcoin?",
                  options: [
                    "Un colapso del precio de Bitcoin",
                    "Un aumento significativo en el precio de Bitcoin",
                    "Un nuevo tipo de Bitcoin",
                    "Un evento anual de la comunidad Bitcoin",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "Moon significa un aumento significativo en el precio de Bitcoin.",
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

export default CulturaYComunidadPage;