import { Client } from "../../../enterprise/entities/client/client.entity";
import { ClientGateway } from "../../gateways/client/client.gateway";

export class FindAllClientUseCase {
  readonly #clientGateway: ClientGateway;

  constructor(clientGateway: ClientGateway) {
    this.#clientGateway = clientGateway;
  }

  async execute(): Promise<Client[]> {
    return await this.#clientGateway.findAll();
  }
}
