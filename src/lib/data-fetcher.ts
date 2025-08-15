import { P2PPrice, FormattedCryptoData, CryptoValues } from '@/types';

interface CriptoYaData {
    [platform: string]: CryptoValues | number;
}

const platformLogoMapping: { [key: string]: string } = {
  binancep2p: '/images/platforms/binance.svg',
  paxfulp2p: '/images/platforms/paxful.svg',
  bybitp2p: '/images/platforms/bybit.svg',
  bitgetp2p: '/images/platforms/bitget.svg',
  eldoradop2p: '/images/platforms/eldorado.svg',
};

const formatData = (data: CriptoYaData, asset: string): P2PPrice[] => {
  return Object.entries(data)
    .filter(([key, value]) => key !== 'time' && key !== 'paxfulp2p' && typeof value === 'object' && 'ask' in value && 'bid' in value)
    .map(([platform, value]) => {
      const values = value as CryptoValues;
      const platformStr = platform as string;
      const logoUrl = platformLogoMapping[platformStr] || '/images/platforms/default.svg';

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

export const fetchInitialCryptoPrices = async (): Promise<FormattedCryptoData> => {
    try {
        const [usdtP2pResponse, btcSpotResponse] = await Promise.all([
            fetch('https://criptoya.com/api/USDT/BOB/1', { cache: 'no-store' }),
            fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/btc-price`, { cache: 'no-store' })
        ]);

        if (!usdtP2pResponse.ok || !btcSpotResponse.ok) {
            throw new Error('La respuesta de la red no fue correcta');
        }

        const usdtP2pData = await usdtP2pResponse.json();
        const btcSpotData = await btcSpotResponse.json();

        const formattedUsdtData = formatData(usdtP2pData, 'USDT');

        let calculatedBtcPrice = null;
        if (btcSpotData && btcSpotData.bitcoin && typeof btcSpotData.bitcoin.usd === 'number') {
            calculatedBtcPrice = btcSpotData.bitcoin.usd;
        }

        let usdtRefBuyPrice = null;
        let usdtRefSellPrice = null;

        if (formattedUsdtData.length > 0) {
            const validBuyPrices = formattedUsdtData.map(p => p.buyPrice).filter(p => p !== null) as number[];
            const validSellPrices = formattedUsdtData.map(p => p.sellPrice).filter(p => p !== null) as number[];

            if (validBuyPrices.length > 0) {
                usdtRefBuyPrice = validBuyPrices.reduce((acc, price) => acc + price, 0) / validBuyPrices.length;
            }

            if (validSellPrices.length > 0) {
                usdtRefSellPrice = validSellPrices.reduce((acc, price) => acc + price, 0) / validSellPrices.length;
            }
        }

        return {
            usdtPriceData: formattedUsdtData,
            btcSpotPrice: calculatedBtcPrice,
            usdtRefBuyPrice,
            usdtRefSellPrice,
            lastUpdated: new Date(),
        };

    } catch (error) {
        console.error('No se pudieron obtener los datos de precios:', error);
        return {
            usdtPriceData: [],
            btcSpotPrice: null,
            usdtRefBuyPrice: null,
            usdtRefSellPrice: null,
            lastUpdated: null,
        };
    }
};
