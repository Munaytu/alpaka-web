import NewsAggregator from '@/components/news-aggregator';

export default function NewsPage() {
    return (
        <div>
            <p className="text-muted-foreground mb-4 max-w-2xl">
                Un agregador de las noticias más importantes del ecosistema cripto, curadas y explicadas para el público boliviano con IA.
            </p>
            <NewsAggregator />
        </div>
    );
}
