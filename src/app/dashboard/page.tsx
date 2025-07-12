import P2pPriceMonitor from '@/components/p2p-price-monitor';

export default function DashboardPage() {
    return (
        <div>
            <p className="text-muted-foreground mb-4 max-w-2xl">
                Precios de compra y venta de USDT/USDC con moneda boliviana en las plataformas más usadas en Bolivia. Los datos son referenciales y se actualizan constantemente.
            </p>
            <P2pPriceMonitor />
        </div>
    );
}
