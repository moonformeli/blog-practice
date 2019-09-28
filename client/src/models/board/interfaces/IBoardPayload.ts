import { IResponse } from '../../common/IAxiosController';

export interface IBoardItem {
  category_no: number;
  category_title: string;
  content: string;
  regDate: Date;
  liked: number;
  no: number;
  title: string;
  sub_title: string;
}

export interface IBoardData {
  board: IBoardItem[];
}

export interface IPostData {
  post: IBoardItem;
}

export interface IBoardPayload extends IResponse<IBoardData> {}

export interface IPostPaylaod extends IResponse<IPostData> {}
