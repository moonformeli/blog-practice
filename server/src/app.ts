import debug from "debug";
import express, { Application, Request, Response } from "express";

const log = debug("Express");

const PORT = process.env.PORT || 5000;
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  log("Home: Get");
  res.send("hello");
});

app.listen(PORT, () => {
  log(`Server running on port: ${PORT}`);
});
