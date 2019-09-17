import CategoryModel from "../../models/category/CategoryModel";
import {
  ICategoryData,
  ICategoryPayload
} from "../../models/category/interfaces/ICategoryPayload";
import { IRequestParams } from "../../models/common/IBaseController";
import BaseContoller from "../BaseController";

export default class CategoryController extends BaseContoller {
  private model = new CategoryModel();

  async getCategoryList(): Promise<ICategoryData> {
    const params = {
      method: "get",
      url: "/category/lists"
    } as IRequestParams;
    const payload = (await this.send(params)) as ICategoryPayload;
    const category = this.model.getData(payload);
    return category;
  }
}
