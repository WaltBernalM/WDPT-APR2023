import Post from './post/Post';

const PostList = (props) => {
    const  { posts, deletePost } = props;
    return (
        <div>
            <h2>Post List</h2>
            {
                posts.map(post => {
                    return (
                        <Post 
                            post={post} 
                            key={post.id} 
                            deletePost={() => deletePost(post.id)} 
                        />
                    )
                })
            }
        </div>
    )
}
export default PostList;