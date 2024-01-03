import { ActionFunctionArgs, Form, redirect } from "react-router-dom"
import auth from "../../lib/auth"
import type { Post } from "../../types"
import { X } from "lucide-react"

export const action = async (args: ActionFunctionArgs) => {
	const { id } = args.params

		const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/posts/' + id + '/delete',
				
			{
				headers: {
					Authorization: "Bearer " + auth.getJWT(),
				},
				method: "DELETE",
			},
		)

		if (!response.ok) {
			const { message } = await response.json()
			throw new Error(message)
		}

		return redirect("/")
}


const DeletePost = ({ post }: {  post: Post}) => {
  return (
    <>
    <Form 
        method="delete" 
        action={`/posts/${post._id}`}>
        <input 
            type="hidden" 
            name="delete-comment"
             />
        <button type="submit"><X size={16} /></button>
    </Form>
    </>
  )
}

export default DeletePost