/*
  Warnings:

  - You are about to drop the `_ClienteToConsulta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ClienteToConsulta" DROP CONSTRAINT "_ClienteToConsulta_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClienteToConsulta" DROP CONSTRAINT "_ClienteToConsulta_B_fkey";

-- DropTable
DROP TABLE "_ClienteToConsulta";

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_id_fkey" FOREIGN KEY ("id") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
