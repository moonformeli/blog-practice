import { IConfigProps } from "./config";

export const getConfig = () => {
  return {
    database: "blog",
    host: "localhost",
    password: "12345",
    tables: {
      board: "board",
      category: "category"
    },
    user: "root"
  };
};
