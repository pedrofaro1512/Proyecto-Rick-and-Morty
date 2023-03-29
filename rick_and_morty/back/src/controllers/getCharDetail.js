// ! Reconstrucción de los controladores para que funcionen con express
const axios = require("axios");
const { KEY, URL_BASE } = process.env;

const getCharDetail = (req, res) => {
    const { id } = req.params;

    axios
        .get(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then((response) => {
            const { id, image, name, gender, species, origin } = response.data;
            res.status(200).json({ id, image, name, gender, species, origin });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};

// ! Todo lo de abajo se quita como dice en la HW de express
// const axios = require("axios");
// const { KEY, URL_BASE } = process.env;

// const successH = (response, res) => {
//     const { image, name, gender, status, origin, species } = response.data;
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ image, name, gender, status, origin, species }));
// };
// const errorH = (error, res) => {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end(error.message);
// };
// const getCharDetail = (res, id) => {
//     axios
//         .get(`${URL_BASE}/character/${id}?key=${KEY}`)
//         .then((response) => successH(response, res))
//         .catch((error) => errorH(error, res));
// };

module.exports = getCharDetail;