import ApiResult from "./api-result";
import RequestError from "./request-error";

export default interface BaseResponse {
  successCallBack<T>(data: ApiResult<T>): void;
  failCallBack(error: RequestError): void;
}

