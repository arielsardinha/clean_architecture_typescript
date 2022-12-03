import { HttpRequest, HttpResponse } from "../web/http";

export interface Controller<Req = unknown, Res = unknown> {
  execute(request: HttpRequest<Req>): Promise<HttpResponse<Res>>;
}
