export class Cpf {
  #value: string;

  constructor(value: string) {
    if (!value.match("^([0-9]{11})$")) {
      throw new Error("Invalid cpf");
    }

    this.#value = value;
  }

  get value(): string {
    return this.#value;
  }
}
