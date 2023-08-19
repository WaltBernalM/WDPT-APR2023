import axios from "axios";
import { useState } from "react";
import { API_URL } from "../utils/constants";

const initLoginForm = {
    email: '',
    password: '',
    name: ''
}

const Login = (props) => {

    const [ loginForm, setLoginForm ] = useState(initLoginForm);

    const handleLoginForm = (nameField, value) => {
        setLoginForm(prevState => ({ ...prevState, [nameField]: value }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

    }

    return (
    <div className="AddTask">
        <h3>Login</h3>
   
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={loginForm.email}
            onChange={(e) => handleLoginForm('email', e.target.value)}
          />
   

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={(e) => handleLoginForm('password', e.target.value)}
           />
   
          <button type="submit">Login</button>
        </form>
      </div>
    )
}

export default Login;