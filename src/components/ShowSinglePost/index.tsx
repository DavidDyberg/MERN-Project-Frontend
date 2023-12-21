import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import type { Post } from "../../types"
import * as Styles from './showSinglePost.styles'
import { Chevronleft } from "../../routes/SignUp/SignUp.styles";
import CommentForm from "../CommentForm";
import VoteComponent from "../Votes";


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
                <Styles.Title>{post.title}</Styles.Title>
                <Styles.PostBody>{post.body}</Styles.PostBody>
                <Styles.Author>post created by {post.author.userName}</Styles.Author>
            </Styles.SinglePostContainer>

            <CommentForm postId={post._id} />
                <h3>Comments:</h3>
                { post.comments?.map(comment => 
                <Styles.CommentsContainer key={comment._id}>
                    <Styles.CommentBody>{comment.body}</Styles.CommentBody> 
                    <Styles.CommentAuthor>by - {comment.author.userName}</Styles.CommentAuthor>
                </Styles.CommentsContainer>) } 
            
        </Styles.Wrapper>
    )
}

export default ShowSinglePost