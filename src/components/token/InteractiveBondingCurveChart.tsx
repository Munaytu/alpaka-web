"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// Parámetros de la curva de bonos para la simulación
const INITIAL_PRICE = 0.001; // Precio inicial en BNB
const PRICE_INCREMENT = 0.00001; // Incremento de precio por token
const MAX_SUPPLY_SIMULATION = 500000; // Suministro máximo para el gráfico

// Generar los datos para el gráfico
const generateChartData = () => {
  const data = [];
  // Creamos puntos en el gráfico para visualizar la curva
  for (let supply = 0; supply <= MAX_SUPPLY_SIMULATION; supply += 25000) {
    const price = INITIAL_PRICE + (supply * PRICE_INCREMENT);
    data.push({ 
      supply: supply / 1000, // Mostrar en miles (ej: 50K)
      price: parseFloat(price.toFixed(4)),
    });
  }
  return data;
};

const chartData = generateChartData();

// Tooltip personalizado que aparece al pasar el ratón
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-gray-800 border border-emerald-500 rounded-lg text-white shadow-lg">
        <p className="label font-bold text-lg">{`Si existieran ${label}K tokens...`}</p>
        <p className="intro text-emerald-400">{`...el precio sería de ${payload[0].value} BNB por token.`}</p>
        <p className="text-xs text-muted-foreground mt-2">Pasa el ratón para explorar diferentes escenarios.</p>
      </div>
    );
  }
  return null;
};

export function InteractiveBondingCurveChart() {
  return (
    <div className="w-full h-96 bg-gray-900 p-4 rounded-lg border border-gray-700">
      <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-white">Gráfico Interactivo de Precios</h3>
          <p className="text-sm text-muted-foreground">Este gráfico muestra cómo el precio de $ALPAKA está diseñado para cambiar.</p>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={chartData}
          margin={{ top: 5, right: 20, left: 35, bottom: 35 }}
        >
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
          <XAxis 
            dataKey="supply" 
            unit="K"
            tick={{ fill: '#9ca3af' }}
            axisLine={{ stroke: '#4b5563' }}
            tickLine={{ stroke: '#4b5563' }}
            label={{ value: 'Cantidad Total de Tokens en Circulación', position: 'insideBottom', offset: -25, fill: '#9ca3af' }}
          />
          <YAxis 
            tick={{ fill: '#9ca3af' }}
            axisLine={{ stroke: '#4b5563' }}
            tickLine={{ stroke: '#4b5563' }}
            label={{ value: 'Precio por Token (en BNB)', angle: -90, position: 'insideLeft', offset: -25, fill: '#9ca3af' }}
            domain={['dataMin', 'dataMax']}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#34d399', strokeWidth: 1, strokeDasharray: '3 3' }} />
          <Area 
            type="monotone" 
            dataKey="price" 
            stroke="#34d399" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorPrice)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
