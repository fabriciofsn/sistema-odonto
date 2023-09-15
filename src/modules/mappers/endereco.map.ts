import { Endereco } from "@modules/domain/endereco/endereco.entity";

export class EnderecoDTO {
  public static enderecoDTO(endereco: Endereco[]): {} {
    return endereco.map((dados) => {
      return {
        estado: dados.estado,
        cidade: dados.cidade,
        bairro: dados.bairro,
        cep: dados.cep,
        rua: dados.rua,
        numero: dados.numero,
      };
    });
  }
}
