import { Divider, Input, Row, Col } from 'antd';
import { useState } from 'react';

const initialState = {
  name: '',
  image: '',
  calories: 0,
  servings: 0
}

// Iteration 4
function AddFoodForm(props) {
  const { addFood } = props;
  
  const [ formData, setFormData ] = useState(initialState)
  
  //                          serving        , 2
  const handleFormInput = (identifierNameInput, value) => {

    setFormData( prevFormData => ({ ...prevFormData, [identifierNameInput]: value  }) )
    // de esta linea  👆 es quivalente a las 3 de abajo:
    // const updatedForm = { ...formData }
    // updatedForm[identifierNameInput] = value
    // setFormData(updatedForm)
  }

  console.log('formData: ', formData);

  const sendFood = (event) => {
    event.preventDefault();
    addFood(formData)
    setFormData(initialState)
  }

  return (

        <form onSubmit={sendFood}>
          <Divider>Add Food Entry</Divider>

          <label>Name</label>
          <Input value={undefined} type="text" onChange={(event) => handleFormInput('name', event.target.value)} />

          <label>Image</label>
          {/* render antd <Input /> type="text" here */}
          <Input value={undefined} type="text" onChange={(event) => handleFormInput('image', event.target.value)} />

          <label>Calories</label>
          {/* render antd <Input /> type="number" here */}
          <Input value={undefined} type="number" onChange={(event) => handleFormInput('calories', event.target.value)} />

          <label>Servings</label>
          {/* render antd <Input /> type="number" here */}
          <Input value={undefined} type="number" onChange={(event) => handleFormInput('servings', event.target.value)} />

          <button type="submit">Create</button>
        </form>
  );
}

export default AddFoodForm;



  // 1. se inicializa la vairable de estado con initialState
  // const formData = {
  //   name: '',
  //   image: '',
  //   calories: 0,
  //   servings: 0
  // };

  // 2. cuando el usuarion teclea adana durum en el input que captura el name de la comida
  // el listener onChange ejecuta handleFormInput, y handleFormInput hace lo siguiente

  // const updatedForm = {
  //   name: '',
  //   image: '',
  //   calories: 0,
  //   servings: 0
  // }

  // updatedForm['name'] = 'Adana Durum'
  
  // updatedForm = {
  //   name: 'Adana Durum',
  //   image: '',
  //   calories: 0,
  //   servings: 0
  // }
  // setFormData(updatedForm

  // formData = {
  //   name: 'Adana Durum',
  //   image: '',
  //   calories: 0,
  //   servings: 0
  // }

