import { useState } from 'react';

// useState es el hook que nos permite crear y actualizar el
// estado dentro de un componente


// esta era la manera en como poniamos event listeners en una etiqueta de html
// const button = document.querySelector('#minus')
// button.onclick = () => {
//     console.log('le diste click a el boton con id minus')
// }
// button.addEventListener('click', () => {
//     console.log('le diste click a el boton con id minus')
// })

const Counter = () => {
    // const {a, b} = {b: 7,  a: 1, }
    // // const a = 1;
    // // const b = 7;
    // const [c, d] = [7, 1]
    // // c = 7
    // // d = 1

    // variable de estado
    //       |
    const [ count, setCount ] = useState(0);

    const handleUp = () => setCount(count + 1)
    const handleDown = () => setCount(count - 1);

    // // esto no se debe hacer NUNCA
    // count = 10
    return (
        <div className="Counter">
            <h2>Contador</h2>
            <p> El contador tiene el valor de { count } </p>

            <button onClick={handleDown} id="minus"> - </button>
            <button onClick={handleUp} id="plus"> + </button>
        </div>
    )
}

export default Counter;