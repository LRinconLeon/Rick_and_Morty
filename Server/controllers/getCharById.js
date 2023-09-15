const axios = require("axios");
const URL = 'https://rickandmortyapi.com/api/character'; 

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`) 

        if (!data.name) throw new Error(`Faltan datos del personaje con el ID: ${id}`); // (404), el mensaje solo aparecera cuando se elimine el name de la api. por lo tanto no es muy utilizada esta linea
        
        const character = {
            id: data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender
        }

        return res.status(200).json(character);

    } catch(error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message) 
        : res.status(500).send(error.message) 
    } 
}

module.exports = { getCharById };




// SEGUNDA VERSION CON PROMESAS

// const URL = 'https://rickandmortyapi.com/api/character'; //se eagrego 's'
// const getCharById = (req, res) => {
//     const { id } = req.params;
//     axios(`${URL}/${id}`) //se le agrego la barra
//     .then(response => response.data)
//     .then(({status, name, species, origin, image, gender}) => {
//         if (name){
//             const character = {
//                 id,
//                 status,
//                 name,
//                 species,
//                 origin,
//                 image,
//                 gender
//             }

//             return res.status(200).json(character);
//         }
        
//         return res.status(404).send('Not found');  // Esta aqui el 404 porque es error del usuario (pide un id que no existe)
//     })

//     .catch(error => res.status(500).send(error.message)); // Esta aqui el 500 porque es error del servidor (ej. la url dejo de funcionar)
// }

// module.exports = { getCharById };


// PRIMERA VERSION CON PROMESAS

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data) //recuerda que este response es la respuesta de la API
//     .then(({ name, gender, species, origin, image, status}) => { 
//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         }

//         return res
//         .writeHead(200, {'Content-type': 'application/json'})
//         .end(JSON.stringify(character));

//     })
//     catch es una promesa igual que then, solo que then tiene el successful/error handler, y catch solo tiene el error handler
//     .catch(error => {
//         return res
//         .writeHead(500, {'Content-type': 'text/plain'})
//         .end(error.message)
//     }); 
// }

// module.exports = { getCharById };
 