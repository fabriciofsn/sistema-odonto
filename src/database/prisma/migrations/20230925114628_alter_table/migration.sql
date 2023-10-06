/*
  Warnings:

  - You are about to drop the `_ConsultaToDentista` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ConsultaToDentista" DROP CONSTRAINT "_ConsultaToDentista_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConsultaToDentista" DROP CONSTRAINT "_ConsultaToDentista_B_fkey";

-- DropTable
DROP TABLE "_ConsultaToDentista";

-- AddForeignKey
ALTER TABLE "dentistas" ADD CONSTRAINT "dentistas_id_fkey" FOREIGN KEY ("id") REFERENCES "consultas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
