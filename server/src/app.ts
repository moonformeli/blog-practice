import cors from "cors";
import debug from "debug";
import express, { Application, Request, Response, Router } from "express";
import MariaDB from "mariadb";
import { getConfig } from "./config/config";
import { router } from "./route/router";

const log = debug("Express: app");

const PORT = 5000;
const app: Application = express();
const config = getConfig();

app.use(router);

app.get("/", (req: Request, res: Response) => {
  log("Home: Get");
  return res.send("Hello World");
});

app.listen(PORT, () => {
  log(`Server running on port: ${PORT}`);
});
