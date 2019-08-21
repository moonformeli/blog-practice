import { boundMethod } from "autobind-decorator";
import * as devConfig from "./config.dev";

const CONFIGS: Record<string, any> = {
  development: devConfig.getConfig
};

interface IConfig {
  getHost: () => void;
  getUser: () => void;
  getPassword: () => void;
  getDatabase: () => void;
  getTables: () => void;
}

export interface IConfigProps {
  database: string;
  host: string;
  password: string;
  tables: Record<string, any>;
  user: string;
}

class Config implements IConfig {
  private database: string;
  private host: string;
  private password: string;
  private tables: Record<string, string>;
  private user: string;

  constructor({ host, user, password, database, tables }: IConfigProps) {
    this.host = host;
    this.user = user;
    this.password = password;
    this.database = database;
    this.tables = tables;
  }

  @boundMethod
  getHost() {
    return this.host;
  }

  @boundMethod
  getUser() {
    return this.user;
  }

  @boundMethod
  getPassword() {
    return this.password;
  }

  @boundMethod
  getDatabase() {
    return this.database;
  }

  @boundMethod
  getTables() {
    return this.tables;
  }

  @boundMethod
  getAllSettings(): IConfigProps {
    return {
      database: this.getDatabase(),
      host: this.getHost(),
      password: this.getPassword(),
      tables: this.getTables(),
      user: this.getUser()
    };
  }
}

export const getConfig = (): Config => {
  const mode: keyof typeof CONFIGS = process.env.RUN_MODE || "development";
  const configByMode: () => IConfigProps = CONFIGS[mode];

  if (typeof configByMode === "function") {
    return new Config(configByMode()) as Config;
  }
  throw new Error("Can't get config environment.");
};
