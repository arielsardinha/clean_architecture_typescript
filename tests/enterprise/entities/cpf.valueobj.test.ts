import { Cpf } from "../../../src/enterprise/entities/cpf.valueobj";

test("Deve lançar um erro quando tiver menos que onze caracteres", () => {
  const exec = () => new Cpf("");

  expect(exec).toThrow(Error);
});
