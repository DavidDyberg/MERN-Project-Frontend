import { LoaderFunctionArgs, useLoaderData, useSearchParams } from "react-router-dom"
import type { Post } from "../types"
import PostListItem from "../components/PostListItem"
import Pagination from "../components/Pagination"
import styled from "styled-components"

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url)
    const page = url.searchParams.get('page') || 1;

    const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/posts?page=' + page, {
        headers: {
            'Accepts': 'application/json'
        }
    })

    const backendResponse = await response.json();

    return { page, ...backendResponse}

 //   return await response.json()
    
}   

const Pages = styled.p`
    text-align: center;
    font-size: 20px;
`

const Index = () => {
    const data = useLoaderData() as { posts: Post[], totalPages: number , page :number} 
    const [ searchParams, setSearchParams ] = useSearchParams();

    return (
        <div>
            {data?.posts.map(post => <PostListItem post={post} key={post._id} />)}
            <Pagination 
                currentPage={data.page} 
                totalPages={data.totalPages}
                setPage={(page) => setSearchParams({ ...searchParams, page: page.toString() }) }
                />

            <Pages>Pages: {data?.totalPages}</Pages>
        </div>
    )
}

export default Index