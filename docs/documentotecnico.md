Documento de Arquitectura Técnica: Alpaka Hub
Versión: 1.1
Fecha: 11 de Julio de 2025
Autor: Gemini

1. Propósito del Documento
Este documento describe la arquitectura técnica propuesta para la plataforma web Alpaka Hub. Sirve como una guía fundamental para el equipo de desarrollo, asegurando que la construcción de la plataforma se base en principios de escalabilidad, mantenibilidad y eficiencia de costos. El objetivo es crear una base tecnológica sólida que permita agregar y modificar funcionalidades de manera ágil en el futuro.

2. Principios de Arquitectura
Simplicidad y Rapidez (Developer Experience): Utilizar herramientas que permitan un desarrollo rápido y una curva de aprendizaje suave para nuevos desarrolladores.

Escalabilidad Automática: La arquitectura debe ser capaz de manejar picos de tráfico sin intervención manual y sin incurrir en costos elevados.

Costo-Eficiencia (Free-Tier First): Priorizar tecnologías y servicios que ofrezcan niveles gratuitos robustos para minimizar los costos operativos iniciales del proyecto.

Seguridad: Implementar las mejores prácticas de seguridad desde el inicio para proteger la plataforma y a sus usuarios.

Rendimiento: Optimizar la velocidad de carga y la capacidad de respuesta de la plataforma para ofrecer la mejor experiencia de usuario posible.

3. Pila Tecnológica (Tech Stack)
Proponemos un stack basado en JavaScript/TypeScript, moderno y altamente integrado.

3.1. Frontend (Lo que el usuario ve)
Framework: Next.js (sobre React)

Por qué: Es el estándar de oro para aplicaciones React. Ofrece renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG), ideal para el contenido dinámico (precios) y estático (guías educativas).

Estilos CSS: Tailwind CSS

Por qué: Permite construir interfaces de usuario complejas y consistentes de manera muy rápida.

Gestión de Estado: Zustand / React Context

Por qué: Son soluciones simples y ligeras, perfectas para las necesidades de Alpaka Hub.

Fetching de Datos del Cliente: SWR (de Vercel) o TanStack Query

Por qué: Simplifican enormemente la obtención y el almacenamiento en caché de datos del lado del cliente.

3.2. Backend y Capa de Datos (El motor detrás de todo)
Plataforma de Ejecución: Funciones Serverless (en Vercel)

Por qué: Se integran perfectamente con Next.js y permiten ejecutar código de backend bajo demanda sin gestionar servidores.

Base de Datos para Caché: Vercel KV (basado en Redis)

Por qué: Esencial para almacenar temporalmente los datos de precios (P2P y de mercado) y noticias, reduciendo la carga a las APIs externas y sirviendo los datos a los usuarios de forma casi instantánea.

Base de Datos Persistente (Opcional/Futuro): Vercel Postgres (basado en Neon)

Por qué: Útil para almacenar datos históricos de precios o contenido generado por usuarios en el futuro.

3.3. Agregación de Datos y Contenido
Scraping de Datos P2P:

Tecnología: Node.js con Puppeteer o Cheerio.

Ejecución: Cron Jobs de Vercel para ejecutar el scraper periódicamente (ej. cada 5 minutos).

Precios de Criptomonedas (Bitcoin, etc.):

Fuente: API de CoinGecko.

Por qué: Es el estándar de la industria, con una API pública gratuita muy generosa y confiable que no requiere clave para consultas básicas. Ideal para obtener precios de mercado en tiempo real.

Agregador de Noticias:

Fuente: Feeds RSS de fuentes de noticias cripto confiables en español (ej. Cointelegraph, CriptoNoticias, etc.).

Por qué: Usar RSS es completamente gratis. Un parser de RSS (ej. rss-parser en Node.js) se puede ejecutar en una función serverless para obtener los titulares y resúmenes más recientes.

Contenido Educativo (Alpaka Educa):

Fuente: Archivos locales de Markdown (.md/.mdx).

