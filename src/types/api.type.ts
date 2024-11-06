export type TResponse = {
  isSuccess: boolean;
  data?: any;
  message?: string;
  errorMessage?: string;
  [key: string]: any;
};
