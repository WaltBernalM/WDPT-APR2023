import { useState } from "react"
import OrderCard from "./OrderCard"
import MenuForm from "./MenuForm"

const ordersData = [
    {
        hamburger: 'pollo',
        drink: 'water',
        name: 'Eduardo',
        hasExtra: false
    }
]

function OrderList() {

    const [ orders, setOrders ] = useState(ordersData)

    //  { name: 'Elena' , hamburger: 'veggie' }
    const takeOrder = (newOrder) => {
        const updatedOrders = [...orders, newOrder /* = { name: 'Elena' , hamburger: 'veggie' } */ ]
        setOrders(updatedOrders)
    } 


    return (
        <div className="container">
            <div className="column left">
                <MenuForm takeOrder={takeOrder}/>
            </div>
            <div className="column right">
                <h2>Ordenes</h2>
                {
                    orders.map((order, i) => (
                        <OrderCard key={i} order={order}/>
                    ))
                }
            </div>
        </div>
    )
}

export default OrderList;