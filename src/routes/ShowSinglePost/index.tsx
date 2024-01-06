import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import type { Post } from "../../types"
import * as Styles from './showSinglePost.styles'
import { Chevronleft } from "../SignUp/SignUp.styles";
import CommentForm from "../../components/CommentForm";
import VoteComponent from "../../components/Votes";
import DeleteComment from "../../components/DeleteComment";
import DeletePost from "../../components/DeletePost";
import { Button } from "../../components/Button";

export const loader = async (args: LoaderFunctionArgs) => {
    const { params } = args;

    const { id } = params;

    const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/posts/' + id, {
        headers: {
            'Accepts': 'application/json'
        }
    })
    return response.json()
   
}

const ShowSinglePost = () => {
    const post = useLoaderData() as Post;

    return (
        <Styles.Wrapper>
            <Styles.SinglePostContainer>
                <VoteComponent post={post} />
                <Link to='/'>
                    <Chevronleft/>
                </Link>
                {post.link ? (
          <>
            <Styles.Title>{post.title}</Styles.Title>
            <Link to={post.link}>
              <span>{post.link}</span>
            </Link>
            <Styles.PostBody>{post.body}</Styles.PostBody>
            <Styles.Author>by {post.author.userName}</Styles.Author>
            <DeletePost post={post} />
                <Link to={`/posts/${post._id}/edit`}>
                    <Button>Edit post</Button>
                </Link>
            
          </>
        ) : (
            <>
                <Styles.Title>{post.title}</Styles.Title>
                <Styles.PostBody>{post.body}</Styles.PostBody>
                <Styles.Author>by {post.author.userName}</Styles.Author>
                <DeletePost post={post} />
                <Link to={`/posts/${post._id}/edit`}>
                    <Button>Edit post</Button>
                </Link>
          </>
        )}
      </Styles.SinglePostContainer>

            <CommentForm postId={post._id} />
                <h3>Comments:</h3>
                { post.comments?.map(comment => 
                <Styles.CommentsContainer key={comment._id}>
                    <Styles.CommentBody>{comment.body}</Styles.CommentBody>
                    <Styles.DeleteCommentWrapper>
                        <Styles.CommentAuthor>by - {comment.author.userName}</Styles.CommentAuthor>
                        <DeleteComment comment={comment} post={post} /> 
                    </Styles.DeleteCommentWrapper>   
                </Styles.CommentsContainer>) } 
            
        </Styles.Wrapper>
    )
}

export default ShowSinglePost