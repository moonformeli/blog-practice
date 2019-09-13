import { mergeAll } from "ramda";
import { IRequestParams } from "../models/common/IBaseController";
import AxiosController from "./AxiosController";

export default class BaseController extends AxiosController {
  private PATH: string = "http://localhost:5000";

  private getPath(url: string) {
    return `${this.PATH}/${url}`.replace(/(\/)+/g, "/");
  }

  private async rebuild(reqParams: IRequestParams) {
    const { url } = reqParams;
    const _url = this.getPath(url);
    // const newParams = mergeAll([reqParams, { url: _url }]);
    const baseParams = {
      baseURL: this.PATH,
      headers: {
        "Content-Type": "application/json"
      }
    };
    return await this.request(mergeAll([baseParams, reqParams]));
  }

  protected async send(reqParams: IRequestParams) {
    return await this.rebuild(reqParams);
  }
}
