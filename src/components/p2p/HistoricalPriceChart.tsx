
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { createChart, IChartApi, ISeriesApi, LineSeries, LineSeriesPartialOptions } from 'lightweight-charts';
import { format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HistoricalPriceData {
  time: number;
  value: number;
}

export function HistoricalPriceChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const buySeriesRef = useRef<ISeriesApi<'Line'> | null>(null);
  const sellSeriesRef = useRef<ISeriesApi<'Line'> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vStWC7nikQErGZ0zcMbAbExgf7p1iPGB2xA55iH3kL02yOiRbb6UII9QfvrHhfmZMB0zQKWWpK0upE5/pub?output=csv', { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Failed to fetch historical data from Google Sheet');
        }
        const csvText = await response.text();

        const lines = csvText.split('\n').filter(line => line.trim() !== '');
        if (lines.length < 1) {
          throw new Error('CSV data is empty or malformed');
        }

        const formattedBuyData: HistoricalPriceData[] = [];
        const formattedSellData: HistoricalPriceData[] = [];

        lines.forEach(line => {
          const values = line.split(',');
          const dateStr = values[0]?.trim();
          const buyPriceStr = values[2]?.trim(); // Column 3 (index 2) for Buy Price
          const sellPriceStr = values[3]?.trim(); // Column 4 (index 3) for Sell Price

          if (!dateStr || !buyPriceStr || !sellPriceStr) {
            return; // Skip malformed rows
          }

          const [datePart, timePart] = dateStr.split(' ');
          const [day, month, year] = datePart.split('/').map(Number);
          const [hours, minutes, seconds] = timePart.split(':').map(Number);
          const date = new Date(year, month - 1, day, hours, minutes, seconds);

          const buyValue = parseFloat(buyPriceStr.replace(',', '.'));
          const sellValue = parseFloat(sellPriceStr.replace(',', '.'));

          if (isNaN(date.getTime()) || isNaN(buyValue) || isNaN(sellValue)) {
            return; // Skip rows with invalid date or price
          }

          const time = date.getTime() / 1000;

          formattedBuyData.push({ time, value: buyValue });
          formattedSellData.push({ time, value: sellValue });
        });

        formattedBuyData.sort((a, b) => a.time - b.time);
        formattedSellData.sort((a, b) => a.time - b.time);

        if (chartContainerRef.current) {
          if (!chartRef.current) {
            chartRef.current = createChart(chartContainerRef.current, {
              width: chartContainerRef.current.clientWidth,
              height: 300,
              layout: {
                textColor: '#d1d5db', // gray-300
                background: { type: 'solid', color: '#1f2937' }, // gray-800
              },
              grid: {
                vertLines: {
                  color: '#374151', // gray-700
                },
                horzLines: {
                  color: '#374151', // gray-700
                },
              },
              timeScale: {
                timeVisible: true,
                secondsVisible: false,
              },
            });

            buySeriesRef.current = chartRef.current.addSeries(LineSeries, {
              color: '#22c55e', // green-500 for Buy
              lineWidth: 2,
              title: 'Compra',
            });

            sellSeriesRef.current = chartRef.current.addSeries(LineSeries, {
              color: '#ef4444', // red-500 for Sell
              lineWidth: 2,
              title: 'Venta',
            });

            // Add attribution
            const attributionDiv = document.createElement('div');
            attributionDiv.innerHTML = '<a href="https://www.tradingview.com" target="_blank" style="color: #9ca3af; font-size: 10px;">Chart by TradingView</a>';
            attributionDiv.style.position = 'absolute';
            attributionDiv.style.bottom = '8px';
            attributionDiv.style.right = '8px';
            chartContainerRef.current.appendChild(attributionDiv);
          }

          console.log("Formatted Buy Data:", formattedBuyData);
          console.log("Formatted Sell Data:", formattedSellData);
          buySeriesRef.current?.setData(formattedBuyData);
          sellSeriesRef.current?.setData(formattedSellData);
          chartRef.current.timeScale().fitContent();
        }
      } catch (err) {
        console.error("Error fetching historical data:", err);
        setError("No se pudo cargar el gráfico histórico. Inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistoricalData();

    const handleResize = () => {
      if (chartRef.current && chartContainerRef.current) {
        chartRef.current.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Histórico Dólar Paralelo/BOB</CardTitle>
      </CardHeader>
      <CardContent>
        {loading && <div className="text-center">Cargando gráfico...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}
        <div ref={chartContainerRef} className="w-full h-[300px]" />
      </CardContent>
    </Card>
  );
}
