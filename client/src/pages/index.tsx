import Next from 'next';
import { pathOr } from 'ramda';
import React from 'react';
import Header from '../components/Home/Header';
import PostList from '../components/Home/PostList';
import BoardController from '../controller/board/BoardController';
import CategoryController from '../controller/category/CategoryController';
import { IBoardData } from '../models/board/interfaces/IBoardPayload';
import { ICategoryData } from '../models/category/interfaces/ICategoryPayload';
import styles from './index.scss';

interface IApp {
  categoryPayload: ICategoryData;
  boardPayload: IBoardData;
}

const App: Next.NextFC<IApp> = ({ categoryPayload, boardPayload }) => {
  const board = pathOr([], ['board'], boardPayload);
  const category = pathOr([], ['category'], categoryPayload);
  console.log('category');
  console.dir(categoryPayload);
  console.dir(category);
  return (
    <section className={styles.container}>
      <Header />
      <PostList board={board} />
    </section>
  );
};

App.getInitialProps = async (): Promise<IApp> => {
  const categoryController = new CategoryController();
  const boardController = new BoardController();

  const categoryPayload = await categoryController.getCategoryList();
  const boardPayload = await boardController.getBoardList();

  return { categoryPayload, boardPayload };
};

export default App;
