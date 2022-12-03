import { Controller } from "../../infra/controllers/controller";
import { Request, ResponseToolkit } from "@hapi/hapi";
export class HapiAdapter {
  static adapt(controller: Controller<any, any>) {
    return async (req: Request, h: ResponseToolkit, err?: Error) => {
      const response = await controller.execute({
        body: req.payload,
      });
      return h.response(response.body).code(response.statusCode);
    };
  }
}
