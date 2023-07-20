import ImagePost from "./ImagePost"
import Reactions from "./Reactions"
import Title from "./Title"

const Post = ({ post }) => {
    console.log('post: ', post)
    return (
        <div className="card">
            <div className="card-body">
                <ImagePost imageUrl={post.imageUrl} title={post.title}/>
                <Title title={post.title} />
            </div>
            <div className="card-footer">
                <Reactions reactions={post.reactions} />
            </div>
        </div>
    )
}

export default Post;