import { ClientGateway } from "../../application/gateways/client/client.gateway";
import { CreateClientUseCase } from "../../application/usecases/client/create_client.usecase";
import { FindAllClientUseCase } from "../../application/usecases/client/find_all_client.usecase";
import { CreateClientController } from "../../infra/controllers/client/create_client.controller";
import { FindAllClientsController } from "../../infra/controllers/client/find_all_clients.controller";
import { ClientMySqlGateway } from "../../infra/gateways/client/cleint_mysql.gateway";

export class ClientFactory {
  static #clientGatewayInstance: ClientGateway;
  static getClientGateway(): ClientGateway {
    if (!this.#clientGatewayInstance) {
      this.#clientGatewayInstance = new ClientMySqlGateway();
    }
    return this.#clientGatewayInstance;
  }

  static getFindAllClientsUseCase(): FindAllClientUseCase {
    return new FindAllClientUseCase(this.getClientGateway());
  }

  static getFindAllClientsController(): FindAllClientsController {
    return new FindAllClientsController(this.getFindAllClientsUseCase());
  }

  static getCreateClientUseCase(): CreateClientUseCase {
    return new CreateClientUseCase(this.getClientGateway());
  }

  static getCreateClientController(): CreateClientController {
    return new CreateClientController(this.getCreateClientUseCase());
  }
}
