import BaseContoller from "../BaseController";
import { IRequestParams } from "../../models/common/IBaseController";

export default class CategoryController extends BaseContoller {
  async getCategoryList() {
    const params = {
      method: "get",
      url: "/category/lists"
    } as IRequestParams;
    return await this.send(params);
  }
}
