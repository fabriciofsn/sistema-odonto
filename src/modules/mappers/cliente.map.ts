import { Cliente } from "@modules/domain/cliente/cliente";
import { ICliente } from "@modules/domain/cliente/iCliente";

export class ClienteDTO {
  public static clienteDTO(cliente: Cliente): ICliente {
    return {
      nome: cliente.nome,
      idade: cliente.idade,
      CPF: cliente.CPF,
      telefone: cliente.telefone,
      consulta: cliente.consulta,
    };
  }
}
