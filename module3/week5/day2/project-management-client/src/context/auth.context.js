import { createContext, useState } from "react"

// 1. usar createContext para crear el contexto y asignarlo
//    a una variable
// 2. Utilizar el provider del contexto que creamos en el paso 1.
//    y usarlo para envolver a los compoentes a los que les queremos
//    dar acceso a los datos que definamos en el el context
const AuthContext = createContext();

const AuthProvider = (props) => {

    const  [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ user, setUser ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, isLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export {AuthContext, AuthProvider }