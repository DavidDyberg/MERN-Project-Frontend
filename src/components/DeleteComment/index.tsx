import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import auth from "../../lib/auth";
import { X } from 'lucide-react'
import type { Comment, Post } from "../../types";

export const action = async (args: ActionFunctionArgs) => {
    const { postId, commentId } = args.params;

    const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/posts/' + postId + '/comments/' + commentId, {
        headers: {
            'Authorization': 'Bearer ' + auth.getJWT(),
        },
        method: 'DELETE',
        
    });

    if (!response.ok) {
        const { message } = await response.json()
        return { message }
    }

    return redirect(`/posts/${postId}`);
}

const DeleteComment = ({comment, post }: { comment: Comment, post: Post}) => {
      
    return (
      <div>
        <Form method='delete' action={`/posts/${post._id}/comments/${comment._id}`}>
          <input 
            type="hidden"
            name="delete-comment" 
            id='delete-comment'
          />
          <button type='submit'>
                <X size={16} />
          </button>
        </Form>
      </div>
    );
  };

  export default DeleteComment