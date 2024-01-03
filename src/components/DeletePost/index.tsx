import { ActionFunctionArgs, redirect } from "react-router-dom"
import auth from "../../lib/auth"
import type { Post } from "../../types"
import { X } from "lucide-react"
import * as Styles from '../DeleteForm.styles'

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
    <Styles.DeleteForm 
        method="delete" 
        action={`/posts/${post._id}`}>
        <input 
            type="hidden" 
            name="delete-comment"
             />
        <Styles.DeleteButton type="submit"><X size={16} /></Styles.DeleteButton>
    </Styles.DeleteForm>
    </>
  )
}

export default DeletePost