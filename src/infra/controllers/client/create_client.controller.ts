import { CreateClientUseCase } from "../../../application/usecases/client/create_client.usecase";
import { CreateClientMapper } from "../../mappers/client/create_client.mapper";
import {
  CreateClientInputDto,
  CreateClientOutputDto,
} from "../../presenters/client/create_client.presenter";
import { HttpRequest, HttpResponse } from "../../web/http";
import { Controller } from "../controller";

export class CreateClientController implements Controller {
  #createClientUseCase: CreateClientUseCase;

  constructor(createClientUseCase: CreateClientUseCase) {
    this.#createClientUseCase = createClientUseCase;
  }

  async execute(
    request: HttpRequest<CreateClientInputDto>
  ): Promise<HttpResponse<CreateClientOutputDto>> {
    const clientToCreate = CreateClientMapper.toClient(request.body);
    const createClient = await this.#createClientUseCase.execute(
      clientToCreate
    );

    return {
      statusCode: 200,
      body: CreateClientMapper.toCreateClientOutputDto(createClient),
    };
  }
}
