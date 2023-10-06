import { PrismaClient } from "@prisma/client";
export class DataSource {
  protected _datasource: PrismaClient;

  constructor(prisma: PrismaClient) {
    this._datasource = prisma;
  }
}
