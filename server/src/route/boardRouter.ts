import { Router } from "express";
import BoardQuery from "../query/board";

export default class BoardRouter {
  static bootStrap() {
    const router = Router();
    const Board = new BoardQuery();
    router.get("/board/lists", Board.getLists.bind(Board));
    router.get("/board/post/:id", Board.getPost.bind(Board));
    return router;
  }
}
