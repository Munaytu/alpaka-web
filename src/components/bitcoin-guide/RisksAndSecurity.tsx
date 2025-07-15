import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const videos = [
  { title: 'Wallets de Bitcoin: Tu Banco Personal', url: 'https://www.youtube.com/watch?v=qdJLx8zvAAI' },
  { title: 'Seguridad en Bitcoin: Protege tus Fondos', url: 'https://www.youtube.com/watch?v=u1EsMdY8o4I' },
  { title: 'Regulación de Bitcoin en el Mundo', url: 'https://www.youtube.com/watch?v=C-3aYnhF6Io' },
];

const RisksAndSecurity: React.FC = () => {
  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Riesgos y Seguridad: Protégete</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="mb-6">
          <Image 
            src="/images/alpca con billetra fria.jpg" 
            alt="Alpaca con una billetera fría de Bitcoin" 
            width={800} 
            height={450} 
            className="rounded-lg object-cover"
          />
        </div>
        <Alert variant="destructive" className="bg-red-900 border-red-700">
          <AlertTitle className="text-xl font-bold">Riesgos Fundamentales</AlertTitle>
          <AlertDescription>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li><strong>Volatilidad Extrema:</strong> El valor de Bitcoin puede cambiar drásticamente en poco tiempo, lo que puede generar grandes ganancias o pérdidas devastadoras.</li>
              <li><strong>Irreversibilidad:</strong> Las transacciones confirmadas son finales. Si envías fondos a la dirección equivocada o eres víctima de una estafa, no hay forma de recuperar tu dinero.</li>
              <li><strong>Riesgos de Custodia:</strong> Ser tu propio banco significa que eres el único responsable de tu seguridad. La pérdida de tus claves privadas o frase semilla significa la pérdida irrecuperable de tus fondos.</li>
              <li><strong>Incertidumbre Regulatoria:</strong> Los gobiernos de todo el mundo todavía están definiendo las reglas para las criptomonedas, y los cambios pueden impactar su valor y uso.</li>
            </ul>
          </AlertDescription>
        </Alert>

        <Card className="bg-gray-700 p-4">
          <h3 className="text-2xl font-bold mb-3">Los 10 Mandamientos de la Seguridad en Bitcoin</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Protegerás tu frase semilla sobre todas las cosas.</li>
            <li>No almacenarás tu frase semilla en un dispositivo conectado a internet.</li>
            <li>Verificarás siempre la dirección de destino antes de enviar.</li>
            <li>No confiarás en promesas de dinero fácil o retornos garantizados.</li>
            <li>Utilizarás la autenticación de dos factores (2FA) en todos los exchanges.</li>
            <li>Considerarás usar una billetera de hardware (cold wallet) para grandes cantidades.</li>
            <li>No compartirás tu clave privada con nadie, nunca.</li>
            <li>Mantendrás tu software de billetera actualizado.</li>
            <li>Harás tu propia investigación (DYOR) antes de invertir en cualquier proyecto.</li>
            <li>Si algo parece demasiado bueno para ser verdad, probablemente lo sea.</li>
          </ol>
        </Card>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Videos de Apoyo</h3>
          <ul className="space-y-3">
            {videos.map((video) => (
              <li key={video.url}>
                <a 
                  href={video.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                >
                  {video.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default RisksAndSecurity;
