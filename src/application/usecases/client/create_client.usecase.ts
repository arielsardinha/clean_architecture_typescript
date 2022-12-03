import { Client } from "../../../enterprise/entities/client/client.entity";
import { ClientGateway } from "../../gateways/client/client.gateway";

export class CreateClientUseCase {
  readonly #clientGateway: ClientGateway;

  constructor(clientGateway: ClientGateway) {
    this.#clientGateway = clientGateway;
  }

  async execute(client: Client): Promise<Client> {
    await this.#clientGateway.create(client);
    return client;
  }
}
