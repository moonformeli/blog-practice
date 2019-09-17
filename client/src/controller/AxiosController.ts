import axios from "axios";
import {
  ERequestMethod,
  IRequestParams,
  IResponse
} from "../models/common/IAxiosController";
import { pathOr, pickAll } from "ramda";

export default class AxiosController {
  private throwError(e) {
    throw Error(e);
  }

  private isClientError<T>(res: IResponse<T>) {
    const status = pathOr<number>(404, ["status"], res);
    return status >= 400 && status < 500;
  }

  private async get<T>(url: string, config: IRequestParams) {
    return await axios.get<T>(url, config);
  }

  private async post<T>(url: string, config: IRequestParams) {
    return await axios.post<T>(url, config);
  }

  protected async request<T>(reqParams: IRequestParams) {
    const { method, url } = reqParams;
    const _method = method.toUpperCase();

    let res = {
      data: {} as any,
      headers: {},
      status: 400,
      statusText: ""
    };
    try {
      if (_method === ERequestMethod.GET) {
        res = await this.get<T>(url, reqParams);
      } else if (_method === ERequestMethod.POST) {
        res = await this.post<T>(url, reqParams);
      }

      if (this.isClientError(res)) {
        this.throwError("Response is client error");
      }
    } catch (e) {
      this.throwError(e);
    }

    return pickAll(["data", "headers", "status", "statusText"], res);
  }
}
