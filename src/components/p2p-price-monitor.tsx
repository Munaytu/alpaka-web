"use client";

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

const priceData = [
  {
    platform: "Binance P2P",
    platformLogo: "https://placehold.co/32x32.png",
    asset: "USDT",
    paymentMethod: "Transferencia BCP",
    buyPrice: 7.88,
    sellPrice: 7.78,
    trader: "CryptoBol",
    trend: "up",
  },
  {
    platform: "Binance P2P",
    platformLogo: "https://placehold.co/32x32.png",
    asset: "USDT",
    paymentMethod: "Tigo Money",
    buyPrice: 7.91,
    sellPrice: 7.81,
    trader: "BoliviaCripto",
    trend: "down",
  },
  {
    platform: "Bybit P2P",
    platformLogo: "https://placehold.co/32x32.png",
    asset: "USDC",
    paymentMethod: "Transferencia BNB",
    buyPrice: 7.89,
    sellPrice: 7.79,
    trader: "AndeanTrader",
    trend: "up",
  },
  {
    platform: "Binance P2P",
    platformLogo: "https://placehold.co/32x32.png",
    asset: "USDC",
    paymentMethod: "QR Simple",
    buyPrice: 7.87,
    sellPrice: 7.77,
    trader: "P2PBolivia",
    trend: "down",
  },
  {
    platform: "OKX P2P",
    platformLogo: "https://placehold.co/32x32.png",
    asset: "USDT",
    paymentMethod: "Transferencia Mercantil",
    buyPrice: 7.90,
    sellPrice: 7.80,
    trader: "FastCrypto",
    trend: "up",
  },
];

export default function P2pPriceMonitor() {
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
                <TableHead>Mejor Comerciante</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {priceData.map((data, index) => (
                <TableRow key={index}>
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
                    <div className="flex items-center justify-end gap-1 font-mono text-lg">
                      {data.buyPrice.toFixed(2)}
                      {data.trend === 'up' ? <ArrowUp className="h-4 w-4 text-green-400" /> : <ArrowDown className="h-4 w-4 text-red-400" />}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1 font-mono text-lg">
                      {data.sellPrice.toFixed(2)}
                      {data.trend === 'up' ? <ArrowUp className="h-4 w-4 text-green-400" /> : <ArrowDown className="h-4 w-4 text-red-400" />}
                    </div>
                  </TableCell>
                  <TableCell className="text-primary">{data.trader}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
