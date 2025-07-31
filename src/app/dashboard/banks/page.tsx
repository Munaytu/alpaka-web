"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const bankData = [
  {
    name: "Banco Nacional de Bolivia (BNB)",
    restrictions: "Límites diarios para transferencias y retiros en USD. Posibles restricciones para grandes montos sin justificación.",
    limits: "Transferencias interbancarias: $5,000/día. Retiros en ventanilla: $10,000/día (con aviso previo).",
    notes: "Requiere justificación de fondos para transacciones mayores a $3,000.",
  },
  {
    name: "Banco Mercantil Santa Cruz (BMSC)",
    restrictions: "Restricciones en la compra/venta de USD en efectivo. Prioridad a clientes con cuentas en USD.",
    limits: "Transferencias a terceros: $3,000/día. Retiros en cajeros: $500/día.",
    notes: "Recomendado para transacciones digitales. Menos flexibilidad para efectivo.",
  },
  {
    name: "Banco Unión",
    restrictions: "Controles estrictos sobre el origen y destino de los fondos. Posibles demoras en transferencias internacionales.",
    limits: "Transferencias nacionales: $2,000/día. Retiros en ventanilla: $5,000/día.",
    notes: "Banco estatal, puede tener políticas más conservadoras.",
  },
  {
    name: "Banco FIE",
    restrictions: "Enfoque en microfinanzas, puede tener límites más bajos para transacciones en USD.",
    limits: "Transferencias: $1,000/día. Retiros: $2,000/día.",
    notes: "Ideal para pequeños y medianos emprendedores.",
  },
  {
    name: "Banco Ganadero",
    restrictions: "Similar a otros bancos privados, con límites y requisitos de justificación.",
    limits: "Transferencias: $4,000/día. Retiros: $8,000/día.",
    notes: "Buena opción para transacciones comerciales.",
  },
];

export default function BanksPage() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Información Bancaria (Bolivia)</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Aquí encontrarás información general sobre las restricciones y límites para transacciones en dólares (USD) en algunos de los principales bancos de Bolivia. Ten en cuenta que esta información es referencial y puede variar. Siempre consulta directamente con tu banco para obtener la información más actualizada.
        </p>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[150px]">Banco</TableHead>
                <TableHead className="min-w-[200px]">Restricciones Comunes</TableHead>
                <TableHead className="min-w-[200px]">Límites Referenciales</TableHead>
                <TableHead className="min-w-[250px]">Notas Adicionales</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bankData.map((bank, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{bank.name}</TableCell>
                  <TableCell>{bank.restrictions}</TableCell>
                  <TableCell>{bank.limits}</TableCell>
                  <TableCell>{bank.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
