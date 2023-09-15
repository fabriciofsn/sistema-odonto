import { Cliente } from "@modules/domain/cliente/cliente.entity";
import { ConsultarDTO } from "./consulta.map";
import { EnderecoDTO } from "./endereco.map";
export class ClienteDTO {
  public static clienteDTO(cliente: Cliente): {} {
    return {
      nome: cliente.nome,
      idade: cliente.idade,
      CPF: cliente.CPF,
      telefone: cliente.telefone,
      consulta: ConsultarDTO.consultaDTO(cliente.consulta),
      endereco: EnderecoDTO.enderecoDTO(cliente.enderecos),
    };
  }
}
