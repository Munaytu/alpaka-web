"use client";

import { useEffect, useState, useMemo } from 'react';
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from 'lucide-react';

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

export default function P2pPriceMonitor() {
  const [usdtPriceData, setUsdtPriceData] = useState<P2PPrice[]>([]);
  const [btcPriceData, setBtcPriceData] = useState<P2PPrice[]>([]);
  const [btcSpotPrice, setBtcSpotPrice] = useState<number | null>(null);
  const [usdtRefBuyPrice, setUsdtRefBuyPrice] = useState<number | null>(null);
  const [usdtRefSellPrice, setUsdtRefSellPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (usdtPriceData.length === 0) {
            setLoading(true);
        }

        const [usdtP2pResponse, btcP2pResponse, btcSpotResponse] = await Promise.all([
          fetch('https://criptoya.com/api/USDT/BOB/1'),
          fetch('https://criptoya.com/api/BTC/BOB/1'),
          fetch('https://criptoya.com/api/BTC/USD')
        ]);

        if (!usdtP2pResponse.ok || !btcP2pResponse.ok || !btcSpotResponse.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }

        const usdtP2pData = await usdtP2pResponse.json();
        const btcP2pData = await btcP2pResponse.json();
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
        const formattedBtcData = formatData(btcP2pData, 'BTC');

        setUsdtPriceData(formattedUsdtData);
        setBtcPriceData(formattedBtcData);
        
        if (btcSpotData && btcSpotData.satoshitango && typeof btcSpotData.satoshitango.ask === 'number') {
            setBtcSpotPrice(btcSpotData.satoshitango.ask);
        }

        if (formattedUsdtData.length > 0) {
            const binanceData = formattedUsdtData.find(e => e.platform === 'binance P2P');
            if (binanceData) {
                if (binanceData.buyPrice !== null && binanceData.sellPrice !== null) {
                    setUsdtRefBuyPrice(binanceData.buyPrice);
                    setUsdtRefSellPrice(binanceData.sellPrice);
                } else {
                    console.error('Error: Binance buyPrice or sellPrice is null');
                    setUsdtRefBuyPrice(null);
                    setUsdtRefSellPrice(null);
                }
            } else {
                console.error('Error: Binance data not found');
                setUsdtRefBuyPrice(null);
                setUsdtRefSellPrice(null);
            }
        }

      } catch (error) {
        console.error('No se pudieron obtener los datos de precios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Actualizar cada minuto

    return () => clearInterval(interval); // Limpiar al desmontar el componente
  }, [usdtPriceData.length]);

  const sortedUsdtBuyData = useMemo(() => {
    return [...usdtPriceData].sort((a, b) => (b.buyPrice || 0) - (a.buyPrice || 0));
  }, [usdtPriceData]);

  const sortedUsdtSellData = useMemo(() => {
    return [...usdtPriceData].sort((a, b) => (a.sellPrice || Infinity) - (b.sellPrice || Infinity));
  }, [usdtPriceData]);

  const sortedBtcBuyData = useMemo(() => {
    return [...btcPriceData].sort((a, b) => (b.buyPrice || 0) - (a.buyPrice || 0));
  }, [btcPriceData]);

  const sortedBtcSellData = useMemo(() => {
    return [...btcPriceData].sort((a, b) => (a.sellPrice || Infinity) - (b.sellPrice || Infinity));
  }, [btcPriceData]);

  const renderTableRows = (data: P2PPrice[], type: 'buy' | 'sell') => {
    return data.map((item, index) => (
      <TableRow key={item.platform}>
        <TableCell>
          <div className="flex items-center gap-3">
              <Image
                  src={item.platformLogo}
                  alt={`${item.platform} logo`}
                  width={24}
                  height={24}
                  className="rounded-full"
              />
              <div>
                  <div className="font-medium">{item.platform}</div>
                  <Badge variant="outline" className="font-mono">{item.asset}</Badge>
              </div>
          </div>
        </TableCell>
        <TableCell className="text-right font-mono text-lg">
          <span className={`flex items-center justify-end gap-2 ${type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
            {type === 'buy' ? item.buyPrice?.toFixed(2) : item.sellPrice?.toFixed(2)}
            {index === 0 && (type === 'buy' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />)}
          </span>
        </TableCell>
      </TableRow>
    ));
  }

  return (
    <div className="space-y-8">
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
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Precios P2P en Bolivia (BOB)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-center">USDT</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Plataforma</TableHead>
                                    <TableHead className="text-right text-green-400">Compran a (BOB)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    <TableRow><TableCell colSpan={2} className="text-center">Cargando...</TableCell></TableRow>
                                ) : renderTableRows(sortedUsdtBuyData, 'buy')}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Plataforma</TableHead>
                                    <TableHead className="text-right text-red-400">Venden a (BOB)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    <TableRow><TableCell colSpan={2} className="text-center">Cargando...</TableCell></TableRow>
                                ) : renderTableRows(sortedUsdtSellData, 'sell')}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-center">Bitcoin (BTC)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Plataforma</TableHead>
                                    <TableHead className="text-right text-green-400">Compran a (BOB)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    <TableRow><TableCell colSpan={2} className="text-center">Cargando...</TableCell></TableRow>
                                ) : renderTableRows(sortedBtcBuyData, 'buy')}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Plataforma</TableHead>
                                    <TableHead className="text-right text-red-400">Venden a (BOB)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    <TableRow><TableCell colSpan={2} className="text-center">Cargando...</TableCell></TableRow>
                                ) : renderTableRows(sortedBtcSellData, 'sell')}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}