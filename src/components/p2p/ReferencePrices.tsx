
import { Card, CardContent } from "@/components/ui/card";
import { HistoricalPriceChart } from "@/components/p2p/HistoricalPriceChart";

interface ReferencePricesProps {
  usdtRefBuyPrice: number | null;
  usdtRefSellPrice: number | null;
  loading: boolean;
}

export function ReferencePrices({ usdtRefBuyPrice, usdtRefSellPrice, loading }: ReferencePricesProps) {
  return (
    <>
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Precios de Referencia USDT/BOB</h2>
          {loading ? (
            <div className="text-center">Cargando...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-green-400">Mejor Precio de Compra</h3>
                <p className="text-4xl font-mono font-bold">
                  {usdtRefBuyPrice?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <span className="text-sm text-gray-500">(BOB)</span>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-red-400">Mejor Precio de Venta</h3>
                <p className="text-4xl font-mono font-bold">
                  {usdtRefSellPrice?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <span className="text-sm text-gray-500">(BOB)</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <HistoricalPriceChart />
    </>
  );
}
''