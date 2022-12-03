import { FindAllClientUseCase } from "../../../application/usecases/client/find_all_client.usecase";
import { FindAllClientsMapper } from "../../mappers/client/find_all_clients.mapper";
import { FindAllClientOutputDto } from "../../presenters/client/find_all_clients.presenter";
import { HttpRequest, HttpResponse } from "../../web/http";
import { Controller } from "../controller";

export class FindAllClientsController
  implements Controller<any, FindAllClientOutputDto[]>
{
  #findAllClientsUseCase: FindAllClientUseCase;

  constructor(FindAllClientUseCase: FindAllClientUseCase) {
    this.#findAllClientsUseCase = FindAllClientUseCase;
  }

  async execute(
    request: HttpRequest<any>
  ): Promise<HttpResponse<FindAllClientOutputDto[]>> {
    const clients = await this.#findAllClientsUseCase.execute();

    return {
      statusCode: 200,
      body: clients.map((e) =>
        FindAllClientsMapper.toFindAllClientsOutputDto(e)
      ),
    };
  }
}
