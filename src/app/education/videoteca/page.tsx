// TODO: Optimizar imágenes y videos para un rendimiento rápido
import React from 'react';

const VideotecaPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Videoteca Bitcoin</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Documentales</h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=GVHegZO4Z2c" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              The Rise and Rise of Bitcoin
            </a>
            <p><strong>Resumen:</strong> Un vistazo a los primeros días de Bitcoin y su ascenso a la prominencia.</p>
            <p><strong>Temas clave:</strong> Orígenes de Bitcoin, adopción temprana, volatilidad.</p>
            <p><strong>Dificultad:</strong> Principiante</p>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=qFjAUhCZZdQ" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Dinero Digital: El Misterio del Bitcoin
            </a>
            <p><strong>Resumen:</strong> Explora los misterios detrás de la creación de Bitcoin y su impacto en el mundo financiero.</p>
            <p><strong>Temas clave:</strong> Anonimato, descentralización, futuro del dinero.</p>
            <p><strong>Dificultad:</strong> Intermedio</p>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=UrGVcX9D2oQ" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Bitcoin: The End Of Money As We Know It
            </a>
            <p><strong>Resumen:</strong> Un análisis crítico del sistema financiero tradicional y cómo Bitcoin podría transformarlo.</p>
            <p><strong>Temas clave:</strong> Sistema financiero, descentralización, impacto social.</p>
            <p><strong>Dificultad:</strong> Intermedio</p>
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Entrevistas</h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=EHjTZKYWk1g" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Andreas Antonopoulos - Bitcoin for Beginners
            </a>
            <p><strong>Resumen:</strong> Una explicación clara y concisa de Bitcoin para principiantes por uno de los mayores expertos en la materia.</p>
            <p><strong>Temas clave:</strong> Fundamentos de Bitcoin, descentralización, seguridad.</p>
            <p><strong>Dificultad:</strong> Principiante</p>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=T84i9W5jbqI" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Jack Dorsey on Bitcoin
            </a>
            <p><strong>Resumen:</strong> El ex CEO de Twitter comparte su visión sobre el futuro de Bitcoin y su potencial para transformar el mundo.</p>
            <p><strong>Temas clave:</strong> Adopción masiva, futuro del dinero, impacto social.</p>
            <p><strong>Dificultad:</strong> Intermedio</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default VideotecaPage;