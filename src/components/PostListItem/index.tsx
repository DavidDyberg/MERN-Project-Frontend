import * as Styles from './PostListItem.styles';
import { Post } from '../../types';
import VoteComponent from '../Votes';


const PostListItem = ({ post }: { post: Post }) => {
  return (
    
      <Styles.PostContainer key={post._id}>
          <VoteComponent post={post} />
        {post.link ? (
          <>
            <Styles.StyledLink to={`/posts/${post._id}`}>
              <Styles.PostTitle>{post.title}</Styles.PostTitle>
            </Styles.StyledLink>
            <Styles.PostLink to={post.link}>
              <span>{post.link}</span>
            </Styles.PostLink>
          </>
        ) : (
          <>
          <Styles.StyledLink to={`/posts/${post._id}`}>
            <Styles.PostTitle>{post.title}</Styles.PostTitle>
            </Styles.StyledLink>
            </>
          
        )}
        
          <Styles.PostAuthor>by {post.author.userName}</Styles.PostAuthor>
          
      </Styles.PostContainer>
    
  );
};

export default PostListItem;
