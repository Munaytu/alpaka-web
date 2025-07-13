/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from 'next/link';

interface NewsArticle {
    article_id: string;
    title: string;
    link: string;
    source_id: string;
    source_url: string;
    source_icon: string;
    source_priority: number;
    keywords: string[];
    creator: string[];
    image_url: string;
    video_url: string;
    description: string;
    pubDate: string;
    pubDateTZ: string;
    content: string;
    country: string[];
    category: string[];
    language: string;
    ai_tag: string[];
    sentiment: string;
    sentiment_stats: {
        positive: number;
        neutral: number;
        negative: number;
    };
    ai_region: string[];
    ai_org: string[];
    duplicate: boolean;
}

interface Props {}

export default function NewsList({ }: Props) {
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const newsdataIoApiKey = process.env.NEXT_PUBLIC_NEWSDATA_IO_API_KEY;
    const newsapiOrgApiKey = process.env.NEXT_PUBLIC_NEWSAPI_ORG_API_KEY;

    useEffect(() => {
        async function getNews() {
            setIsLoading(true);
            setError(null);
            try {
                // Fetch news from newsdata.io
                const newsdataIoUrl = `https://newsdata.io/api/1/latest?apikey=${newsdataIoApiKey}&country=bo&q=crypto bitcoin`;
                const newsdataIoResponse = await fetch(newsdataIoUrl);
                if (!newsdataIoResponse.ok) {
                    throw new Error(`HTTP error! status: ${newsdataIoResponse.status}`);
                }
                const newsdataIoData = await newsdataIoResponse.json();
                const newsdataIoArticles = newsdataIoData.results || [];

                // Fetch news from newsapi.org
                const newsapiOrgUrl = `https://newsapi.org/v2/everything?apiKey=${newsapiOrgApiKey}&q=bolivia crypto bitcoin`;
                const newsapiOrgResponse = await fetch(newsapiOrgUrl);
                if (!newsapiOrgResponse.ok) {
                    throw new Error(`HTTP error! status: ${newsapiOrgResponse.status}`);
                }
                const newsapiOrgData = await newsapiOrgResponse.json();
                const newsapiOrgArticles = newsapiOrgData.articles || [];

                // Interleave the articles
                const interleavedNews = interleaveArrays(newsdataIoArticles, newsapiOrgArticles);

                setNews(interleavedNews);
            } catch (e: any) {
                setError(e.message || "Failed to fetch news");
            } finally {
                setIsLoading(false);
            }
        }

        getNews();
    }, [newsdataIoApiKey, newsapiOrgApiKey]);

    // Function to interleave two arrays
    function interleaveArrays(...arrays: (NewsArticle | any)[][]): NewsArticle[] {
        const result: any[] = [];
        const maxLength = Math.max(...arrays.map(arr => arr.length));
        for (let i = 0; i < maxLength; i++) {
            for (const arr of arrays) {
                if (i < arr.length) {
                    result.push(arr[i]);
                }
            }
        }
        return result;
    }

    if (isLoading) {
        return (
            <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-3/4" />
            </div>
        );
    }

    if (error) {
        return (
            <Alert variant="destructive">
                <AlertTitle>¡Alerta! El sistema está bajo ataque centralizado</AlertTitle>
                <AlertDescription>La Matrix ha intentado ocultarnos la verdad: {error}</AlertDescription>
            </Alert>
        );
    }

    return (
        <div className="space-y-4">
            {news.map((article) => (
                <Card key={article.article_id}>
                    <CardHeader>
                        <CardTitle>{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{article.description}</p>
                    </CardContent>
                    <CardFooter>
                        {article.link && (
                            <Button variant="link" asChild className="p-0">
                                <Link href={article.link}>Adentrarse en la madriguera del conejo</Link>
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}