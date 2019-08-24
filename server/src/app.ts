import cors from "cors";
import debug from "debug";
import express, { Application, Request, Response } from "express";
import MariaDB from "mariadb";
import { getConfig } from "./config/config";
import { getConnection } from "./connect/connect";

const log = debug("Express: app");

const PORT = 5000;
const app: Application = express();
const config = getConfig();

// Connect MariaDB
const connect = getConnection(config.getAllSettings());

app.get("/", (req: Request, res: Response) => {
  log("Home: Get");
  return res.redirect("http://localhost:3000/");
});

app.listen(PORT, () => {
  log(`Server running on port: ${PORT}`);
});
