import { Cliente } from "@modules/domain/cliente/cliente";
export class ClienteDTO {
  public static clienteDTO(cliente: Cliente): {} {
    return {
      nome: cliente.nome,
      idade: cliente.idade,
      CPF: cliente.CPF,
      telefone: cliente.telefone,
      consulta: cliente.consulta.map((dados) => {
        return {
          data: dados.data,
          dentista: {
            nome: dados.dentista.nomeDentista,
            CFOID: dados.dentista.CFOID,
            cirurgiao: dados.dentista.cirurgiao,
          },
        };
      }),
    };
  }
}
