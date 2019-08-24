import { boundMethod } from "autobind-decorator";
import Connect from "../connect/connect";

export default class BaseQuery {
  connect: Connect;

  constructor() {
    this.connect = Connect.getInstance();
  }

  @boundMethod
  async checkConnection() {
    if (!this.connect.isConnected()) {
      await this.connect.connect();
    }
  }

  @boundMethod
  queryMaker(query: string, table: string, condition?: string) {
    // TODO: 추가 작업 필요
    const _condition = condition || "";
    return `${query} ${table} ${_condition}`;
  }

  @boundMethod
  async requestQuery(query: string) {
    // TODO: 예외처리 할 것
    return await this.connect.conn.query(query);
  }

  @boundMethod
  getTable(table: string) {
    return this.connect.getTable(table);
  }
}
