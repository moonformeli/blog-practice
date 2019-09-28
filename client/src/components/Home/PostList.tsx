import Moment from 'moment';
import React from 'react';
import { IBoardData } from '../../models/board/interfaces/IBoardPayload';
import styles from './PostList.scss';

interface IPostList extends IBoardData {}

const PostList: React.FC<IPostList> = ({ board }) => {
  console.log('board');
  console.dir(board);

  const items = board.map(item => {
    const { no, category_title, title, content, regDate } = item;
    const formatDate = Moment(regDate).format('YYYY. MM. DD');
    return (
      <li className={styles.listItem} key={`${category_title}-${no}`}>
        <a className={styles.anchor} href={`/post/${no}`}>
          <p className={styles.categoryTitle}>{category_title}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.content}>{content}</p>
          <p className={styles.date}>{formatDate}</p>
        </a>
      </li>
    );
  });
  return (
    <section className={styles.container}>
      <ul className={styles.list}>{items}</ul>
    </section>
  );
};

export default PostList;
