import PriceConverter from '@/components/PriceConverter';
import P2pPriceMonitor from '@/components/p2p-price-monitor';
import { fetchInitialCryptoPrices } from '@/lib/data-fetcher';

export default async function DashboardPage() {
    const initialData = await fetchInitialCryptoPrices();

    return (
        <div className="space-y-8">
            <PriceConverter initialData={initialData} />
            <p className="text-muted-foreground mb-4 max-w-2xl">
                Precios de compra y venta de USDT/USDC con moneda boliviana en las plataformas más usadas en Bolivia. Los datos son referenciales y se actualizan constantemente.
            </p>
            <P2pPriceMonitor initialData={initialData} />
        </div>
    );
}
