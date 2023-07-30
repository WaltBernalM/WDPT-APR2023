import { useEffect } from "react";
import { useState } from "react";

// react nos da un hook que nos permite correr codigo
// en momentos particulares del ciclo de vida de un componente
// este hook se llama useEffect

const TimerB = () => {
    const [ time, setTime ] = useState(0);

    // aca use efect nos permite entrar al mounting phase
    useEffect(() => {
        console.log('Mounting component')
        const id = setInterval(() => {
            setTime(time => time + 1)
        }, 1000)

        return () => {
            clearInterval(id)
        }

    }, [])
    // lo que significa este array vacio, es que 
    // el callback no tiene dependencias con ninguna
    // variable de estado y por eso useEffect solo se
    // ejecuta cuando el compoente se crea



    // useEffect nos deja ejecutar codigo justo antes de que
    // el componente se destruya

    useEffect(() => {
        return () => {
            console.log('Unmounting component')
        }
    }, [])


    // ejecutar un codigo cada vez que una variable de estado se actualiza
    useEffect(() => {
        console.log('on update')
        document.title = time
    }, [time])

    return (
        <div className="Timer">
            <h1>Timer</h1>
            <h3>{time} </h3>
        </div>
    )
}

export default TimerB;