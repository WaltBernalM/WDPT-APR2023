import { useState } from 'react';
import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import { posts as postdata } from './utils/post-data';


function App() {

  const [ posts, setPosts ] = useState([]);

  const createRandomPost = () => {
    // [ 'apple', 'banana', 'orange', 'grapple' ]
    const pickRandomPostId = Math.floor(Math.random()*postdata.length);
    const postToDisplay = postdata.splice(pickRandomPostId, 1)[0];
    setPosts([...posts, postToDisplay])
  }

  const deletePost = (id) => {
    console.log('id: ', id);
    const remainderPosts = posts.filter(post => {
        return post.id !== id;
    })
    setPosts(remainderPosts);
}

  const sortByTitle = () => {
    const postsCopy = JSON.parse(JSON.stringify(posts));
    postsCopy.sort((a, b) => {
      if(a.title < b.title) {
        return -1
      } else if(b.title > a.title) {
        return 1
      } else {
        return 0
      }
    })
    setPosts(postsCopy);
  }



  return (
    <div className="App">
      <Navbar 
        isLoggedIn={true} 
        createRandomPost={createRandomPost}
        sortByTitle={sortByTitle}
      />
      <div className='layout'>
        <Feed posts={posts} deletePost={deletePost}/>
      </div>
    </div>
  );
}

export default App;
