import './App.css';
import cube from  './assets/cube.png';

//                  Edu  [ 'E', 'd', 'u']
const capitalize = (str) => str.split('').map(l => l.toUpperCase())


function App() {
  const userInfo = {
    name: 'Eduardo',
    lastName: 'Chavez'
  }
  const profilePicture = <img src={cube} alt="profile-picture" width={300}/>
  return (
    <div className="App">
      { profilePicture }
      <h3> Hi { capitalize(userInfo.name) }  { capitalize(userInfo.lastName) } </h3>
    </div>
  );
}

export default App;
