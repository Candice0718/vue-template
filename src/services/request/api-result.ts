export default interface ApiResult<T> {
  code: string | number;
  message: string;
  data: T;
}
