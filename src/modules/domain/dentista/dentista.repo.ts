import { DataSource } from "@shared/repository/datasource.prisma";
import { Dentista } from "./dentista";
import { IDentistaDB } from "./dentista.repo.interface";

export class DentistaRepoDB
  extends DataSource
  implements IDentistaDB<Dentista>
{
  async recByID(cuid: string): Promise<Dentista | null> {
    throw new Error("Method not implemented.");
  }

  recAll(): Promise<Dentista[]> {
    throw new Error("Method not implemented.");
  }
  exists(cuid: string): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  insert(entity: Dentista): Promise<Dentista> {
    throw new Error("Method not implemented.");
  }
  update(cuid: string, entity: Partial<Dentista>): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  delete(cuid: string): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
}
