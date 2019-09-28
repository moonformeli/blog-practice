import { head, pathOr } from 'ramda';
import { IBoardData, IBoardPayload, IPostData, IPostPaylaod } from './interfaces/IBoardPayload';

// TODO: 데이터를 받아오지 못했을 때를 대비한 에러 처리 할 것
export default class BoardModel {
  getData(payload: IBoardPayload): IBoardData {
    const { data } = payload;
    return data;
  }

  getPost(payload: IPostPaylaod): IPostData {
    const post = head(pathOr([], ['data', 'post'], payload));
    return post;
  }
}
