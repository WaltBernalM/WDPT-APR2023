import { useState } from "react";

const Reactions = ({ reactions }) => {
    const [ upvote, setUpvote ] = useState(0);
    const handleUpvote = () => setUpvote(upvote + 1);
    return (
        <div className="actions">
            <span onClick={handleUpvote} >
                <i className="fas fa-arrow-alt-up"></i> {upvote} 
            </span>
            <span><i className="fas fa-comment-alt"></i> {reactions.comments} </span>
            <span><i className="fa-sharp fa-solid fa-eye"></i> {reactions.views}</span>
        </div>
    )
}

export default Reactions;