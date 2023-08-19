import PostList from "./PostList";

const Feed = ({posts, deletePost}) => {
    if(posts.length === 0) {
        return (
            <div className="empty-container">
                <h2>No posts to show</h2>
            </div>
        )
    } else {
        return (
            <div className="feed">
                {/* PostList */}
                <PostList posts={posts} deletePost={deletePost} />
            </div>
        )
    }
}

export default Feed;