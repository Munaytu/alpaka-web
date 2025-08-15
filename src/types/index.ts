export interface P2PPrice {
  platform: string;
  platformLogo: string;
  asset: string;
  paymentMethod: string;
  buyPrice: number | null;
  sellPrice: number | null;
}

export interface CryptoValues {
  ask: number;
  bid: number;
}

export interface FormattedCryptoData {
  usdtPriceData: P2PPrice[];
  btcSpotPrice: number | null;
  usdtRefBuyPrice: number | null;
  usdtRefSellPrice: number | null;
  lastUpdated: Date | null;
}
