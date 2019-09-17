import { IBoardPayload, IBoardData } from "./interfaces/IBoardPayload";

export default class BoardModel {
  getData(payload: IBoardPayload): IBoardData {
    const { data } = payload;
    return data;
  }
}
