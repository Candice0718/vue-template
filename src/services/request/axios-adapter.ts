import axios, { CancelTokenSource } from "axios";
import {RequestPromise} from './types';
import BaseAdapter from './base-adapter';

export default class AxiosDelegate<RequestConfig> implements BaseAdapter{
  private source!: CancelTokenSource;

   /**
   * 取消请求
   * @returns {boolean}
   */
  cancleRequest() {
    try {
      this.source && this.source.cancel();
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   *
   * @param {RequestConfig} config
   * @returns {RequestPromise<T>}
   */
  start(config: RequestConfig): RequestPromise {
    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
    return axios({
      ...config,
      cancelToken: this.source.token
    }) as RequestPromise;
  }
}