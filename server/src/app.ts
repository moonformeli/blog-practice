import cors from "cors";
import debug from "debug";
import express, { Application, Request, Response } from "express";
import MariaDB from "mariadb";

const log = debug("Express: app");

const PORT = 5000;
const app: Application = express();

const maria = MariaDB.createPool({
  connectionLimit: 1,
  host: "localhost",
  password: "12345",
  user: "root"
});

let conn: MariaDB.PoolConnection;
(async () => {
  try {
    conn = await maria.getConnection();
    await conn.query("use test");
  } catch (e) {
    console.error(e);
  }
})();

app.get("/", (req: Request, res: Response) => {
  log("Home: Get");
  return res.redirect("http://localhost:3000/");
});

app.get("/insert/:no/:title", async (req: Request, res: Response) => {
  const { params } = req;
  const { no, title } = params;

  try {
    await conn.query("insert into ttable value (?, ?)", [no, title]);
    res.send("Item is successfully stored");
    return res.end() as any;
  } catch (e) {
    console.error(e);
  }
});

app.get("/lists", cors(), async (req: Request, res: Response) => {
  log("Get lists");

  try {
    if (!conn) {
      conn = await maria.getConnection();
      await conn.query("use test");
    }

    const lists = await conn.query("select * from ttable");
    return res.json({ lists });
  } catch (e) {
    console.error(e);
  }
});

app.get("/delete", async (req: Request, res: Response) => {
  log("Delete all items");

  try {
    await conn.query("delete from ttable");
    return res.send("All items are deleted.");
  } catch (e) {
    console.error(e);
  }
});

app.get("/update/:no/:title", async (req: Request, res: Response) => {
  log("Update the item");

  const { params } = req;
  const { no, title } = params;

  try {
    await conn.query(`update ttable set title='${title}' where no=${no}`);
    return res.send("The item is updated");
  } catch (e) {
    console.error(e);
  }
});

app.listen(PORT, () => {
  log(`Server running on port: ${PORT}`);
});
