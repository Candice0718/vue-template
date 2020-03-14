import { RequestConfig, BasicResponse } from "./types";

export default interface RequestError<T = any> extends Error {
  config: RequestConfig;
  code?: string | number;
  request?: any;
  response?: BasicResponse<T>;
  isRequestError: boolean;
}