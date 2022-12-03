import { FindAllClientUseCase } from "../../../../src/application/usecases/client/find_all_client.usecase";
import { Client } from "../../../../src/enterprise/entities/client/client.entity";
import { ClientInMemoryGateway } from "../../../../src/infra/gateways/client/client_inmemory.gateway";

test("Deve retornar a lista de clientes", async () => {
  const clientGatewayMock = new ClientInMemoryGateway();
  const findAllClientsUseCase = new FindAllClientUseCase(clientGatewayMock);

  const expectedClient = [
    new Client("Ariel", "Sardinha", "Test@email.com", "12312312312"),
  ];

  const actualClients = await findAllClientsUseCase.execute();

  expect(actualClients).toEqual(expectedClient);
});
