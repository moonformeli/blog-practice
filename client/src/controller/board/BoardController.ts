import BaseModel from '../../models/board/BoardModel';
import { IBoardData, IBoardPayload, IPostData, IPostPaylaod } from '../../models/board/interfaces/IBoardPayload';
import { IRequestParams } from '../../models/common/IBaseController';
import BaseController from '../BaseController';

export default class BoardController extends BaseController {
  private model = new BaseModel();

  async getBoardList(): Promise<IBoardData> {
    const params = {
      method: 'get',
      url: '/board/lists',
    } as IRequestParams;
    const payload = (await this.send(params)) as IBoardPayload;
    const board = this.model.getData(payload);
    return board;
  }

  async getPostById(id: number): Promise<IPostData> {
    const reqParam = {
      method: 'get',
      url: `/board/post/${id}`,
    } as IRequestParams;
    const payload = (await this.send(reqParam)) as IPostPaylaod;
    const post = this.model.getPost(payload);
    return post;
  }
}