Por qué: Es la forma más simple, rápida y gratuita. El contenido se escribe en archivos de texto, se versiona con Git y Next.js lo convierte en páginas web estáticas ultrarrápidas. Permite que incluso personas no técnicas puedan contribuir al contenido.

4. Diagrama de Arquitectura (Actualizado)
graph TD
    subgraph "Usuario"
        A[Navegador del Usuario]
    end

    subgraph "Plataforma Vercel (Cloud)"
        B[Frontend Next.js]
        C[API Routes: /api/p2p-prices, /api/market-prices, /api/news]
        D[Cache: Vercel KV]
        E[Cron Job: /api/cron/scrape-all]
        F[Contenido Estático: Guías en Markdown]
    end

    subgraph "Plataformas y APIs Externas"
        G[Binance P2P]
        H[Bybit P2P]
        I[API CoinGecko]
        J[Fuentes de Noticias (RSS)]
    end

    A -->|1. Carga la página| B
    B -->|2. Pide datos a las APIs internas| C
    C -->|3. Busca datos en Cache| D
    D -- "Datos frescos" --> C
    C -->|4. Devuelve datos al Frontend| B
    B -->|Carga Guías| F
    
    E -- "Se ejecuta cada 5 mins" --> E
    E -->|Scrapea P2P| G & H
    E -->|Fetch Precios| I
    E -->|Fetch Noticias| J
    E -->|5. Guarda todo en Cache| D

5. Flujo de Datos y Lógica (Actualizado)
Tarea Programada Unificada (Cron Job):

Cada 5-10 minutos, el Cron Job de Vercel ejecuta la función en /api/cron/scrape-all.

Esta función orquesta todas las tareas de obtención de datos:

Ejecuta los scrapers P2P (Binance, Bybit, etc.).

Llama a la API de CoinGecko para obtener los precios de mercado de Bitcoin, ETH, etc.

Lee los Feeds RSS de noticias.

Procesa, estandariza y guarda todos estos datos en Vercel KV (la caché).

Visita del Usuario:

Un usuario abre alpakahub.com.

El frontend (Next.js) renderiza la página y solicita los datos necesarios a sus propias APIs internas (/api/p2p-prices, /api/market-prices, /api/news).

Estas APIs internas simplemente leen los datos pre-procesados de la caché Vercel KV, resultando en una respuesta casi instantánea.

Contenido Educativo (Alpaka Educa):

El contenido (guías, artículos, tutoriales divertidos sobre Bitcoin) se escribe en archivos Markdown dentro del repositorio de código (ej. en la carpeta /content/educa).

Next.js, durante el despliegue, pre-renderiza estos archivos como páginas HTML estáticas.

Resultado: Cuando un usuario hace clic en una guía, la página carga de forma instantánea, ya que ya estaba construida.

6. Despliegue y DevOps (CI/CD)
Repositorio de Código: GitHub.

Plataforma de Despliegue: Vercel.

Flujo de Trabajo: El flujo de integración y despliegue continuo (CI/CD) se mantiene. Cualquier cambio en el código o en el contenido de las guías educativas activa un despliegue automático y seguro.

7. Escalabilidad y Futuro
Escalabilidad: La arquitectura sigue siendo altamente escalable. El uso intensivo de la caché y la generación de páginas estáticas para el contenido educativo aseguran que la plataforma pueda soportar un gran número de usuarios sin degradar el rendimiento ni aumentar los costos.

Nuevas Funcionalidades:

Añadir un nuevo exchange o fuente de noticias: Simplemente se crea un nuevo módulo de scraper/parser y se integra en el Cron Job principal.

Añadir una nueva guía: Tan fácil como añadir un nuevo archivo .md al repositorio.

Gobernanza con $ALPAKA: La integración con wallets para votaciones sigue siendo una futura mejora sencilla de implementar sobre esta base.

Este documento actualizado proporciona una guía aún más completa para construir una plataforma robusta, rica en funcionalidades y preparada para crecer.