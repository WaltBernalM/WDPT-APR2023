import { Row, Col, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import foodData from './foods.json';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

const foodDataExample = {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}

function App() {
  const [ foods, setFoods ] = useState(foodData)
  const [ word, setWord ] = useState(''); // 1
  const [ show, setShow ] = useState(false);

  const addFood = (newFood) => {
    //       [{...}, {...}] => [ newFood, {...}, {...} ]
    setFoods( prevFoods => [ newFood, ...prevFoods ] )
    // la linea de aca arriba 👆 es equivalente a las 3 lineas de abajo:
    // const updatedFood = [...foods];
    // updatedFood.unshift(newFood)
    // setFoods(updatedFood)
  }

  const onSearch = (searchCriteria) => setWord(searchCriteria) // 2

  // foodName = 'Pizza'
  const onDelete = (foodName)  => {
    const filteredFoods = foods.filter(food => {
      return food.name !== foodName    // exluir del array el elemento que queremos borrar
    })
    setFoods(filteredFoods)
  }

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <Row justify={'center'}>
        <Col span={6}>
          {show && <AddFoodForm addFood={addFood} />}
          <Button onClick={() => setShow(!show)}>{ show?  "Hide Form" : "Add New Food"} </Button>
          {/* Display Search component here */}
          <Search onSearch={onSearch}/> {/* 3 */}
        </Col>
      </Row>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {

        foods             
        .filter(foodItem => foodItem.name.toLowerCase().includes(word.toLowerCase())).length

        ?
        
        foods             
        .filter(foodItem => foodItem.name.toLowerCase().includes(word.toLowerCase()))  
        .map((food, i) => <FoodBox onDelete={onDelete} key={i} {...food} /> )

        :
        'no hay alimentos que mostrar'
      
        }
        {/* <FoodBox name={'Salad'} calories={150} image={ "https://i.imgur.com/eTmWoAN.png"} servings={1} /> */}
      </Row>
    </div>
  );
}
// en JS el string vacio es parte de cualquier string, entonces el string "Pizza" incluye al sting vacio
export default App;