import { Request, Response, Router } from "express";
import HttpStatusCodes from "http-status-codes";
import BoardRouter from "./boardRouter";
import CategoryRouter from "./categoryRouter";

export const router = Router();

export const isValidXhr = (req: Request, res: Response, next: () => any) => {
  if (!req.xhr) {
    return res.send(HttpStatusCodes.FORBIDDEN).end();
  }

  next();
};

router.use(CategoryRouter.bootStrap());
router.use(BoardRouter.bootStrap());
