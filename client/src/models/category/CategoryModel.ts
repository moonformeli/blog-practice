import { ICategoryPayload, ICategoryData } from "./interfaces/ICategoryPayload";

export default class CategoryModel {
  getData(payload: ICategoryPayload): ICategoryData {
    const { data } = payload;
    return data;
  }
}
