import React, { useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";
import styles from "./index.scss";
import Header from "../components/Home/Header";
import { ICategoryPayload } from "../models/category/interfaces/ICategoryPayload";
import CategoryController from "../controller/category/CategoryController";

interface IList {
  [key: string]: string;
}

interface IApp {
  category: ICategoryPayload;
}

const App: NextPage<IApp> = ({ category }) => {
  return (
    <section className={styles.container}>
      <Header />
      <article className={styles.main}>1</article>
    </section>
  );
};

App.getInitialProps = async ({ req }): Promise<IApp> => {
  const categoryController = new CategoryController();
  const res = (await categoryController.getCategoryList()) as ICategoryPayload;
  return { category: res };
};

export default App;
