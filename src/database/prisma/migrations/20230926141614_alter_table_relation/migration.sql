/*
  Warnings:

  - You are about to drop the `_ClienteToEndereco` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ClienteToEndereco" DROP CONSTRAINT "_ClienteToEndereco_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClienteToEndereco" DROP CONSTRAINT "_ClienteToEndereco_B_fkey";

-- DropForeignKey
ALTER TABLE "consultas" DROP CONSTRAINT "consultas_id_fkey";

-- DropForeignKey
ALTER TABLE "dentistas" DROP CONSTRAINT "dentistas_id_fkey";

-- DropTable
DROP TABLE "_ClienteToEndereco";

-- CreateTable
CREATE TABLE "dentista_consulta" (
    "dentista_id" TEXT NOT NULL,
    "consulta_id" TEXT NOT NULL,

    CONSTRAINT "dentista_consulta_pkey" PRIMARY KEY ("dentista_id","consulta_id")
);

-- CreateTable
CREATE TABLE "cliente_consulta" (
    "consulta_id" TEXT NOT NULL,
    "consulta__id" TEXT NOT NULL,

    CONSTRAINT "cliente_consulta_pkey" PRIMARY KEY ("consulta_id","consulta__id")
);

-- CreateTable
CREATE TABLE "clientes_enderecos" (
    "cliente_id" TEXT NOT NULL,
    "endereco_id" INTEGER NOT NULL,

    CONSTRAINT "clientes_enderecos_pkey" PRIMARY KEY ("cliente_id","endereco_id")
);

-- AddForeignKey
ALTER TABLE "dentista_consulta" ADD CONSTRAINT "dentista_consulta_dentista_id_fkey" FOREIGN KEY ("dentista_id") REFERENCES "dentistas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dentista_consulta" ADD CONSTRAINT "dentista_consulta_consulta_id_fkey" FOREIGN KEY ("consulta_id") REFERENCES "consultas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente_consulta" ADD CONSTRAINT "cliente_consulta_consulta_id_fkey" FOREIGN KEY ("consulta_id") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente_consulta" ADD CONSTRAINT "cliente_consulta_consulta__id_fkey" FOREIGN KEY ("consulta__id") REFERENCES "consultas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientes_enderecos" ADD CONSTRAINT "clientes_enderecos_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientes_enderecos" ADD CONSTRAINT "clientes_enderecos_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
