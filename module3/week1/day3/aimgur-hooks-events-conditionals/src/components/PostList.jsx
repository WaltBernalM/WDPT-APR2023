import { useState } from 'react';
import { posts as postdata } from '../utils/post-data';
import Post from './post/Post';

const PostList = () => {

    const [ posts, setPosts ] = useState(postdata);

    // id = 1
    const deletePost = (id) => {
        console.log('id: ', id);
        const remainderPosts = posts.filter(post => {
            return post.id !== id;
        })
        setPosts(remainderPosts);
    }

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