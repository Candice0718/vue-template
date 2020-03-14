/**
 *@author Candice
 *@date 2020/03/08
 *@description 网络请求适配器
 */
import {RequestPromise, RequestConfig} from './types';
export default interface BaseAdapter {
  /**
   * 取消请求
   * @returns {boolean} 是否成功
   */
  cancleRequest(): boolean;
  /**
   * start
   * @param {RequestConfig} config
   * @returns {RequestPromise}
   * @memberof BaseAdapter
   */
  start(config: RequestConfig): RequestPromise;
}