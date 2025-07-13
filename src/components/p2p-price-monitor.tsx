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
}

// Initialize with just the single data source entry
const initialPriceData: P2PPrice[] = [
  { // Representing the aggregated data from the new API
    platform: "Aggregated Data",
    platformLogo: "https://placehold.co/32x32.png", // Use a generic logo or replace with one for your service
    asset: "USDT",
    paymentMethod: "Aggregated Data",
  const [priceData, setPriceData] = useState<P2PPrice[]>(initialPriceData);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080'); // Connect to your backend WebSocket server

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data as string);
      console.log('Received WebSocket data:', data);

      setPriceData(prevData => {
        return prevData.map(item => {
          // Update the single entry with the aggregated data
          if (item.asset === 'USDT' && item.platform === 'Aggregated Data') {
            return { ...item, buyPrice: data.buyPrice, sellPrice: data.sellPrice };
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
                <TableHead>Data Source</TableHead>
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
                  {/* Displaying buy and sell prices from the aggregated data */}
                  <TableCell className="text-right font-mono text-lg">
                    {data.buyPrice !== null ? (
                      data.buyPrice.toFixed(2)
                    ) : (
                      <span>Loading...</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right font-mono text-lg">
                    {data.sellPrice !== null ? (
                      data.sellPrice.toFixed(2)
                    ) : (
                      <span>Loading...</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
