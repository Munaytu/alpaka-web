import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AlpakaIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Stylized Alpaka Icon"
    data-ai-hint="alpaka logo"
  >
    <defs>
      <filter id="neon-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M83.5 156.5C83.5 156.5 62 161 63 139C64 117 85 110.5 85 110.5C85 110.5 73 93 83.5 76.5C94 60 102.5 54 102.5 54C102.5 54 109 67.5 116 76.5C123 85.5 125 102 125 102C125 102 143 103.5 146.5 124.5C150 145.5 130.5 156.5 130.5 156.5"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M102.5 54L103.5 39"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M96 47L91.5 35.5"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M109 47L113.5 35.5"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M91 81C91 81 92.5 84.5 95 84.5C97.5 84.5 99 81 99 81"
      stroke="hsl(var(--accent))"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#neon-glow-filter)"
    />
    <path
      d="M106.5 81C106.5 81 108 84.5 110.5 84.5C113 84.5 114.5 81 114.5 81"
      stroke="hsl(var(--accent))"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#neon-glow-filter)"
    />
    <path
      d="M83.5 156V170.5"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M102.5 156V170.5"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M119.5 156V170.5"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M130.5 156V170.5"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Alpaka Hub
                  </h1>
                  <p className="font-headline text-2xl text-primary">
                    Tejiendo la Soberanía Financiera de Bolivia. Un Byte a la
                    Vez.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    El centro de información en tiempo real para el mercado P2P
                    de criptomonedas en Bolivia. Empoderando a librecambistas,
                    traders y ciudadanos con datos, noticias y educación.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="group">
                    <Link href="/dashboard">
                      Ingresar al Hub
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center p-4 shadow-2xl shadow-primary/20">
                  <AlpakaIcon className="w-full h-full text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="manifesto"
          className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
        >
          <div className="container px-4 md:px-6 space-y-12">
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-3xl text-primary">
                    El Manifiesto Alpaka: Nuestra Visión Cypherpunk Andina
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    En los Andes, la alpaka es un símbolo de resiliencia,
                    comunidad y riqueza. Su lana, fina y fuerte, ha abrigado a
                    nuestra gente por siglos, tejida en comunidad para el bien
                    común. Hoy, enfrentamos un nuevo tipo de frío: la
                    incertidumbre económica y la brecha de información en la era
                    digital.
                  </p>
                  <p>
                    Adoptamos la filosofía Cypherpunk de Bitcoin. Creemos en el
                    poder de la criptografía para crear sistemas más justos,
                    transparentes y soberanos. $ALPAKA es nuestro telar
                    digital. Es el hilo que nos une. Es un símbolo de que, al
                    igual que nuestros ancestros tejían su futuro, nosotros
                    podemos tejer el nuestro en la blockchain.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border">
        <p className="text-xs text-muted-foreground">
          &copy; 2025 Alpaka Hub. Todos los derechos reservados.
        </p>
        <div className="sm:ml-auto text-xs text-muted-foreground">
          <p>
            $ALPAKA es un criptoactivo de alto riesgo. Invierta solo lo que esté
            dispuesto a perder. DYOR.
          </p>
        </div>
      </footer>
    </div>
  );
}
