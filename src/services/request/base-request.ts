/**
 * @author Candice
 * @date 2020/03/13
 * @description 基础请求类
 */

import Defaults from "./defaults";
import {ResponseCode} from "./response.code";
import BaseAdapter from "./base-adapter";
import BaseResponse from "./base-response";
import RequestError from "./request-error";
import { RequestConfig, BasicResponse } from "./types";
import ApiResult from "./api-result";

export default abstract class BaseRequest {
  protected mAdaper: BaseAdapter;
  protected requestConfig: RequestConfig;
  protected mResponse!: BaseResponse;
  protected canceled = false;

  /**
   * constructor
   * @param {RequestConfig} requestConfig
   */
  constructor(requestConfig: RequestConfig = {}) {
    this.mAdaper = Defaults.getAdapter();
    this.requestConfig = {
      ...(Defaults.defaults as RequestConfig),
      ...requestConfig
    };
  }

  /**
   * 返回接口地址
   * @returns {string}
   */
  protected abstract requestUrl(): string;

  /**
   * start a request
   * @param {BaseResponse} response
   * @returns {Promise<any>}
   */
  async start<T>(response: BaseResponse) {
    try {
      this.canceled = false;
      this.mResponse = response;
      this.requestConfig.url = this.getBaseUrl() + this.requestUrl();
      const result = await this.mAdaper.start(this.requestConfig);
      !this.isCanceled() && this.handleResponse<T, ApiResult<T>>(result);
      return result;
    } catch (erro) {
      !this.isCanceled() &&
        this.handleErro({
          ...erro,
          config: this.requestConfig,
          code: ResponseCode.CODE_ERRO_UNKOWN,
          request: this,
          isRequestError: true
        });
    }
  }

  /**
   * handle response
   * @param {BasicResponse<T extends ApiResult<V>>} result
   */
  handleResponse<V, T extends ApiResult<V>>(result: BasicResponse<T>) {
    if (
      result &&
      result.data &&
      ResponseCode.CODE_SUCCESS == result.status &&
      this.mResponse &&
      !this.isCanceled()
    ) {
      this.onSuccess<V>(result.data);
    } else {
      this.handleErro({
        name: "RequestError",
        message: "请求失败",
        config: this.requestConfig,
        code: ResponseCode.CODE_ERRO_UNKOWN,
        request: this,
        response: result,
        isRequestError: true
      });
    }
    this.log(result);
  }

  /**
   * handle error
   * @param {RequestError} error
   */
  handleErro(error: RequestError) {
    this.onErro(error);
  }

  /**
   *  on success
   * @param {ApiResult<T>} data
   */
  onSuccess<T>(data: ApiResult<T>) {
    this.mResponse.successCallBack<T>(data);
  }

  /**
   * handle error when it has error
   * @param {RequestError} error
   */
  onErro(error: RequestError) {
    this.mResponse.failCallBack(error);
  }

  /**
   * base url for request
   * @returns {string}
   */
  getBaseUrl(): string {
    return Defaults.baseUrl;
  }

  /**
   * judge if current request is cancled.
   * @returns {boolean}
   */
  isCanceled(): boolean {
    return this.canceled;
  }

  /**
   * cancel current request
   * @returns {BaseRequest}
   */
  cancelRequest() {
    this.canceled = true;
    this.mAdaper.cancleRequest();
    return this;
  }

  /**
   * log for development
   * @param {BasicResponse | string} response
   * @returns {BaseRequest}
   */
  log(response: BasicResponse | string) {
    process.env.NODE_ENV !== "production" && console.log(response);
    return this;
  }
}
