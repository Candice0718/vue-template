export type Method = 
| 'get' | 'GET'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'
| 'link' | 'LINK'
| 'unlink' | 'UNLINK';

export type ResponseType =
| "arraybuffer"
| "blob"
| "document"
| "json"
| "text"
| "stream";

interface NormalParam {
  [propName: string]: any;
}
export type RequestParam = NormalParam | FormData;

export interface BasicCredentials {
  username: string;
  password: string;
}
export interface BasicResponse<T = any> {
  data: T;
  status: string | number;
  statusText: string;
  headers: any;
  config: RequestConfig;
  request?: any;
}
export type RequestPromise = Promise<BasicResponse>;

export interface RequestConfig {
  url?: string;
  method?: Method;
  headers?: any;
  params?: RequestParam;
  data?: RequestParam;
  timeout?: number;
  withCredentials?: boolean;
  auth?: BasicCredentials;
  responseType?: ResponseType;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;  
}