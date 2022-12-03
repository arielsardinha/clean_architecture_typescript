export interface HttpResponse<B = unknown> {
  statusCode: number;
  body: B;
}

export interface HttpRequest<B = unknown> {
  body: B;
}
