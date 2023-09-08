import { describe, test, beforeAll, expect } from "vitest";
import { Consulta } from "../../shared/consulta";
import { faker } from "@faker-js/faker";
import { Dentista } from "../dentista/Dentista";
import { Cliente } from "./cliente";
import { createClienteProps } from "./iCliente";

let nomeValido: string;
let idadeValida: string;
let CPFvalido: string;
let CPFresponsavelValido: string;
let consultaValida: Consulta[];
let telefoneValido: string;

beforeAll(async () => {
  nomeValido = faker.string.alpha({ length: { min: 3, max: 5 } });
  idadeValida = faker.string.alpha({ length: { min: 5, max: 70 } });
  CPFvalido = faker.string.numeric({ length: { min: 11, max: 11 } });
  CPFresponsavelValido = faker.string.numeric({ length: { min: 11, max: 11 } });
  telefoneValido = faker.string.alpha({ length: { min: 11, max: 11 } });
  let dentista = Dentista.createDentista({
    nome: "jean",
    CFOID: "123456/78",
    cirurgiao: true,
  });

  let consulta1 = new Consulta(new Date(), new Date(), dentista);
  let consulta2 = new Consulta(new Date(), new Date(), dentista);
  let consulta3 = new Consulta(new Date(), new Date(), dentista);
  consultaValida = faker.helpers.arrayElements<Consulta>(
    [consulta1, consulta2, consulta3],
    {
      min: 1,
      max: 3,
    }
  );
});

describe("test objeto cliente", () => {
  test("Cria objeto dentista valido", async () => {
    const clienteValido: createClienteProps = {
      nome: nomeValido,
      idade: idadeValida,
      CPF: CPFvalido,
      CPFresponsavel: CPFresponsavelValido,
      consulta: consultaValida,
      telefone: telefoneValido,
    };

    expect(Cliente.createCliente(clienteValido)).to.be.instanceOf(Cliente);
  });
});
