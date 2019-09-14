import { boundMethod } from "autobind-decorator";
import debug from "debug";
import Express from "express";
import BaseQuery from "./baseQuery";

const log = debug("Express: Category");

export default class Category extends BaseQuery {
  constructor() {
    super();
  }

  @boundMethod
  async getLists(req: Express.Request, res: Express.Response) {
    log("get lists");

    await this.checkConnection();

    const table = this.getTable("category");
    const query = this.queryMaker("select * from", table);
    const lists = await this.requestQuery(query);
    res.json({ lists });
  }
}
