import PostList from "./PostList";

const Feed = () => {
    const isEmpty = false;
    if(isEmpty) {
        return (
            <div className="empty-container">
                <h2>No posts to show</h2>
            </div>
        )
    } else {
        return (
            <div className="feed">
                {/* PostList */}
                <PostList/>
            </div>
        )
    }
}

export default Feed;