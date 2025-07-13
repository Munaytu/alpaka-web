"use client";

import { useEffect, useState } from 'react';

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface P2PPrice {
  platform: string;
  platformLogo: string;
  asset: string;
  paymentMethod: string;
  buyPrice: number | null;
  sellPrice: number | null;
  trader?: string; // Optional as we might not get this from the API
  trend?: 'up' | 'down'; // Optional
}

const initialPriceData: P2PPrice[] = [
  {
    platform: "Binance P2P",
    platformLogo: "https://placehold.co/32x32.png",
    asset: "USDT",
    paymentMethod: "Bank Transfer",
    buyPrice: null,
    sellPrice: null,
  },
  {
    platform: "Bybit P2P",
    platformLogo: "https://placehold.co/32x32.png",
    asset: "USDT",
    paymentMethod: "Bank Transfer",
    buyPrice: null,
    sellPrice: null,
  },
];

export default function P2pPriceMonitor() {
  const [priceData, setPriceData] = useState<P2PPrice[]>(initialPriceData);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080'); // Connect to your backend WebSocket server

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data as string);
      console.log('Received WebSocket data:', data);

      setPriceData(prevData => {
        return prevData.map(item => {
          // Update based on the source (binance or bybit) and asset (USDT)
          // We are no longer filtering by paymentMethod or assuming specific asset from the backend data directly
          if (item.asset === 'USDT' && item.platform.toLowerCase().includes(data.source)) {
            return { ...item, buyPrice: data.data.bid, sellPrice: data.data.ask };
          }
          return item;
        });
      });
    };

    ws.onopen = () => {
      console.log('WebSocket connection established');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []); // Empty dependency array means this effect runs only once on mount


  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plataforma / Activo</TableHead>
                <TableHead>Método de Pago</TableHead>
                <TableHead className="text-right">Precio Compra (BOB)</TableHead>
                <TableHead className="text-right">Precio Venta (BOB)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {priceData.map((data, index) => (
                <TableRow key={`${data.platform}-${data.asset}-${data.paymentMethod}`}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                        <Image
                            src={data.platformLogo}
                            alt={`${data.platform} logo`}
                            width={32}
                            height={32}
                            className="rounded-full"
                            data-ai-hint="crypto exchange"
                        />
                        <div>
                            <div className="font-medium">{data.platform}</div>
                            <Badge variant="outline" className="font-mono">{data.asset}</Badge>
                        </div>
                    </div>
                  </TableCell>
                  <TableCell>{data.paymentMethod}</TableCell>
                  <TableCell className="text-right">
 {data.buyPrice !== null ? (
 <div className="flex items-center justify-end gap-1 font-mono text-lg">
 {data.buyPrice.toFixed(2)}
 {/* Trend indicator is not directly available from P2P API, can implement logic based on price changes */}
 {/* {data.trend === 'up' ? <ArrowUp className="h-4 w-4 text-green-400" /> : <ArrowDown className="h-4 w-4 text-red-400" />} */}
 </div>
 ) : (
 <span>Loading...</span>
 )}
                  </TableCell>
                  <TableCell className="text-right">
 {data.sellPrice !== null ? (
 <div className="flex items-center justify-end gap-1 font-mono text-lg">
 {data.sellPrice.toFixed(2)}
 {/* Trend indicator */}
 </div>
 ) : (
 <span>Loading...</span>
 )}
                  </TableCell>
                  <TableCell className="text-primary">{data.trader || 'N/A'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
