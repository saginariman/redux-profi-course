import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"


const PostContainer2 = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)
    return (
        <div>
            <div  className="post__list">
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Прозошла ошибка при загрузке</h1>}
                {posts?.map(post =>
                    // <PostItem key={post.id} post={post} />    
                    <div key={post.id}>{post.title}</div>
                )}
            </div>
        </div>
    )
}

export default PostContainer2;