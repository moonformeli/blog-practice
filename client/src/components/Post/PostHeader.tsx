import React from 'react';
import Nav from '../Common/Nav';
import styles from './PostHeader.scss';

interface IPostHeader {
  title: string;
  subTitle: string;
}

const PostHeader: React.FC<IPostHeader> = ({ title, subTitle }) => {
  return (
    <section className={styles.container}>
      <Nav />
      <div className={styles.descContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subTitle}>{subTitle}</h2>
        <h2 className={styles.author}>by Munkyu Yang</h2>
      </div>
    </section>
  );
};

export default PostHeader;
