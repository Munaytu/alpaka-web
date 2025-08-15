
"use client";

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
import { getRandomMessage } from "@/lib/motivational-messages";
import { useEffect, useState } from "react";

interface P2PPrice {
  platform: string;
  platformLogo: string;
  asset: string;
  paymentMethod: string;
  buyPrice: number | null;
  sellPrice: number | null;
}

interface P2PTableProps {
  data: P2PPrice[];
  type: 'buy' | 'sell';
  loading: boolean;
}

export function P2PTable({ data, type, loading }: P2PTableProps) {
  const [randomMessage, setRandomMessage] = useState('');

  useEffect(() => {
    if (loading) {
      setRandomMessage(getRandomMessage());
    }
  }, [loading]);

  const sortedData = [...data].sort((a, b) => {
    if (type === 'buy') {
      return (b.buyPrice || 0) - (a.buyPrice || 0);
    }
    return (a.sellPrice || Infinity) - (b.sellPrice || Infinity);
  });

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Plataforma</TableHead>
              <TableHead className={`text-right ${type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
                {type === 'buy' ? 'Compran a (BOB)' : 'Venden a (BOB)'}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={2} className="text-center h-24">
                  <p className="text-lg italic text-muted-foreground">Cargando...</p>
                  <p className="text-sm text-muted-foreground mt-2 h-8">{randomMessage}</p>
                </TableCell>
              </TableRow>
            ) : (
              sortedData.map((item, index) => (
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
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
''