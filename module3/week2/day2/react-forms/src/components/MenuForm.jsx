import { useState } from "react";

const validHamburgersFlavors = [ 'pollo', 'res', 'veggie' ]

const availableDrinks = ['agua', 'cola', 'naranjada']

const MenuForm = (props) => {

    const [ name, setName ] = useState('');
    const [ hamburger, setHamburger ] = useState('');

    const [drink, setDrink ] = useState('');

    const [ hasExtra, setHasExtra ] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        //                 { name: 'Elena' , hamburger: 'veggie' }
        const newOrder = { name, hamburger, drink, hasExtra }
        props.takeOrder(newOrder)
        console.log('newOrder: ', newOrder);
        // PAra resetear los inputs
        setName('');
        setHamburger('');
        setDrink('');
        setHasExtra(false);
    }

    return (
        <div className="addOrder">
            <h3>Tomar Orden</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    A nombre de: 
                </label>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />


                <fieldset>
                    <legend>Hamburguesa: </legend>
                    <input 
                        type="radio" 
                        name="hamburger" 
                        value={'res'}
                        checked={ hamburger === 'res' }
                        onChange={event => setHamburger(event.target.value)}
                    />
                    <label >res</label>

                    <br />

                    <input 
                        type="radio" 
                        name="hamburger" 
                        value={'veggie'}
                        checked={ hamburger === 'veggie'}
                        onChange={event => setHamburger(event.target.value)}
                    />
                    <label >veggie</label>

                    <br />

                    <input 
                        type="radio" 
                        name="hamburger" 
                        value={'pollo'}
                        checked={ hamburger === 'pollo'}
                        onChange={event => setHamburger(event.target.value)}
                    />
                    <label >pollo</label>

                </fieldset>

                <fieldset>
                <legend>drinks: </legend>
                {
                    availableDrinks.map(d => (
                        <>
                        <input 
                            key={d}
                            type="radio" 
                            name="drink" 
                            value={d}
                            checked={ drink === d }
                            onChange={event => setDrink(event.target.value)}
                        />
                        <label >{d}</label>
                        </>
                    ))
                }
                </fieldset>


                <legend>Con extras?</legend>
                <input 
                    type="checkbox" 
                    checked={hasExtra}
                    onChange={e => setHasExtra(e.target.checked)} 
                />
                <label htmlFor="">Yes</label>

                <button type="submit">Tomar Orden</button>
            </form>
        </div>
    )
}

export default MenuForm;