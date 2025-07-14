
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from 'next/link';
import Image from 'next/image';

interface NewsArticle {
    article_id: string;
    title: string;
    link: string;
    source_id: string;
    source_icon: string;
    description: string;
    pubDate: string;
    image_url: string;
}

export default function NewsList() {
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getNews() {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch('/api/news');
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setNews(data);
            } catch (e: any) {
                setError(e.message || "Failed to fetch news");
            } finally {
                setIsLoading(false);
            }
        }

        getNews();
    }, []);

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <Skeleton className="h-40 w-full rounded-t-lg" />
                        </CardHeader>
                        <CardContent className="flex-grow space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                            <Skeleton className="h-4 w-3/4" />
                        </CardContent>
                        <CardFooter>
                             <Skeleton className="h-8 w-1/2" />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <Alert variant="destructive">
                <AlertTitle>Error al Cargar Noticias</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
                <Card key={article.article_id} className="flex flex-col overflow-hidden">
                    <CardHeader className="p-0">
                        {article.image_url ? (
                            <Image
                                src={article.image_url}
                                alt={article.title}
                                width={400}
                                height={225}
                                className="w-full h-40 object-cover"
                            />
                        ) : (
                            <div className="w-full h-40 bg-gray-700 flex items-center justify-center">
                                <span className="text-gray-400">Sin Imagen</span>
                            </div>
                        )}
                    </CardHeader>
                    <CardContent className="flex-grow p-4 space-y-2">
                        <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                        <p className="text-muted-foreground text-sm line-clamp-3">
                            {article.description}
                        </p>
                    </CardContent>
                    <CardFooter className="p-4 bg-gray-800/50 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            {article.source_icon && 
                                <Image src={article.source_icon} alt={article.source_id} width={16} height={16} className="rounded-full"/>
                            }
                            <span className="text-xs text-muted-foreground uppercase">{article.source_id}</span>
                        </div>
                        {article.link && (
                            <Button variant="secondary" size="sm" asChild>
                                <Link href={article.link} target="_blank" rel="noopener noreferrer">Leer Más</Link>
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
