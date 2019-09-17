import { NextPage } from "next";
import React from "react";
import { pathOr } from "ramda";
import Header from "../components/Home/Header";
import PostList from "../components/Home/PostList";
import BoardController from "../controller/board/BoardController";
import CategoryController from "../controller/category/CategoryController";
import { IBoardData } from "../models/board/interfaces/IBoardPayload";
import { ICategoryData } from "../models/category/interfaces/ICategoryPayload";
import styles from "./index.scss";

interface IList {
  [key: string]: string;
}

interface IApp {
  categoryPayload: ICategoryData;
  boardPayload: IBoardData;
}

const App: NextPage<IApp> = ({ categoryPayload, boardPayload }) => {
  const board = pathOr([], ["board"], boardPayload);
  const category = pathOr([], ["category"], categoryPayload);
  console.log("category");
  console.dir(categoryPayload);
  console.dir(category);
  return (
    <section className={styles.container}>
      <Header />
      <PostList board={board} />
    </section>
  );
};

App.getInitialProps = async ({ req }): Promise<IApp> => {
  const categoryController = new CategoryController();
  const boardController = new BoardController();

  const categoryPayload = await categoryController.getCategoryList();
  const boardPayload = await boardController.getBoardList();

  return { categoryPayload, boardPayload };
};

export default App;
