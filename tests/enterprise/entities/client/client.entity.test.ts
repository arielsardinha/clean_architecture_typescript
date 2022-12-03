import { Client } from "../../../../src/enterprise/entities/client/client.entity";

test("deve retornar o nome uma string", () => {
  const client = new Client(
    "Ariel",
    "Sardinha",
    "Test@email.com",
    "12312312312"
  );
  expect(client.firstName).toBe("Ariel");
});

test("deve retornar o sobrenome uma string", () => {
  const client = new Client(
    "Ariel",
    "Sardinha",
    "Test@email.com",
    "12312312312"
  );
  expect(client.lastName).toBe("Sardinha");
});

test("deve retornar o Email uma string", () => {
  const client = new Client(
    "Ariel",
    "Sardinha",
    "Test@email.com",
    "12312312312"
  );
  expect(client.email).toBe("Test@email.com");
});

test("deve retornar o Cpf uma string", () => {
  const client = new Client(
    "Ariel",
    "Sardinha",
    "Test@email.com",
    "12312312312"
  );
  expect(client.cpf).toBe("12312312312");
});

test("Teste deve lançar um erro quando nome com menos que três caracteres", () => {
  const exec = () =>
    new Client("A", "Sardinha", "Test@email.com", "12312312312");

  expect(exec).toThrow(Error);
});

test("Teste deve lançar um erro quando sobrenome com menos que três caracteres", () => {
  const exec = () => new Client("Ariel", "S", "Test@email.com", "12312312312");

  expect(exec).toThrow(Error);
});
