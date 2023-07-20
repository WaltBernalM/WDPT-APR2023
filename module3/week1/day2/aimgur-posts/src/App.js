import './App.css';
import Navbar from './components/Navbar';
import Post from './components/post/Post';
import { posts } from './utils/posts-data';

function App() {
  // const obj = {
  //   name: 'Eduardo',
  //   lastName: 'Chavez',
  //   hobbies: ['bet', 'sleep']
  // }
  // const post = {
    // _id: 3897389eiui3uei2d,
  //   imageUrl: 'https://i.imgur.com/qDCPRNN.jpeg',
  //   title: 'bad kitty',
  //   reactions: {
  //       upvotes: '104',
  //       comments: '6',
  //       views: '3K'
  //   }
  // }

  return (
    <div className="App">
      {/* props = { isLoggedIn: true, "name": "Eduardo", hobbies:['bet', 'sleep'],  object: { name: "Eduardo" } } */}
      <Navbar 
        isLoggedIn={false}
        name="Eduardo" 
        hobbies={['bet', 'sleep']}
        object={{ name: 'Eduardo' }}
      />

      {
        posts.map((post, i)=> (
          <Post post={post} key={i}/>
        ))
      }      
    </div>
  );
}

export default App;
