import { boundMethod } from "autobind-decorator";
import debug from "debug";
import Express from "express";
import BaseQuery from "./baseQuery";

const log = debug("Express: Board");

export default class Board extends BaseQuery {
  constructor() {
    super();
  }

  @boundMethod
  async getLists(req: Express.Request, res: Express.Response) {
    log("get lists");

    await this.checkConnection();

    const table = this.getTable("board");
    const query = this.queryMaker("select * from", table);
    const boards = await this.requestQuery(query);
    res.json({ boards });
  }
}
