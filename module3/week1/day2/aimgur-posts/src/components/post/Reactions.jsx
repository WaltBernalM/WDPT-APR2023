const Reactions = ({ reactions }) => {
    return (
        <div className="actions">
            <span><i className="fas fa-arrow-alt-up"></i> {reactions.upvotes} </span>
            <span><i className="fas fa-comment-alt"></i> {reactions.comments} </span>
            <span><i className="fa-sharp fa-solid fa-eye"></i> {reactions.views}</span>
        </div>
    )
}

export default Reactions;