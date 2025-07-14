
import { NextResponse } from 'next/server';

// Define la misma interfaz que usas en el frontend
interface NewsArticle {
    article_id: string;
    title: string;
    link: string;
    source_id: string;
    source_url: string;
    source_icon: string;
    // ... (resto de los campos que necesites)
    description: string;
    pubDate: string;
    image_url: string;
}

// Función para mezclar los resultados de las APIs
function interleaveArrays(arr1: any[], arr2: any[]): any[] {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) result.push(arr1[i]);
        if (i < arr2.length) result.push(arr2[i]);
    }
    return result;
}

export async function GET() {
    
    const newsdataIoApiKey = process.env.NEWSDATA_IO_API_KEY;
    const newsapiOrgApiKey = process.env.NEWSAPI_ORG_API_KEY;

    if (!newsdataIoApiKey || !newsapiOrgApiKey) {
        return NextResponse.json({ error: 'API keys are not configured' }, { status: 500 });
    }

    try {
        // Fetch de Newsdata.io
        const newsdataIoUrl = `https://newsdata.io/api/1/latest?apikey=${newsdataIoApiKey}&country=bo&q=crypto%20bitcoin`;
        const newsdataIoResponse = await fetch(newsdataIoUrl);
        const newsdataIoData = await newsdataIoResponse.json();
        const newsdataIoArticles = newsdataIoData.results || [];

        // Fetch de NewsAPI.org
        const newsapiOrgUrl = `https://newsapi.org/v2/everything?apiKey=${newsapiOrgApiKey}&q=bolivia%20crypto%20bitcoin`;
        const newsapiOrgResponse = await fetch(newsapiOrgUrl);
        const newsapiOrgData = await newsapiOrgResponse.json();
        const newsapiOrgArticles = newsapiOrgData.articles || [];

        // Mapear artículos de NewsAPI.org para que coincidan con la estructura de NewsArticle
        const mappedNewsApiOrgArticles = newsapiOrgArticles.map((article: any) => ({
            article_id: article.url, // Usar URL como ID único
            title: article.title,
            link: article.url,
            source_id: article.source.name.toLowerCase().replace(/ /g, ''),
            source_url: article.url,
            source_icon: `https://www.google.com/s2/favicons?domain=${new URL(article.url).hostname}`,
            description: article.description,
            pubDate: article.publishedAt,
            image_url: article.urlToImage,
        }));

        // Combinar y mezclar
        const combinedNews = interleaveArrays(newsdataIoArticles, mappedNewsApiOrgArticles);

        return NextResponse.json(combinedNews);

    } catch (error) {
        console.error('Error fetching news:', error);
        return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
    }
}
