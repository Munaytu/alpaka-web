"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Bot, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { getSummary } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";
import { NewsArticle } from "@/components/NewsList";

export default function NewsAggregator() {
    const [summary, setSummary] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const API_KEY = "pub_15013d3f83fb42f3b7ea61600f77c2be";
    const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
    const [hasFetchedNews, setHasFetchedNews] = useState(false);

    useEffect(() => {
        async function fetchNews() {
            if (hasFetchedNews) {
                return;
            }

            const rapidApiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
            const rapidApiHost = 'bitcoin-news1.p.rapidapi.com';
            const rapidApiUrl = 'https://bitcoin-news1.p.rapidapi.com/news';

            async function getNews() {
              try {
                  const rapidApiResponse = await fetch(rapidApiUrl, {
                      headers: {
                          'x-rapidapi-host': rapidApiHost,
                          'x-rapidapi-key': rapidApiKey || '',
                      },
                  });

                  if (!rapidApiResponse.ok) {
                      throw new Error(`HTTP error! status: ${rapidApiResponse.status}`);
                  }

                  const rapidApiData = await rapidApiResponse.json();
                  const rapidApiArticles = rapidApiData || [];
                  setNewsArticles(rapidApiArticles);
                  setHasFetchedNews(true);
              } catch (error) {
                  console.error("Could not fetch news from RapidAPI:", error);
              }
            }

            getNews();
        }

        fetchNews();
    }, [hasFetchedNews]);

    const handleSummarize = async () => {
        setIsLoading(true);
        setSummary(null);
        
        try {
            const result = await getSummary({ newsArticles: newsArticles });

            if (result.error) {
                toast({
                  variant: "destructive",
                  title: "Error de IA",
                  description: result.error,
                });
            } else if (result.summary) {
                setSummary(result.summary);
            }
        } catch {
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
                {newsArticles && newsArticles.map((article: NewsArticle, index: number) => (
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
