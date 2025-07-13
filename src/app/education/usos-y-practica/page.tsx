import React from 'react';
import Quiz from '@/components/Quiz';
import WalletSimulator from '@/components/WalletSimulator';
import MiningSimulator from '@/components/MiningSimulator';
import CommentSection from '@/components/CommentSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const UsosYPracticaPage = () => {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-3xl font-bold mb-4">Usos y Práctica: ¿Cómo lo Uso?</CardTitle>
            <CardDescription className="mb-4">
              En esta sección, te guiaremos a través de los pasos para adquirir, enviar y recibir bitcoins de forma segura.
            </CardDescription>
            <div className="mb-4">
              <iframe loading="lazy"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLPQwGV1yk6ARHl3XgE8_j4mKzOaE-o-1l"
                title="¿Cómo usar Bitcoin?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p className="text-sm text-gray-500">
                Fuente: YouTube - ¿Cómo usar Bitcoin?
              </p>
            </div>
            <div className="mb-4">
              <img loading="lazy"
                src="https://images.unsplash.com/photo-1605296867304-46d6671c7862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Bitcoin Wallet"
                className="mx-auto rounded-lg"
              />
              <p className="text-sm text-gray-500">
                Fuente: Unsplash - Bitcoin Wallet
              </p>
            </div>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Adquirir Bitcoins</CardTitle>
            <CardDescription className="mb-4">
              La forma más común de adquirir bitcoins es a través de un exchange de criptomonedas como Coinbase o Kraken. Estos exchanges actúan como intermediarios, permitiéndote comprar bitcoins con dinero fiduciario (como dólares o euros).
            </CardDescription>
            <ol className="list-decimal list-inside mb-4">
              <li>
                <strong>Regístrate en un exchange:</strong> Visita el sitio web de Coinbase o Kraken y crea una cuenta. Deberás proporcionar información personal y verificar tu identidad.
              </li>
              <li>
                <strong>Verifica tu identidad:</strong> Para cumplir con las regulaciones, los exchanges requieren que verifiques tu identidad. Esto generalmente implica proporcionar una copia de tu documento de identidad y comprobante de domicilio.
              </li>
              <li>
                <strong>Deposita fondos:</strong> Una vez que tu cuenta esté verificada, puedes depositar fondos en tu cuenta. Los exchanges suelen aceptar depósitos a través de transferencia bancaria, tarjeta de crédito o débito, y otros métodos de pago.
              </li>
              <li>
                <strong>Compra bitcoins:</strong> Con fondos en tu cuenta, puedes comprar bitcoins. Simplemente busca el par de trading BTC/USD (o BTC/EUR) y realiza una orden de compra.
              </li>
            </ol>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Enviar Bitcoins</CardTitle>
            <CardDescription className="mb-4">
              Enviar bitcoins es similar a enviar un correo electrónico. Necesitas la dirección Bitcoin del destinatario y un monedero de Bitcoin.
            </CardDescription>
            <ol className="list-decimal list-inside mb-4">
              <li>
                <strong>Obtén la dirección Bitcoin del destinatario:</strong> Pídele al destinatario que te proporcione su dirección Bitcoin. Esta es una cadena alfanumérica larga que identifica su monedero.
              </li>
              <li>
                <strong>Abre tu monedero Bitcoin:</strong> Inicia sesión en tu monedero Bitcoin (ya sea en un exchange, una aplicación móvil o un monedero de hardware).
              </li>
              <li>
                <strong>Crea una transacción:</strong> Busca la opción "Enviar" o "Retirar" y crea una nueva transacción.
              </li>
              <li>
                <strong>Ingresa la dirección Bitcoin del destinatario:</strong> Pega la dirección Bitcoin del destinatario en el campo correspondiente.
              </li>
              <li>
                <strong>Ingresa la cantidad de bitcoins a enviar:</strong> Especifica la cantidad de bitcoins que deseas enviar.
              </li>
              <li>
                <strong>Confirma la transacción:</strong> Revisa cuidadosamente los detalles de la transacción y confírmala. Es posible que se te solicite ingresar tu contraseña o utilizar autenticación de dos factores.
              </li>
            </ol>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Recibir Bitcoins</CardTitle>
            <CardDescription className="mb-4">
              Recibir bitcoins es aún más sencillo que enviarlos. Solo necesitas proporcionar tu dirección Bitcoin al remitente.
            </CardDescription>
            <ol className="list-decimal list-inside mb-4">
              <li>
                <strong>Abre tu monedero Bitcoin:</strong> Inicia sesión en tu monedero Bitcoin.
              </li>
              <li>
                <strong>Encuentra tu dirección Bitcoin:</strong> Busca la opción "Recibir" o "Generar dirección" para encontrar tu dirección Bitcoin.
              </li>
              <li>
                <strong>Proporciona tu dirección Bitcoin al remitente:</strong> Copia tu dirección Bitcoin y envíasela al remitente.
              </li>
              <li>
                <strong>Espera a que se confirme la transacción:</strong> Una vez que el remitente envíe los bitcoins, deberás esperar a que la transacción se confirme en la blockchain. Esto puede tardar unos minutos o incluso horas, dependiendo de la congestión de la red.
              </li>
            </ol>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Simulador de Wallet</CardTitle>
            <WalletSimulator />
          </section>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <section className="mb-8">
            <CardTitle className="text-2xl font-bold mb-4">Simulador de Minería</CardTitle>
            <MiningSimulator />
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
                  question: "¿Cuál es la forma más común de adquirir Bitcoins?",
                  options: [
                    "Minando Bitcoins",
                    "A través de un exchange de criptomonedas",
                    "Pidiendo Bitcoins a amigos",
                    "Encontrando Bitcoins en la calle",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "La forma más común de adquirir Bitcoins es a través de un exchange de criptomonedas como Coinbase o Kraken.",
                },
                {
                  question: "¿Qué necesitas para enviar Bitcoins?",
                  options: [
                    "Tu número de seguro social",
                    "La dirección Bitcoin del destinatario",
                    "Tu número de cuenta bancaria",
                    "Una tarjeta de crédito",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "Para enviar Bitcoins, necesitas la dirección Bitcoin del destinatario y un monedero de Bitcoin.",
                },
                {
                  question: "¿Qué necesitas proporcionar para recibir Bitcoins?",
                  options: [
                    "Tu nombre completo",
                    "Tu dirección de correo electrónico",
                    "Tu dirección Bitcoin",
                    "Tu número de teléfono",
                  ],
                  correctAnswer: 2,
                  explanation:
                    "Para recibir Bitcoins, solo necesitas proporcionar tu dirección Bitcoin al remitente.",
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

export default UsosYPracticaPage;