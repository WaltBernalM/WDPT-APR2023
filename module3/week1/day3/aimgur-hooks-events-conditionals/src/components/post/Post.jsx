import ImagePost from "./ImagePost"
import Reactions from "./Reactions"
import Title from "./Title"
// props = { posts: [{...}, {...}], deletePost: funciton() }
const Post = (props) => {
    // const { post, deletePost } = props;
    console.log('post: ', props.post)
    return (
        <div className="card">
            <div className="card-body">
                <ImagePost imageUrl={props.post.imageUrl} title={props.post.title}/>
                <Title title={props.post.title} />
            </div>
            <div className="card-footer">
                <Reactions reactions={props.post.reactions} />
            </div>
            <button onClick={props.deletePost} className="btn-delete">
                Delete
            </button>
        </div>
    )
}

export default Post;