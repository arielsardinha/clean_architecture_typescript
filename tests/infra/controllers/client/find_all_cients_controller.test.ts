import { FindAllClientUseCase } from "../../../../src/application/usecases/client/find_all_client.usecase";
import { FindAllClientsController } from "../../../../src/infra/controllers/client/find_all_clients.controller";
import { ClientInMemoryGateway } from "../../../../src/infra/gateways/client/client_inmemory.gateway";
import { FindAllClientOutputDto } from "../../../../src/infra/presenters/client/find_all_clients.presenter";
import { HttpResponse } from "../../../../src/infra/web/http";

test("Deve retornar uma resposta http com status code 200 e o body contendo a lista de clientes", async () => {
  const gateway = new ClientInMemoryGateway();
  const useCase = new FindAllClientUseCase(gateway);
  const controller = new FindAllClientsController(useCase);

  const expectedResponse: HttpResponse<FindAllClientOutputDto[]> = {
    statusCode: 200,
    body: [
      {
        first_name: "Ariel",
        last_name: "Sardinha",
        email: "Test@email.com",
        cpf: "12312312312",
      },
    ],
  };
  const actualResponse = await controller.execute({ body: {} });

  expect(actualResponse).toEqual(expectedResponse);
});
