export interface IGraphQLErrorResponse {
  response: {
    errors: Array<{
      message: string;
      extensions: {
        appErrorCode: string;
        status: number;
      };
    }>;
    data: null;
    status: 200;
  };
}
