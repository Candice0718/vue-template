import BaseRequest from "../request/base-request";
import { RequestConfig } from "../request/types";

export default class HomeRequest extends BaseRequest {
  constructor(config: RequestConfig) {
    super({ ...config, method: "GET" });
  }

  public requestUrl(): string {
    return "/test";
  }
}
