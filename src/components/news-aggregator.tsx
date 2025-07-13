"use client";

import { useState } from 'react';
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Bot, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { getSummary } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";

const mockNewsArticles = [
    {
      title: "Bitcoin supera los $70,000 mientras la adopción institucional crece",
      content: "El precio de Bitcoin ha alcanzado un nuevo máximo histórico, impulsado por el interés de grandes empresas y fondos de inversión. En Bolivia, los exchanges locales reportan un aumento del 25% en el volumen de operaciones.",
      url: "#",
      source: "CryptoNoticias",
    },
    {
      title: "El Banco Central de Bolivia advierte sobre los riesgos de las criptomonedas",
      content: "La autoridad monetaria emitió un comunicado reiterando la prohibición del uso de criptoactivos para pagos dentro del territorio nacional, y advirtiendo a la población sobre la volatilidad y los riesgos de estafa asociados.",
      url: "#",
      source: "El Deber",
    },
    {
      title: "BNB Smart Chain anuncia actualización 'Haber' para reducir las comisiones de transacción",
      content: "La fundación detrás de la BNB Chain planea una importante actualización que promete hacer las transacciones más baratas y rápidas, beneficiando a proyectos como Alpaka que se construyen sobre esta red.",
      url: "#",
      source: "CoinDesk",
    },
];


    const [boliviaNews, setBoliviaNews] = useState([]);
    const API_KEY = "pub_15013d3f83fb42f3b7ea61600f77c2be";
    const [cryptoNews, setCryptoNews] = useState([]);

async function getNews(country: string | null, q: string | null = null) {
    useEffect(() => {
        async function fetchNews() {
            const boliviaNewsData = await getNews("bo");
            const cryptoNewsData = await getNews(null, "crypto");
            setBoliviaNews(boliviaNewsData);
            setCryptoNews(cryptoNewsData);
        }

        fetchNews();
    }, []);
  let url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}`;

  if (country) {
    url += `&country=${country}`;
  }
  if (q) {
    url += `&q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Could not fetch news:", error);
    return [];
  }
}
export default function NewsAggregator() {
    const [summary, setSummary] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleSummarize = async () => {
        setIsLoading(true);
        setSummary(null);
        
        try {
            const result = await getSummary({ newsArticles: mockNewsArticles });

            if (result.error) {
                toast({
                  variant: "destructive",
                  title: "Error de IA",
                  description: result.error,
                });
            } else if (result.summary) {
                setSummary(result.summary);
            }
        } catch (e) {
             toast({
              variant: "destructive",
              title: "Error de Red",
              description: "No se pudo conectar con el servicio. Por favor, inténtelo de nuevo.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
                <h2 className="font-headline text-2xl font-semibold">Últimas Noticias</h2>
                {mockNewsArticles.map((article, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{article.title}</CardTitle>
                            <CardDescription>{article.source}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{article.content}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="link" asChild className="p-0">
                                <Link href={article.url}>Leer más</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="lg:col-span-1">
                <Card className="sticky top-20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Bot className="h-6 w-6 text-primary"/> Resumen de IA</CardTitle>
                        <CardDescription>Un análisis de las noticias más relevantes para el contexto boliviano.</CardDescription>
                    </CardHeader>
                    <CardContent className="min-h-[200px]">
                        {isLoading && (
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                                <Skeleton className="h-4 w-3/4" />
                            </div>
                        )}
                        {!isLoading && !summary && (
                            <div className="text-center text-muted-foreground p-8 flex flex-col items-center justify-center">
                                <Sparkles className="h-10 w-10 mb-4" />
                                <p>Presiona el botón para generar un resumen con IA de las noticias actuales.</p>
                            </div>
                        )}
                        {summary && <p className="text-sm text-foreground whitespace-pre-wrap font-sans">{summary}</p>}
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleSummarize} disabled={isLoading} className="w-full">
                            {isLoading ? 'Generando...' : 'Generar Resumen'}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
