import { Controller } from "../../infra/controllers/controller";
import { Request, Response } from "express";
export class ExpressAdapter {
  static adapt(controller: Controller<any, any>) {
    return async (req: Request, res: Response) => {
      const response = await controller.execute({
        body: req.body,
      });
      return res.status(response.statusCode).json(response.body);
    };
  }
}
