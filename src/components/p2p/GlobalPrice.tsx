
import { Card, CardContent } from "@/components/ui/card";

interface GlobalPriceProps {
  btcSpotPrice: number | null;
  loading: boolean;
}

export function GlobalPrice({ btcSpotPrice, loading }: GlobalPriceProps) {
  console.log("GlobalPrice component re-rendered. BTC Spot Price:", btcSpotPrice);
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Precio de Referencia Global</h2>
        {loading ? (
          <div className="text-center">Cargando...</div>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-5xl font-mono font-bold">
              ${btcSpotPrice?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <span className="text-lg text-gray-500">Bitcoin (USD)</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
''