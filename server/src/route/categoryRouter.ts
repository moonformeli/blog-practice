import { Router } from "express";
import CategoryQuery from "../query/category";
import { isValidXhr } from "./router";

export default class CategoryRoute {
  static bootStrap() {
    const router = Router();
    const Category = new CategoryQuery();
    router.get("/category/lists", Category.getLists.bind(Category));
    return router;
  }
}
