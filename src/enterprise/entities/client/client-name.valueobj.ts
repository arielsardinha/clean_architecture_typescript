export class ClientName {
  #value: string;
  constructor(value: string) {
    if (value.length < 3) {
      throw new Error("Minimo de três caracteres");
    }
    if (!value.match("^([a-zA-Z]+)$")) {
      throw new Error("Invalid firstName");
    }

    this.#value = value;
  }

  get value(): string {
    return this.#value;
  }
}
