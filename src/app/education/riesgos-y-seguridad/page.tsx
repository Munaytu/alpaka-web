import React from 'react';
import Quiz from '@/components/Quiz';
import CommentSection from '@/components/CommentSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const RiesgosYSeguridadPage = () => {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-3xl font-bold mb-4">Riesgos y Seguridad: ¡Protégete!</CardTitle>
            <CardDescription className="mb-4">
              En esta sección, exploraremos los riesgos asociados con Bitcoin y te proporcionaremos las mejores prácticas de seguridad para proteger tus fondos.
            </CardDescription>
            <div className="mb-4">
              <iframe loading="lazy"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLPQwGV1yk6ASV0_Oa-WqEa9Jq-s26jE-N"
                title="Riesgos y Seguridad de Bitcoin"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p className="text-sm text-gray-500">
                Fuente: YouTube - Riesgos y Seguridad de Bitcoin
              </p>
            </div>
            <div className="mb-4">
              <img loading="lazy"
                src="https://images.unsplash.com/photo-1548681528-6a597a9123c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Security"
                className="mx-auto rounded-lg"
              />
              <p className="text-sm text-gray-500">
                Fuente: Unsplash - Security
              </p>
            </div>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Volatilidad</CardTitle>
            <CardDescription className="mb-4">
              El precio de Bitcoin puede ser extremadamente volátil, lo que significa que puede subir o bajar drásticamente en un corto período de tiempo. Esto puede generar ganancias significativas, pero también pérdidas importantes.
            </CardDescription>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Comprende la volatilidad:</strong> Antes de invertir en Bitcoin, asegúrate de comprender los riesgos asociados con la volatilidad.
              </li>
              <li>
                <strong>Invierte solo lo que puedas permitirte perder:</strong> No inviertas dinero que necesitas para cubrir tus gastos básicos.
              </li>
              <li>
                <strong>Diversifica tu cartera:</strong> No pongas todos tus huevos en la misma canasta. Diversifica tus inversiones para reducir el riesgo.
              </li>
            </ul>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Estafas Comunes</CardTitle>
            <CardDescription className="mb-4">
              El mundo de las criptomonedas está lleno de estafas. Es importante estar atento y tomar precauciones para evitar ser víctima de una estafa.
            </CardDescription>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Esquemas Ponzi:</strong> Prometen altos rendimientos con poco o ningún riesgo.
              </li>
              <li>
                <strong>Phishing:</strong> Intentan robar tu información personal haciéndose pasar por una entidad legítima.
              </li>
              <li>
                <strong>Malware:</strong> Programas maliciosos que pueden robar tus claves privadas o controlar tu computadora.
              </li>
            </ul>
            <CardDescription className="mb-4">
              <strong>Consejos para evitar estafas:</strong>
            </CardDescription>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Sé escéptico:</strong> Si algo suena demasiado bueno para ser verdad, probablemente lo sea.
              </li>
              <li>
                <strong>Investiga:</strong> Antes de invertir en cualquier criptomoneda, investiga a fondo el proyecto y el equipo detrás de él.
              </li>
              <li>
                <strong>Protege tu información personal:</strong> No compartas tu información personal con nadie que no conozcas y en quien no confíes.
              </li>
            </ul>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Autocustodia</CardTitle>
            <CardDescription className="mb-4">
              La autocustodia significa que eres responsable de proteger tus propias claves privadas. Esto te da control total sobre tus fondos, pero también te hace responsable de su seguridad.
            </CardDescription>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Monederos de hardware:</strong> Dispositivos físicos que almacenan tus claves privadas de forma segura.
              </li>
              <li>
                <strong>Monederos de papel:</strong> Claves privadas impresas en papel.
              </li>
            </ul>
            <CardDescription className="mb-4">
              <strong>Consejos para la autocustodia:</strong>
            </CardDescription>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Haz una copia de seguridad de tu frase semilla:</strong> La frase semilla es una lista de palabras que te permite recuperar tu monedero si lo pierdes o te lo roban.
              </li>
              <li>
                <strong>Guarda tu frase semilla en un lugar seguro:</strong> No guardes tu frase semilla en tu computadora o teléfono.
              </li>
              <li>
                <strong>Considera utilizar un monedero de hardware:</strong> Los monederos de hardware ofrecen una capa adicional de seguridad.
              </li>
            </ul>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Protección de la Frase Semilla</CardTitle>
            <CardDescription className="mb-4">
              Tu frase semilla es la clave de tu monedero Bitcoin. Si alguien obtiene acceso a tu frase semilla, puede robar tus fondos.
            </CardDescription>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>No compartas tu frase semilla con nadie:</strong> Ni siquiera con el soporte técnico de tu monedero.
              </li>
              <li>
                <strong>Guarda tu frase semilla en un lugar seguro:</strong> No guardes tu frase semilla en tu computadora o teléfono.
              </li>
              <li>
                <strong>Considera dividir tu frase semilla en varias partes:</strong> Guarda cada parte en un lugar diferente.
              </li>
            </ul>
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
                  question: "¿Qué es la volatilidad de Bitcoin?",
                  options: [
                    "La velocidad de las transacciones de Bitcoin",
                    "La fluctuación del precio de Bitcoin",
                    "La cantidad total de Bitcoins que existen",
                    "La dificultad de minar Bitcoins",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "La volatilidad de Bitcoin se refiere a la fluctuación de su precio, que puede ser alta y generar tanto ganancias como pérdidas.",
                },
                {
                  question: "¿Qué es el phishing en el contexto de Bitcoin?",
                  options: [
                    "Un tipo de monedero de Bitcoin",
                    "Un ataque para robar información personal haciéndose pasar por una entidad legítima",
                    "Un método para minar Bitcoins más rápido",
                    "Una forma de enviar Bitcoins de forma anónima",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "El phishing es un ataque que intenta robar tu información personal haciéndose pasar por una entidad legítima.",
                },
                {
                  question: "¿Qué significa autocustodia en el contexto de Bitcoin?",
                  options: [
                    "Dejar tus Bitcoins en un exchange",
                    "Ser responsable de proteger tus propias claves privadas",
                    "Usar un monedero de papel",
                    "Dividir tu frase semilla en varias partes",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "La autocustodia significa que eres responsable de proteger tus propias claves privadas.",
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

export default RiesgosYSeguridadPage;