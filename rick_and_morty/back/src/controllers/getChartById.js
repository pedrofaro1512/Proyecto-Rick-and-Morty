// ! Reconstrucción de los controladores para que funcionen con express
const axios = require("axios");
const { KEY, URL_BASE } = process.env;

const getCharById = (req, res) => {
    const { id } = req.params;

    axios
        .get(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then((response) => {
            const { id, image, name, gender, species } = response.data;
            res.status(200).json({ id, image, name, gender, species });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};


// ! Todo lo de abajo se quita como dice en la HW de express
// const axios = require("axios");
// const { KEY, URL_BASE } = process.env;

// // ? Se podria realizar sacando en una función success y otra para error:

// const successH = (response, res) => {
//     const { id, image, name, gender, species } = response.data;
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ id, image, name, gender, species }));
// };
// const errorH = (error, res) => {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end(error.message);
// };
// const getCharById = (res, id) => {
//     axios
//         .get(`${URL_BASE}/character/${id}?key=${KEY}`)
//         .then((response) => successH(response, res))
//         .catch((error) => errorH(error, res));
// };

// ? Sepodria hacer de esta forma todo en una función:
// const getCharById = (res, id) => {

//     axios
//         .get(`${URL_BASE}/character/${id}?key=${KEY}`)
//         .then((response) => {
//         const { id, image, name, gender, species } = response.data;
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ id, image, name, gender, species }));
//         })
//        .catch((error) => {
//             res.writeHead(500, { "Content-Type": "text/plain" });
//             res.end(error.message);
//         });
// };

module.exports = getCharById;