import { Client } from "../../../enterprise/entities/client/client.entity";
import {
  CreateClientInputDto,
  CreateClientOutputDto,
} from "../../presenters/client/create_client.presenter";

export class CreateClientMapper {
  static toClient(createClientInputDto: CreateClientInputDto): Client {
    return new Client(
      createClientInputDto.first_name,
      createClientInputDto.last_name,
      createClientInputDto.email,
      createClientInputDto.cpf
    );
  }

  static toCreateClientOutputDto(client: Client): CreateClientOutputDto {
    return {
      first_name: client.firstName,
      last_name: client.lastName,
      email: client.email,
      cpf: client.cpf,
    };
  }
}
