import React from 'react';
import styles from './PostBody.scss';

interface IPostBody {
  content: string;
}

const PostBody: React.FC<IPostBody> = ({ content }) => {
  return <section className={styles.container}>{content}</section>;
};

export default PostBody;
