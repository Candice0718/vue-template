/**
 *@author Candice
 *@date 2019/03/13
 *@description 网络请求基础配置
 */
import AxiosAdapter from "./axios-adapter";

const ENV: any= {
    /**
     * test环境链接地址
     */
    ENV_TEST: {
      baseUrl: " https://www.easy-mock.com/mock/5e6b24140e58521b7af0e8da/template"
    },
    /**
     * uat环境链接地址
     */
    ENV_UAT: {
      baseUrl: ""
    },
    /**
     * online环境链接地址
     */
    ENV_ONLINE: {
      baseUrl: ""
    }
  },
  ApiEnv = ENV[process.env.VUE_APP_PUBLISH_ENV || "ENV_TEST"], //后端环境切换
  API = {
    defaults: {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
        source: "WEB"
      },
      timeout: 60 * 1000,
      method: "POST"
    },
    getAdapter: () => new AxiosAdapter(),
    baseUrl: ApiEnv.baseUrl
  };
export default API;
export { ApiEnv };