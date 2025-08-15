"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCryptoPrices } from "@/hooks/use-crypto-prices";
import { ArrowRight } from "lucide-react";
import { FormattedCryptoData } from "@/types";

export default function PriceConverter({ initialData }: { initialData: FormattedCryptoData }) {
  const { usdtRefBuyPrice, usdtRefSellPrice, loading, lastUpdated } = useCryptoPrices(initialData);
  const [amount, setAmount] = useState<number | "">("");
  const [fromCurrency, setFromCurrency] = useState<"BOB" | "USDT">("BOB");
  const [toCurrency, setToCurrency] = useState<"USDT" | "BOB">("USDT");
  const [result, setResult] = useState<number | null>(null);
  const [exchangeRate, setExchangeRate] = useState<string>("");

  useEffect(() => {
    if (amount === "" || usdtRefBuyPrice === null || usdtRefSellPrice === null) {
      setResult(null);
      setExchangeRate("");
      return;
    }

    let calculatedResult: number | null = null;
    let rateExplanation = "";

    if (fromCurrency === "BOB" && toCurrency === "USDT") {
      calculatedResult = amount / usdtRefSellPrice;
      rateExplanation = `1 USDT ≈ ${usdtRefSellPrice.toFixed(2)} BOB`;
    } else if (fromCurrency === "USDT" && toCurrency === "BOB") {
      calculatedResult = amount * usdtRefBuyPrice;
      rateExplanation = `1 USDT ≈ ${usdtRefBuyPrice.toFixed(2)} BOB`;
    }

    setResult(calculatedResult);
    setExchangeRate(rateExplanation);

  }, [amount, fromCurrency, toCurrency, usdtRefBuyPrice, usdtRefSellPrice]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || parseFloat(value) < 0) {
      setAmount("");
    } else {
      setAmount(parseFloat(value));
    }
  };

  const handleFromCurrencyChange = (value: "BOB" | "USDT") => {
    setFromCurrency(value);
    setToCurrency(value === "BOB" ? "USDT" : "BOB");
  };

  const getTransactionDescription = () => {
    if (!amount || !result) return "";
    if (fromCurrency === "BOB") {
      return `Estás cambiando ${amount} Bolivianos (BOB) a ${result.toFixed(4)} Dólar Digital (USDT).`;
    } else {
      return `Estás cambiando ${amount} Dólar Digital (USDT) a ${result.toFixed(2)} Bolivianos (BOB).`;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Calculadora de Cambios</CardTitle>
        <CardDescription className="pt-2 max-w-md mx-auto">
          Convierte fácilmente entre Bolivianos (BOB) y Dólar Digital (USDT) con precios actualizados del mercado P2P.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-4">
            <div className="space-y-2">
              <Label htmlFor="fromAmount">Quiero Cambiar</Label>
              <Input
                id="fromAmount"
                type="number"
                value={amount}
                onChange={handleAmountChange}
                placeholder="0.00"
                className="text-lg"
                min="0"
              />
              <Select value={fromCurrency} onValueChange={handleFromCurrencyChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BOB">BOB (Bolivianos)</SelectItem>
                  <SelectItem value="USDT">USDT (Dólar Digital)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="self-center pt-8">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="toAmount">Quiero Recibir (Aprox.)</Label>
              <Input
                id="toAmount"
                type="text"
                value={result !== null ? result.toFixed(4) : ""}
                readOnly
                placeholder="0.00"
                className="font-bold text-lg bg-muted"
              />
               <Input
                type="text"
                value={toCurrency === 'BOB' ? 'BOB (Bolivianos)' : 'USDT (Dólar Digital)'}
                readOnly
                className="font-bold text-sm text-center bg-muted"
              />
            </div>
          </div>
        </div>

        {result !== null && (
          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="font-semibold">Resumen de la Transacción</p>
            <p className="text-sm text-muted-foreground">{getTransactionDescription()}</p>
            <p className="text-sm font-bold mt-2">Tipo de cambio aplicado: {exchangeRate}</p>
          </div>
        )}

        <div className="text-center text-xs text-muted-foreground pt-2">
            {loading ? 'Actualizando precios...' : `Precios actualizados por última vez a las ${lastUpdated ? lastUpdated.toLocaleTimeString() : "N/A"}`}
        </div>
      </CardContent>
    </Card>
  );
}
