import { ActionFunctionArgs, Form, redirect, useLocation } from "react-router-dom";
import type { Post } from "../../types";
import auth from "../../lib/auth";
import * as Styles from './Votes.styles'

export const action = async (args: ActionFunctionArgs) => {
    const { postId } = args.params;
    const formData = await args.request.formData();

    const vote = formData.get('vote');

    const path = vote === 'up' ? `/posts/${postId}/upvote` : `/posts/${postId}/downvote`

    const response = await fetch(import.meta.env.VITE_BACKEND_URL + path, {
        headers: {
            'Authorization': `Bearer ${auth.getJWT()}`
        },
        method: 'POST'
    })

    if (!response.ok) {
        const { message } = await response.json()
        return { message }
    }

    return redirect(formData.get('returnTo')?.toString() || '/')
}

const VoteComponent = ({post}: {post: Post}) => {
    const location = useLocation();

    return(
        <Styles.VoteContainer>
            <Form method="post" action={`/posts/${post._id}/vote`}>
                <input type="hidden" name="returnTo" value={location.pathname + location.search} />
                <input type="hidden" value='up' name='vote' />
                <Styles.VoteButton type="submit"><Styles.VoteUp /></Styles.VoteButton>
            </Form>
                <Styles.Score>{post.score}</Styles.Score>
            <Form method="post" action={`/posts/${post._id}/vote`}>
                <input type="hidden" name="returnTo" value={location.pathname + location.search} />
                <input type="hidden" value='down' name='vote' />
                <Styles.VoteButton type="submit"><Styles.VoteDown/></Styles.VoteButton>
            </Form>
        </Styles.VoteContainer>
    )
}

export default VoteComponent