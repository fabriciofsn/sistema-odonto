"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnderecoDTO = void 0;
class EnderecoDTO {
    static enderecoDTO(endereco) {
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
exports.EnderecoDTO = EnderecoDTO;
//# sourceMappingURL=endereco.map.js.map