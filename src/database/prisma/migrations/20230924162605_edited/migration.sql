/*
  Warnings:

  - You are about to drop the column `dataConsulta` on the `consultas` table. All the data in the column will be lost.
  - Added the required column `data_consulta` to the `consultas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "consultas" DROP COLUMN "dataConsulta",
ADD COLUMN     "data_consulta" TIMESTAMP(3) NOT NULL;
