import { useState } from "react";
import { validateEmail, validatePassword } from "./validation"
import style from "./Forms.module.css"

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
        <form onSubmit={handleSubmit} className={style.form}>
            <div>
                <label htmlFor="emailAddress"></label>
                <input 
                type="text" 
                name="emailAddress" 
                placeholder="Email Address"
                value={userData.emailAddress} 
                onChange={handleInputChange}
                className={style.emailImput}
                />
                <label htmlFor="password"></label>
                <input 
                type="password" 
                name="password" 
                placeholder="Password"
                value={userData.password} 
                onChange={handleInputChange}
                className={style.passwordImput}
                />
                <button type="submit" className={style.btnSubmit}>Submit</button>
                <p>{errors.emailAddress}</p>
                <p>{errors.password}</p>
            </div>

            
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
        