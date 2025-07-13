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
                <h2 className="font-headline text-2xl font-semibold">Noticias que te liberan del control centralizado</h2>
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
                        <CardTitle className="flex items-center gap-2"><Bot className="h-6 w-6 text-primary"/> Visión de la IA sobre la revolución Bitcoin</CardTitle>
                        <CardDescription>Descifrando el futuro financiero de Bolivia, impulsado por Bitcoin.</CardDescription>
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
                                <p>¡Desbloquea la verdad! Pulsa para un resumen de IA que te empodera.</p>
                            </div>
                        )}
                        {summary && <p className="text-sm text-foreground whitespace-pre-wrap font-sans">{summary}</p>}
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleSummarize} disabled={isLoading} className="w-full">
                            {isLoading ? 'Descentralizando la información...' : '¡Quiero la verdad!'}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
