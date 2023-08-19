import { useState } from "react";
// import axios from 'axios';

// el componente se re-pinta cada vez que cambia su estado
// tambien lo hace cada que le llegan props con nuevos datos
async function Counter() {

    const [ count, setCount ] = useState(0);
    // const [ userData, setUserData ] = useState(0);

    // nunca hagan esto:
    // setCount(count+1)

    // nunca hagan esto:
    // setUserData(await axios.get('http://alguna-api.com'));

    return (
        <div className="Counter">
            <h2>Counter</h2>
            <p>El valor del contador es {count}</p>

            {/* {
                userData.map(user => <p>{user.name}</p>)
            } */}

            <button onClick={() => setCount(count - 1)}> - </button>
            <button onClick={() => setCount(count + 1)}> + </button>

        </div>
    )
}

export default Counter;