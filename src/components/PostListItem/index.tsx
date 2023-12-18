import React from 'react';
import * as Styles from './PostListItem.styles';
import { Post } from '../../types';

const PostListItem = ({ post }: { post: Post }) => {
  return (
    <Styles.PostContainer key={post._id}>
      {post.link ? (
        <>
          <Styles.PostTitle>{post.title}</Styles.PostTitle>
          <Styles.PostLink to={post.link}>
            <span>{post.link}</span>
          </Styles.PostLink>
        </>
      ) : (
        <Styles.StyledLink to={`/posts/${post._id}`}>
          <Styles.PostTitle>{post.title}</Styles.PostTitle>
        </Styles.StyledLink>
      )}
      <Styles.Wrapper>
        <Styles.PostAuthor>by {post.author.userName}</Styles.PostAuthor>
        {post.link && (
        <Styles.ShowPostLink>
            <Styles.StyledLink to={`/posts/${post._id}`}>Show post</Styles.StyledLink>
        </Styles.ShowPostLink>
        
      )}
      </Styles.Wrapper>
    </Styles.PostContainer>
  );
};

export default PostListItem;
