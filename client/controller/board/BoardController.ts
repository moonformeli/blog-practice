import BaseModel from "../../models/board/BoardModel";
import {
  IBoardData,
  IBoardPayload
} from "../../models/board/interfaces/IBoardPayload";
import { IRequestParams } from "../../models/common/IBaseController";
import BaseController from "../BaseController";

export default class BoardController extends BaseController {
  private model = new BaseModel();

  async getBoardList(): Promise<IBoardData> {
    const params = {
      method: "get",
      url: "/board/lists"
    } as IRequestParams;
    const payload = (await this.send(params)) as IBoardPayload;
    const board = this.model.getData(payload);
    return board;
  }
}
