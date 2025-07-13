"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const WalletSimulator = () => {
  const [seedPhrase, setSeedPhrase] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [balance, setBalance] = useState(1);
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [transactionLink, setTransactionLink] = useState('');

  const handleCreateWallet = () => {
    // Generar una "frase semilla de juguete"
    const newSeedPhrase = 'palabra1 palabra2 palabra3 palabra4 palabra5 palabra6 palabra7 palabra8 palabra9 palabra10 palabra11 palabra12';
    setSeedPhrase(newSeedPhrase);

    // Generar una "dirección pública de juguete"
    const newPublicKey = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
    setPublicKey(newPublicKey);
  };

  const handleSendFunds = () => {
    // Simular el envío de fondos
    if (amount > balance) {
      alert('Fondos insuficientes');
      return;
    }

    setBalance(balance - amount);

    // Simular la creación de un enlace a un explorador de bloques
    const newTransactionLink = '/explorador-de-bloques?transaccion=1234567890';
    setTransactionLink(newTransactionLink);
  };

  return (
    <Card className="w-[400px]">
      <CardContent>
        <CardTitle>Simulador de Wallet Interactivo</CardTitle>

        {!seedPhrase ? (
          <Button onClick={handleCreateWallet}>Crear Wallet</Button>
        ) : (
          <div>
            <CardDescription><strong>Frase Semilla:</strong> {seedPhrase}</CardDescription>
            <CardDescription><strong>Dirección Pública:</strong> {publicKey}</CardDescription>
            <CardDescription><strong>Balance:</strong> {balance} BTC de Juguete</CardDescription>

            <div>
              <Label>Dirección del Destinatario:</Label>
              <Input
                type="text"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                className="mb-2"
              />
            </div>

            <div>
              <Label>Cantidad a Enviar:</Label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                className="mb-2"
              />
            </div>

            <Button onClick={handleSendFunds}>Enviar Fondos</Button>

            {transactionLink && (
              <CardDescription>
                Transacción Enviada. Ver en el <a href={transactionLink}>Explorador de Bloques Simplificado</a>
              </CardDescription>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WalletSimulator;