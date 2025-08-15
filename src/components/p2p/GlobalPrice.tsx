
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { getRandomMessage } from "@/lib/motivational-messages";
import { useEffect, useState } from "react";

interface GlobalPriceProps {
  btcSpotPrice: number | null;
  loading: boolean;
}

export function GlobalPrice({ btcSpotPrice, loading }: GlobalPriceProps) {
  const [randomMessage, setRandomMessage] = useState('');

  useEffect(() => {
    if (loading) {
      setRandomMessage(getRandomMessage());
    }
  }, [loading]);

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Precio de Referencia Global</h2>
        {loading ? (
          <div className="text-center">
            <p className="text-lg italic text-muted-foreground">Cargando...</p>
            <p className="text-sm text-muted-foreground mt-2 h-8">{randomMessage}</p>
          </div>
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
  );
''