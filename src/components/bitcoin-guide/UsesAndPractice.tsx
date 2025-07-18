import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const videos = [
  { title: 'Bitcoin: La Solución a la Inflación', url: 'https://www.youtube.com/watch?v=1bFSolYm72I' },
  { title: 'Cómo Comprar Bitcoin de Forma Segura', url: 'https://www.youtube.com/watch?v=aaAvHic3UOs' },
  { title: 'Casos de Uso Reales de Bitcoin', url: 'https://www.youtube.com/watch?v=BudS3g47woI' },
  { title: 'La Red Lightning de Bitcoin', url: 'https://www.youtube.com/watch?v=Ow376vKIBXE' },
  { title: 'Cómo Minar Bitcoin', url: 'https://www.youtube.com/watch?v=zBT3k3u-3Js' },
];

const UsesAndPractice: React.FC = () => {
  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Usos y Práctica: ¿Cómo lo Uso?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="mb-6">
          <Image 
            src="/images/alpaca con moneda de bitcoin.png" 
            alt="Alpaca con una moneda de Bitcoin" 
            width={800} 
            height={450} 
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Ventajas Potenciales de Bitcoin</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Soberanía Financiera:</strong> Tienes control total sobre tus fondos sin depender de un banco o gobierno.</li>
            <li><strong>Transacciones Globales y Eficientes:</strong> Envía valor a cualquier parte del mundo de forma rápida y con bajas comisiones.</li>
            <li><strong>Escasez Programada:</strong> Con un suministro limitado a 21 millones, Bitcoin es visto como una protección contra la inflación.</li>
            <li><strong>Privacidad Mejorada:</strong> Las transacciones no requieren la divulgación de tu identidad personal.</li>
          </ul>
        </div>

        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3">Pasos Prácticos para Empezar</h3>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Elige una Billetera (Wallet):</strong>
              <p className="text-sm text-gray-300 ml-4">Para empezar, puedes usar una billetera de software (móvil o de escritorio). Para mayor seguridad y grandes cantidades, considera una billetera de hardware (cold wallet).</p>
            </li>
            <li>
              <strong>Adquiere tus Primeros Satoshis:</strong>
              <p className="text-sm text-gray-300 ml-4">Puedes comprar pequeñas fracciones de un bitcoin (llamadas satoshis) en un exchange de criptomonedas. Recuerda empezar con poco y solo invertir lo que estés dispuesto a arriesgar.</p>
            </li>
            <li>
              <strong>Envía y Recibe:</strong>
              <p className="text-sm text-gray-300 ml-4">Practica enviando y recibiendo pequeñas cantidades para familiarizarte con el proceso. Presta mucha atención a las direcciones para evitar errores.</p>
            </li>
          </ol>
        </div>

        <div className="text-center mt-6">
          <h3 className="text-xl font-semibold mb-3">¿Listo para tu primera experiencia?</h3>
          <p className="mb-4">Prueba nuestro simulador de wallet para practicar sin riesgo.</p>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ir al Simulador de Wallet (Próximamente)
          </Button>
        </div>

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

export default UsesAndPractice;
