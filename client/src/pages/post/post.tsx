import { NextConfig, NextFC } from 'next';
import React from 'react';
import PostBody from '../../components/Post/PostBody';
import PostHeader from '../../components/Post/PostHeader';
import BoardController from '../../controller/board/BoardController';
import { IPostData } from '../../models/board/interfaces/IBoardPayload';

interface IPost extends IPostData {}

const Post: NextFC<IPost> = ({ post }) => {
  const { title, sub_title, content } = post;

  return (
    <section>
      <PostHeader title={title} subTitle={sub_title} />
      <PostBody content={content} />
    </section>
  );
};

Post.getInitialProps = async ({ res, query }: NextConfig) => {
  const { id } = query;

  const boardController = new BoardController();
  const postPayload = await boardController.getPostById(Number(id));
  console.dir(postPayload);

  if (!postPayload) {
    return res.redirect('/500');
  }

  return { post: postPayload };
};

export default Post;
