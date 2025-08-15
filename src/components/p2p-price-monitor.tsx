
"use client";

import { useCryptoPrices } from "@/hooks/use-crypto-prices";
import { ReferencePrices } from "@/components/p2p/ReferencePrices";
import { P2PTable } from "@/components/p2p/P2PTable";
import { GlobalPrice } from "@/components/p2p/GlobalPrice";
import { FormattedCryptoData } from "@/types";

export default function P2pPriceMonitor({ initialData }: { initialData: FormattedCryptoData }) {
  const { usdtPriceData, btcSpotPrice, usdtRefBuyPrice, usdtRefSellPrice, loading } = useCryptoPrices(initialData);

  return (
    <div className="space-y-8">
      <ReferencePrices 
        usdtRefBuyPrice={usdtRefBuyPrice} 
        usdtRefSellPrice={usdtRefSellPrice} 
        loading={loading} 
      />

      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Precios P2P en Bolivia (BOB)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-center">USDT</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <P2PTable data={usdtPriceData} type="buy" loading={loading} />
              <P2PTable data={usdtPriceData} type="sell" loading={loading} />
            </div>
          </div>
        </div>
      </div>

      <GlobalPrice btcSpotPrice={btcSpotPrice} loading={loading} />
    </div>
  );
}
''