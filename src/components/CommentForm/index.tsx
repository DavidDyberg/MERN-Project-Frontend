import { ActionFunctionArgs, useFetcher } from "react-router-dom"
import auth from "../../lib/auth";
import type { Post } from "../../types";
import { useRef } from "react";
import * as Styles from './CommentForm.styles'

export const action = async (args: ActionFunctionArgs) => {
    const { postId } = args.params;
    const formData = await args.request.formData();

    const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/posts/' + postId + '/comments', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth.getJWT(),
        },
        method: 'POST',
        body: JSON.stringify({ commentBody: formData.get('body') })
    });

    if (!response.ok) {
        const { message } = await response.json();

        return { message };
    }

    const post = await response.json() as Post;

    return {
        comments: post.comments
    }
}

const CommentForm = ({postId}: {postId: string}) => {
    const fetcher = useFetcher({ key: 'comment-form-' + postId })
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    if (fetcher.data && textAreaRef.current) {
        textAreaRef.current.value = ''
    }

    return (
        <Styles.CommentFormContainer>
            <h3>Leave a comment</h3>
            <fetcher.Form method="post" action={`/posts/${postId}/comments`}>
                    <Styles.TextArea ref={textAreaRef} name="body" id="body" required></Styles.TextArea>
                    <Styles.PostCommentButton type="submit">Post comment</Styles.PostCommentButton>
            </fetcher.Form>
        </Styles.CommentFormContainer>
    )
}

export default CommentForm