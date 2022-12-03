import { Client } from "../../../../../src/enterprise/entities/client/client.entity";

export interface ClientGateway {
  findAll(): Promise<Client[]>;
}
