import { boundMethod } from "autobind-decorator";
import debug from "debug";
import MariaDB from "mariadb";
import { getConfig, IConfigProps } from "../config/config";

const log = debug("Express: connect");

let instance: Connect = null as any;

export default class Connect implements IConfigProps {
  host: IConfigProps["host"];
  password: IConfigProps["password"];
  user: IConfigProps["user"];
  tables: IConfigProps["tables"];
  database: IConfigProps["database"];
  conn: MariaDB.PoolConnection;
  private maria: MariaDB.Pool;

  constructor({ host, password, user, tables, database }: IConfigProps) {
    log("Maria constructor");

    if (instance instanceof Connect) {
      return instance;
    }

    this.host = host;
    this.password = password;
    this.user = user;
    this.tables = tables;
    this.database = database;
    instance = this;
  }

  @boundMethod
  static async getInstance(): Promise<Connect> {
    log("getInstance of Connect");
    if (instance && instance instanceof Connect) {
      return instance;
    }

    const config = getConfig();
    instance = new Connect(config.getAllSettings());
    await instance.bootStrap();
    await instance.connect();
    return instance;
  }

  @boundMethod
  async bootStrap() {
    log("Maria bootStrap");
    try {
      this.maria = MariaDB.createPool({
        connectionLimit: 1,
        host: this.host,
        password: this.password,
        user: this.user
      });

      await this.connect();
    } catch (e) {
      console.error(e);
    }
  }

  @boundMethod
  async connect() {
    this.conn = await this.maria.getConnection();
    await this.conn.query(`use ${this.database}`);
  }

  @boundMethod
  isConnected() {
    return !!this.conn;
  }

  @boundMethod
  getTable(table: string) {
    if (this.tables[table]) {
      return this.tables[table];
    }
    return "";
  }
}

export const getConnection = async (props: IConfigProps): Promise<Connect> => {
  instance = new Connect(props);
  await instance.bootStrap();
  return instance;
};
