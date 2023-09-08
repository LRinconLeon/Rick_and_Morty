export const validateEmail = (emailAddress) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailAddress) return "El email no puede estar vacío.";
    if (emailAddress.length > 35) return "El email no puede tener más de 35 caracteres.";
    if(!regex.test(emailAddress)) return "El email no es válido."; 
}

export const validatePassword = (password) => {
    const regex = /^(?=.*\d).{6,10}$/; 
    if(!password) return "La contraseña no puede estar vacía";
    if(!regex.test(password)) return "La contraseña no cumple con los requisitos.";
}



//RECAPITULACION:

//test se utiliza para verificar si una cadena de texto cumple con el patrón definido por una expresión regular.

// Expresiones regulares (regex) =  Están compuestas por caracteres y metacaracteres que definen un patrón de búsqueda.

// /^[^\s@]+@[^\s@]+\.[^\s@]+$/ = Esta expresión regular es utilizada para verificar si el formato del correo electrónico cumple 
// con un patrón básico de dirección de email.

// /^(?=.*\d).{6,10}$/ = Esta expresión regular es utilizada para validar una contraseña.
// ^:verifica inicio de la cadena. $: final de la cadena
// (?=.*\d): verifica si en cualquier parte de la cadena hay al menos un dígito (\d).
// .{6,10}: significa que la contraseña puede contener cualquier carácter (incluyendo letras y números) y debe tener una longitud 
// entre 6 y 10 caracteres.

// OTRA FORMA DE RESOLVERLO(JORGE V):

// export const validation = (userData, errors, setErrors) => {
//     /emailAddress
//     if (!userData.emailAddress) {
//         setErrors({ ...errors, emailAddress: "Este campo no puede ir vacío" });
//     } else if (userData.emailAddress.length > 35) {
//         setErrors({ ...errors, emailAddress: "El email no puede tener más de 35 caracteres." });
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.emailAddress)) {
//         setErrors({ ...errors, emailAddress: "Email no válido" }); 
//     } else {
//         setErrors({ ...errors, emailAddress: "" });
//     }

//      password
//     if (userData.password.length < 6 || userData.password.length > 10) {
//         setErrors({ ...errors, password: "La contraseña debe tener entre 6 a 10 caracteres" });
//     } else if (!/\d/.test(userData.password)) {
//         setErrors({ ...errors, password: "La contraseña debe contener al menos un número" }); 
//     } else {
//         setErrors({ ...errors, password: "" });
//     }
// };


