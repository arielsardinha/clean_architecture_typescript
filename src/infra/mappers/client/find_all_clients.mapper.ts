import { Client } from "../../../enterprise/entities/client/client.entity";
import { FindAllClientOutputDto } from "../../presenters/client/find_all_clients.presenter";

export class FindAllClientsMapper {
  static toFindAllClientsOutputDto(client: Client): FindAllClientOutputDto {
    return {
      first_name: client.firstName,
      last_name: client.lastName,
      email: client.email,
      cpf: client.cpf,
    };
  }
}
