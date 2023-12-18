import { Link } from "react-router-dom";
import { Post } from "../../types";

const PostListItem = ({post}: {post: Post}) => {
    return (
        <div key={post._id}>
            {post.link ? (
                <>
                <h2>{post.title}</h2> 
                <Link to={post.link}>
                    <span>{post.link}</span>
                </Link>
                </>
            ): (
                <Link to={`/posts/${post._id}`}>
                    <h2>{post.title}</h2>
                </Link>
            )}
            <p>by {post.author.userName}</p>
            { post.link && (
                <span><Link to={`/posts/${post._id}`}>Show post</Link></span>
            )}
        </div>
    )
}

export default PostListItem