import { boundMethod } from "autobind-decorator";
import debug from "debug";
import BaseQuery from "./baseQuery";

const log = debug("Express: Board");

export default class Board extends BaseQuery {
  constructor() {
    super();
  }

  @boundMethod
  async getLists() {
    log("get lists");

    await this.checkConnection();

    const table = this.getTable("board");
    const query = this.queryMaker("select * from", table);
    const lists = await this.requestQuery(query);
    return { lists };
  }
}
