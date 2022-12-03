import hapi from "@hapi/hapi";
import { HapiAdapter } from "./adapters/hapi.adapter";
import { ClientFactory } from "./factories/client.factory";

(async () => {
  const server = hapi.server({
    port: 3001,
    host: "localhost",
  });

  server.route({
    method: "POST",
    path: "/api/clients",
    handler: HapiAdapter.adapt(ClientFactory.getCreateClientController()),
  });

  server.route({
    method: "GET",
    path: "/api/clients",
    handler: HapiAdapter.adapt(ClientFactory.getFindAllClientsController()),
  });

  await server.start();
})();
