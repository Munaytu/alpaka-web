import React from 'react';
import Link from 'next/link';
import { Card } from "@/components/ui/card"

const EducationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">El Universo Bitcoin</h1>
      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li>
            <Link href="/education/que-es-bitcoin" className="hover:text-blue-500">
              ¿Qué es Bitcoin?
            </Link>
          </li>
          <li>
            <Link href="/education/la-historia-de-bitcoin" className="hover:text-blue-500">
              La Historia de Bitcoin
            </Link>
          </li>
          <li>
            <Link href="/education/usos-y-practica" className="hover:text-blue-500">
              Usos y Práctica
            </Link>
          </li>
          <li>
            <Link href="/education/riesgos-y-seguridad" className="hover:text-blue-500">
              Riesgos y Seguridad
            </Link>
          </li>
          <li>
            <Link href="/education/cultura-y-comunidad" className="hover:text-blue-500">
              Cultura y Comunidad
            </Link>
          </li>
          <li>
            <Link href="/education/videoteca" className="hover:text-blue-500">
              Videoteca
            </Link>
          </li>
        </ul>
          <li>
            <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              Comunidad en Discord
            </a>
          </li>
      </nav>
      <Card className="p-4">
        {children}
      </Card>
    </div>
  );
};

export default EducationLayout;