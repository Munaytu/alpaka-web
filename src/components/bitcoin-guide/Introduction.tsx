
import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Bienvenido a El Universo Bitcoin</h2>
      <p className="mb-4">
        Este es tu punto de partida para explorar el fascinante mundo de Bitcoin. Nuestra misión es desmitificar esta tecnología y darte el conocimiento para navegar el ecosistema con confianza.
      </p>
      <p className="mb-4">
        Aquí encontrarás un camino de aprendizaje diseñado para principiantes. Te guiaremos paso a paso, desde los conceptos más básicos hasta las ideas más complejas, todo en un lenguaje claro y sencillo.
      </p>
      <div className="text-center mt-8">
        <a href="#what-is-bitcoin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Empieza tu Viaje Aquí
        </a>
      </div>
    </div>
  );
};

export default Introduction;
