import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const MiningSimulator = () => {
  const [hashes, setHashes] = useState(0);
  const [blockMined, setBlockMined] = useState(false);
  const [reward, setReward] = useState(0);

  const targetHashes = 1000; // Número objetivo de hashes

  useEffect(() => {
    if (hashes >= targetHashes) {
      setBlockMined(true);
      setReward(1); // Recompensa de 1 BTC de juguete
    }
  }, [hashes]);

  const handleMineClick = () => {
    setHashes(hashes + 10); // Simular el cálculo de 10 hashes por clic
  };

  return (
    <Card className="w-[400px]">
      <CardContent>
        <CardTitle>Simulador de Minería Simplificado</CardTitle>

        <div className="blockchain">
          <CardDescription>Blockchain</CardDescription>
          {/* Representación visual simplificada de la blockchain */}
          <div className="block">Bloque 1</div>
          <div className="block">Bloque 2</div>
          <div className="block">Bloque 3</div>
          {blockMined && <div className="block mined">Bloque Minado</div>}
        </div>

        <div className="pending-transactions">
          <CardDescription>Bloque de Transacciones Pendientes</CardDescription>
          {/* Representación visual simplificada de las transacciones pendientes */}
        </div>

        <Button onClick={handleMineClick} disabled={blockMined}>
          Minar ({hashes} / {targetHashes} Hashes)
        </Button>

        {blockMined && (
          <div className="reward">
            <CardDescription>¡Bloque Minado!</CardDescription>
            <CardDescription>Recompensa: {reward} BTC de Juguete</CardDescription>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MiningSimulator;