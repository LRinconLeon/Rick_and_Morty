import { useState } from "react";
import { validateEmail, validatePassword } from "./validation"

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        emailAddress: "", //recuerda que tiene que ser el mismo nombre que el name/htmlFor
        password: "",
    });
    
    const [errors, setErrors] = useState({
        emailAddress: "", 
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target; //event.target se refiere al elemento de entrada (input) en el que se está produciendo un evento.
        setUserData((userData) => ({ ...userData, [name]: value })) //name  se pone entre [] para extraer su valor.

        if (name === "emailAddress") {
            const emailError = validateEmail(value);
            setErrors((errors) => ({ ...errors, emailAddress: emailError }));
        } else if (name === "password") {
            const passwordError = validatePassword(value);
            setErrors((errors) => ({ ...errors, password: passwordError }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="emailAddress">Email Address</label>
                <input 
                type="text" 
                name="emailAddress" 
                value={userData.emailAddress} 
                onChange={handleInputChange}
                />
                <p>{errors.emailAddress}</p>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password" 
                value={userData.password} 
                onChange={handleInputChange}
                />
                <p>{errors.password}</p>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;
 

//JORGE V:
//const handleInputChange = (event) => {
// const property = event.target.name;
// const value = event.target.value;

// setUserData({...userData, [property]: value});
// validation({...userData, [property]: value}, errors, setErrors);
        