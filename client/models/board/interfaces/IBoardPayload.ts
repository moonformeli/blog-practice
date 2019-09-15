import { IResponse } from "../../common/IAxiosController";

interface IBoardItem {
  category_no: number;
  category_title: string;
  content: string;
  regDate: Date;
  liked: number;
  no: number;
  title: string;
}

export interface IBoardData {
  board: IBoardItem[];
}

export interface IBoardPayload extends IResponse<IBoardData> {}
