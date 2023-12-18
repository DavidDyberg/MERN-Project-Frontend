import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import type { Post } from "../../types"
import * as Styles from './showSinglePost.styles'
import { Chevronleft } from "../../routes/SignUp/SignUp.styles";


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
    const post = useLoaderData() as Post

    return (
        <Styles.SinglePostContainer>
            <Link to='/'>
                <Chevronleft/>
            </Link>
            <Styles.Title>{post.title}</Styles.Title>
            <Styles.PostBody>{post.body}</Styles.PostBody>
            <Styles.Author>post created by {post.author.userName}</Styles.Author>
            { post.comments?.map(comment => <p key={comment._id}>{comment.body} - {comment.author.userName}</p>) }          
        </Styles.SinglePostContainer>
    )
}

export default ShowSinglePost