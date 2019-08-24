import { Router } from "express";
import BoardQuery from "../query/board";

export default class BoardRouter {
  static bootStrap() {
    const router = Router();
    const Board = new BoardQuery();
    router.get("/board/lsits", Board.getLists.bind(Board));
    return router;
  }
}
