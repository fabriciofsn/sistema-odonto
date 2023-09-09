import { describe, test, beforeAll, expect } from "vitest";
import { faker } from "@faker-js/faker";
import { createDentistaProps } from "./iDentista";
import { Dentista } from "./dentista";
import { ErrorTamanhoMinimoNome } from "../cliente/cliente.exception";
import { CFOIDinvalido } from "./dentista.exception";

let nomeValido: string;
let CFOvalido: string;
let cirurgiao: boolean;

let nomeInvalido: string;
let CFOinvalido: string;

beforeAll(async () => {
  nomeValido = faker.string.alpha({ length: { min: 3, max: 5 } });
  CFOvalido = faker.string.numeric({ length: { min: 8, max: 8 } });
  cirurgiao = true;

  nomeInvalido = faker.string.alpha({ length: { min: 0, max: 2 } });
  CFOinvalido = faker.string.numeric({ length: { min: 0, max: 7 } });
});

describe("testa o objeto dentista", () => {
  test("Deve criar objeto dentista", async () => {
    const dentistaValido: createDentistaProps = {
      nome: nomeValido,
      CFOID: CFOvalido,
      cirurgiao: cirurgiao,
    };
    expect(Dentista.createDentista(dentistaValido)).to.be.instanceOf(Dentista);
  });

  test("Não deve criar objeto dentista com nome inválido", async () => {
    const dentistaNomeInvalido: createDentistaProps = {
      nome: nomeInvalido,
      CFOID: CFOvalido,
      cirurgiao: cirurgiao,
    };
    expect(() => Dentista.createDentista(dentistaNomeInvalido)).toThrowError(
      ErrorTamanhoMinimoNome
    );
  });

  test("Não deve criar objeto dentista com CFO inválido", () => {
    const dentistaNomeInvalido: createDentistaProps = {
      nome: nomeValido,
      CFOID: CFOinvalido,
      cirurgiao: cirurgiao,
    };

    expect(() => Dentista.createDentista(dentistaNomeInvalido)).toThrowError(
      CFOIDinvalido
    );
  });
});
