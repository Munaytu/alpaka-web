
import { useState, useEffect } from 'react';

interface P2PPrice {
  platform: string;
  platformLogo: string;
  asset: string;
  paymentMethod: string;
  buyPrice: number | null;
  sellPrice: number | null;
}

interface CryptoValues {
  ask: number;
  bid: number;
}

const platformDomainMapping: { [key: string]: string } = {
  binancep2p: 'binance.com',
  paxfulp2p: 'paxful.com',
  bybitp2p: 'bybit.com',
  bitgetp2p: 'bitget.com',
  eldoradop2p: 'eldorado.gg',
};

export function useCryptoPrices() {
  const [usdtPriceData, setUsdtPriceData] = useState<P2PPrice[]>([]);
  const [btcSpotPrice, setBtcSpotPrice] = useState<number | null>(null);
  const [usdtRefBuyPrice, setUsdtRefBuyPrice] = useState<number | null>(null);
  const [usdtRefSellPrice, setUsdtRefSellPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [usdtP2pResponse, btcSpotResponse] = await Promise.all([
          fetch('https://criptoya.com/api/USDT/BOB/1', { cache: 'no-store' }),
          fetch('/api/btc-price', { cache: 'no-store' })
        ]);

        if (!usdtP2pResponse.ok || !btcSpotResponse.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }

        const usdtP2pData = await usdtP2pResponse.json();
        const btcSpotData = await btcSpotResponse.json();

        const formatData = (data: any, asset: string): P2PPrice[] => {
          return Object.entries(data)
            .filter(([key, value]: [string, any]) => key !== 'time' && key !== 'paxfulp2p' && value && typeof value === 'object' && 'ask' in value && 'bid' in value)
            .map(([platform, value]) => {
              const values = value as CryptoValues;
              const platformStr = platform as string;
              const domain = platformDomainMapping[platformStr] || 'placehold.co';
              const logoUrl = domain === 'placehold.co' 
                ? 'https://placehold.co/24x24.png' 
                : `https://www.google.com/s2/favicons?domain=${domain}`;
              
              return {
                platform: platform.replace('p2p', ' P2P'),
                platformLogo: logoUrl,
                asset: asset,
                paymentMethod: 'Varios',
                buyPrice: values.ask,
                sellPrice: values.bid,
              };
            });
        };

        const formattedUsdtData = formatData(usdtP2pData, 'USDT');
        setUsdtPriceData(formattedUsdtData);
        
        if (btcSpotData && btcSpotData.bitcoin && typeof btcSpotData.bitcoin.usd === 'number') {
            const calculatedBtcPrice = btcSpotData.bitcoin.usd;
            setBtcSpotPrice(calculatedBtcPrice);
        } else {
            console.error("Error: BTC spot data not in expected format or missing.", btcSpotData);
            setBtcSpotPrice(null);
        }

        if (formattedUsdtData.length > 0) {
            const validBuyPrices = formattedUsdtData.map(p => p.buyPrice).filter(p => p !== null) as number[];
            const validSellPrices = formattedUsdtData.map(p => p.sellPrice).filter(p => p !== null) as number[];

            if (validBuyPrices.length > 0) {
                const averageBuyPrice = validBuyPrices.reduce((acc, price) => acc + price, 0) / validBuyPrices.length;
                setUsdtRefBuyPrice(averageBuyPrice);
            } else {
                setUsdtRefBuyPrice(null);
            }

            if (validSellPrices.length > 0) {
                const averageSellPrice = validSellPrices.reduce((acc, price) => acc + price, 0) / validSellPrices.length;
                setUsdtRefSellPrice(averageSellPrice);
            } else {
                setUsdtRefSellPrice(null);
            }
        } else {
            setUsdtRefBuyPrice(null);
            setUsdtRefSellPrice(null);
        }
        setLastUpdated(new Date());
      } catch (error) {
        console.error('No se pudieron obtener los datos de precios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, []);

  return { usdtPriceData, btcSpotPrice, usdtRefBuyPrice, usdtRefSellPrice, loading, lastUpdated };
}
''