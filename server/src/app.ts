import cors from "cors";
import debug from "debug";
import express, {
  Application,
  json,
  Request,
  Response,
  urlencoded
} from "express";
import { router } from "./route/router";

const log = debug("Express: app");
const PORT = 5000;
const app: Application = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(router);

app.get("/", (req: Request, res: Response) => {
  log("Home: Get");
  return res.send("Hello World");
});

app.listen(PORT, () => {
  log(`Server running on port: ${PORT}`);
});
