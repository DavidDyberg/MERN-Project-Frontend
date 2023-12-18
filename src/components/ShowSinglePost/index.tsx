import { LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import type { Post } from "../../types"

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
        <>
        <h1>{post.title}</h1>
            {}
        </>
    )
}

export default ShowSinglePost