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
  const [priceData, setPriceData] = useState<P2PPrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // La primera vez no ponemos el loader para evitar parpadeos
        if (priceData.length === 0) {
            setLoading(true);
        }
        const response = await fetch('https://criptoya.com/api/USDT/BOB/1');
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        const data = await response.json();

        const formattedData: P2PPrice[] = Object.entries(data)
          .filter(([key, value]) => key !== 'time' && value && typeof value === 'object' && 'ask' in value && 'bid' in value)
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
              asset: 'USDT',
              paymentMethod: 'Varios',
              buyPrice: values.ask,
              sellPrice: values.bid,
            };
          });

        setPriceData(formattedData);
      } catch (error) {
        console.error('No se pudieron obtener los datos de precios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Actualizar cada minuto

    return () => clearInterval(interval); // Limpiar al desmontar el componente
  }, [priceData.length]);

  const sortedBuyData = useMemo(() => {
    return [...priceData].sort((a, b) => (b.buyPrice || 0) - (a.buyPrice || 0));
  }, [priceData]);

  const sortedSellData = useMemo(() => {
    return [...priceData].sort((a, b) => (a.sellPrice || Infinity) - (b.sellPrice || Infinity));
  }, [priceData]);

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Plataforma</TableHead>
                            <TableHead className="text-right text-green-400">Mejor Precio de Compra (BOB)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow><TableCell colSpan={2} className="text-center">Cargando...</TableCell></TableRow>
                        ) : renderTableRows(sortedBuyData, 'buy')}
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
                            <TableHead className="text-right text-red-400">Mejor Precio de Venta (BOB)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow><TableCell colSpan={2} className="text-center">Cargando...</TableCell></TableRow>
                        ) : renderTableRows(sortedSellData, 'sell')}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}