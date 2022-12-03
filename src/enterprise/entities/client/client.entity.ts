import { Cpf } from "../cpf.valueobj";
import { Email } from "../email.valueobj";
import { ClientName } from "./client-name.valueobj";

export class Client {
  #firstName: ClientName;
  #lastName: ClientName;
  #email: Email;
  #cpf: Cpf;

  constructor(firstName: string, lastName: string, email: string, cpf: string) {
    this.#firstName = new ClientName(firstName);
    this.#lastName = new ClientName(lastName);
    this.#email = new Email(email);
    this.#cpf = new Cpf(cpf);
  }

  get firstName(): string {
    return this.#firstName.value;
  }

  get lastName(): string {
    return this.#lastName.value;
  }

  get email(): string {
    return this.#email.value;
  }

  get cpf(): string {
    return this.#cpf.value;
  }
}
