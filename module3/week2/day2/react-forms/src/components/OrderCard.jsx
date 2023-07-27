const OrderCard = (props) => {
    return (
        <div className="OrderCard">
            <h3> Orden de: {props.order.name} </h3>
            <br />
            <p>Hamburguesa: </p>
            <p>{props.order.hamburger}</p>
            <br />
            <p>Drink: </p>
            <p>{props.order.drink}</p>
            <br />
            <p>Extra:</p>
            <p>{ props.order.hasExtra ? 'Si' : 'No' } </p>

        </div>
    )
}

export default OrderCard;