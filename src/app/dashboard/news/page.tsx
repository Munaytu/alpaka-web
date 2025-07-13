import NewsList from '@/components/NewsList';

export default function NewsPage() {
    return (
        <div>
            <p className="text-muted-foreground mb-4 max-w-2xl">
                Un agregador de las noticias más importantes del ecosistema cripto, curadas y explicadas para el público boliviano con IA.
            </p>
            <NewsList country="bo" q="crypto" />
        </div>
    );
}