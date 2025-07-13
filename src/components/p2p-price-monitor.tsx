"use client";

import { useEffect, useState } from 'react';
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
        setLoading(true);
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
  }, []);

  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plataforma / Activo</TableHead>
                <TableHead>Métodos de Pago</TableHead>
                <TableHead className="text-right">Precio Compra (BOB)</TableHead>
                <TableHead className="text-right">Precio Venta (BOB)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    Cargando datos...
                  </TableCell>
                </TableRow>
              ) : (
                priceData.map((data) => (
                  <TableRow key={data.platform}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                          <Image
                              src={data.platformLogo}
                              alt={`${data.platform} logo`}
                              width={24}
                              height={24}
                              className="rounded-full"
                          />
                          <div>
                              <div className="font-medium">{data.platform}</div>
                              <Badge variant="outline" className="font-mono">{data.asset}</Badge>
                          </div>
                      </div>
                    </TableCell>
                    <TableCell>{data.paymentMethod}</TableCell>
                    <TableCell className="text-right font-mono text-lg">
                      {data.buyPrice !== null ? data.buyPrice.toFixed(2) : <span>-</span>}
                    </TableCell>
                    <TableCell className="text-right font-mono text-lg">
                      {data.sellPrice !== null ? data.sellPrice.toFixed(2) : <span>-</span>}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
