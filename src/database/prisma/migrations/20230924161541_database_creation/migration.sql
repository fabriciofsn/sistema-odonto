-- CreateTable
CREATE TABLE "dentistas" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "CFOID" VARCHAR(10) NOT NULL,
    "cirurgiao" BOOLEAN NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dentistas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consultas" (
    "id" TEXT NOT NULL,
    "dataConsulta" TIMESTAMP(3) NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "consultas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "idade" INTEGER NOT NULL,
    "CPF" VARCHAR(11) NOT NULL,
    "CPFresponsavel" VARCHAR(11),
    "telefone" VARCHAR(11) NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enderecos" (
    "id" SERIAL NOT NULL,
    "estado" VARCHAR(30) NOT NULL,
    "cidade" VARCHAR(30) NOT NULL,
    "bairro" VARCHAR(40) NOT NULL,
    "cep" VARCHAR(10) NOT NULL,
    "rua" VARCHAR(40) NOT NULL,
    "numero" INTEGER NOT NULL,

    CONSTRAINT "enderecos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ConsultaToDentista" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClienteToConsulta" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClienteToEndereco" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "dentistas_CFOID_key" ON "dentistas"("CFOID");

-- CreateIndex
CREATE UNIQUE INDEX "_ConsultaToDentista_AB_unique" ON "_ConsultaToDentista"("A", "B");

-- CreateIndex
CREATE INDEX "_ConsultaToDentista_B_index" ON "_ConsultaToDentista"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClienteToConsulta_AB_unique" ON "_ClienteToConsulta"("A", "B");

-- CreateIndex
CREATE INDEX "_ClienteToConsulta_B_index" ON "_ClienteToConsulta"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClienteToEndereco_AB_unique" ON "_ClienteToEndereco"("A", "B");

-- CreateIndex
CREATE INDEX "_ClienteToEndereco_B_index" ON "_ClienteToEndereco"("B");

-- AddForeignKey
ALTER TABLE "_ConsultaToDentista" ADD CONSTRAINT "_ConsultaToDentista_A_fkey" FOREIGN KEY ("A") REFERENCES "consultas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConsultaToDentista" ADD CONSTRAINT "_ConsultaToDentista_B_fkey" FOREIGN KEY ("B") REFERENCES "dentistas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClienteToConsulta" ADD CONSTRAINT "_ClienteToConsulta_A_fkey" FOREIGN KEY ("A") REFERENCES "clientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClienteToConsulta" ADD CONSTRAINT "_ClienteToConsulta_B_fkey" FOREIGN KEY ("B") REFERENCES "consultas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClienteToEndereco" ADD CONSTRAINT "_ClienteToEndereco_A_fkey" FOREIGN KEY ("A") REFERENCES "clientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClienteToEndereco" ADD CONSTRAINT "_ClienteToEndereco_B_fkey" FOREIGN KEY ("B") REFERENCES "enderecos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
