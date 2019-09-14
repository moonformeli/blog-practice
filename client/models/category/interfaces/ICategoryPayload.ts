import { IResponse } from "../../common/IAxiosController";

interface ICategoryItem {
  category_no: number;
  category_parent: number;
  category_title: string;
}

export interface ICategoryData {
  category: ICategoryItem[];
}

export interface ICategoryPayload extends IResponse<ICategoryData> {}
