import { describe, test, beforeAll, expect } from "vitest";
import { Consulta } from "../../shared/consulta";
import { faker } from "@faker-js/faker";
import { Dentista } from "../dentista/dentista";
import { Cliente } from "./cliente";
import { createClienteProps } from "./iCliente";
import {
  ErrorCPFinvalido,
  ErrorIdadeInvalida,
  ErrorTamanhoMinimoNome,
  ErrorTelefoneInvalido,
} from "./cliente.exception";

let nomeValido: string;
let idadeValida: number;
let CPFvalido: string;
let CPFresponsavelValido: string;
let consultaValida: Consulta[];
let telefoneValido: string;

let nomeInvalido: string;
let idadeInvalida: number;
let CPFinvalido: string;
let CPFresponsavelInvalido: string;
let telefoneInvalido: string;

beforeAll(async () => {
  nomeValido = faker.string.alpha({ length: { min: 3, max: 5 } });
  nomeInvalido = faker.string.alpha({ length: { min: 0, max: 1 } });
  idadeValida = faker.number.int({ min: 5, max: 70 });
  idadeInvalida = faker.number.int({ min: 0, max: 0 });
  CPFvalido = faker.string.numeric({ length: { min: 11, max: 11 } });
  CPFinvalido = faker.string.numeric({ length: { min: 0, max: 10 } });
  CPFresponsavelValido = faker.string.numeric({ length: { min: 11, max: 11 } });
  CPFresponsavelInvalido = faker.string.numeric({ length: { min: 1, max: 5 } });
  telefoneValido = faker.string.alpha({ length: { min: 11, max: 11 } });
  telefoneInvalido = faker.string.alpha({ length: { min: 0, max: 5 } });

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

  test("não deve criar objeto cliente com nome inválido", async () => {
    const clienteInvalido: createClienteProps = {
      nome: nomeInvalido,
      idade: idadeValida,
      CPF: CPFvalido,
      CPFresponsavel: CPFresponsavelValido,
      consulta: consultaValida,
      telefone: telefoneValido,
    };

    expect(() => Cliente.createCliente(clienteInvalido)).toThrowError(
      ErrorTamanhoMinimoNome
    );
  });

  test("Não deve criar objeto cliente com idade menor que zero", async () => {
    const clienteIdadeInvalida: createClienteProps = {
      nome: nomeValido,
      idade: idadeInvalida,
      CPF: CPFvalido,
      CPFresponsavel: CPFresponsavelValido,
      consulta: consultaValida,
      telefone: telefoneValido,
    };

    expect(() => Cliente.createCliente(clienteIdadeInvalida)).toThrowError(
      ErrorIdadeInvalida
    );
  });

  test("não deve criar objeto cliente com CPF inválido", async () => {
    const clienteCPFInvalido: createClienteProps = {
      nome: nomeValido,
      idade: idadeValida,
      CPF: CPFinvalido,
      CPFresponsavel: CPFresponsavelValido,
      consulta: consultaValida,
      telefone: telefoneValido,
    };

    expect(() => Cliente.createCliente(clienteCPFInvalido)).toThrowError(
      ErrorCPFinvalido
    );
  });

  test("Não deve criar objeto cliente com CPF do responsavel invalido", async () => {
    const clienteCPFresponsavelInvalido: createClienteProps = {
      nome: nomeValido,
      idade: idadeValida,
      CPF: CPFvalido,
      CPFresponsavel: CPFresponsavelInvalido,
      consulta: consultaValida,
      telefone: telefoneValido,
    };

    expect(() =>
      Cliente.createCliente(clienteCPFresponsavelInvalido)
    ).toThrowError(ErrorCPFinvalido);
  });

  test("não deve criar objeto cliente com telefone inválido", () => {
    const clienteTelefoneInvalido: createClienteProps = {
      nome: nomeValido,
      idade: idadeValida,
      CPF: CPFvalido,
      CPFresponsavel: CPFresponsavelValido,
      consulta: consultaValida,
      telefone: telefoneInvalido,
    };

    expect(() => Cliente.createCliente(clienteTelefoneInvalido)).toThrowError(
      ErrorTelefoneInvalido
    );
  });
});