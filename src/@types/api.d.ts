interface APIResponse {
  data: any;
  message: string;
}

interface APIResponseError {
  message: string;
  statusCode: number;
}
