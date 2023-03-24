require("dotenv").config();
const http = require("http");
//const data = require("./utils/data");
const getCharById = require("./controllers/getChartById");
const getCharDetail = require("./controllers/getCharDetail");

http
    .createServer((req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");

        const { url } = req
        if (url.includes("onsearch")) {
            const id = url.split("/").at(-1);
            getCharById(res, id);
        }

        if (url.includes("detail")) {
            const id = url.split("/").at(-1);
            getCharDetail(res, id);
        }
    })
    .listen(3001, "localhost");



// Todo lo de abajo esta comentado porque la homework lo solicitaba
// http
// .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");                // Para permitirle a react que se comunique con el server
//     const { url } = req;
//     if (url.includes("rickandmorty/character")) {
//         const id = url.split("/").at(-1);                             // El .at me permite tomar posiciones especificas de un array, es este caso el id de la url
//         const character = data.find((char) => char.id == id);         // Utilizamos find para buscar un personaje con la caracteristica deseada, en este caso que el id del personaje coincida con el id que trae la url
//         // En la anterior linea el doble igual me deja de lado si es un string o no o el tipo de dato, porque el id que traemos de la url es un string y el id del personaje es un número
//         // Si no se quiere utilizar el == toca convertir a Number el id: char.id === Number(id)
//         if (character) {
//             res.writeHead(200, { "Content-Type": "application/json" });
//             return res.end(JSON.stringify(character));
//         } else {
//             res.writeHead(404, { "Content-Type": "application/json" });
//             return res.end(JSON.stringify({ error: "Character not found"}));
//         }
//     }
//     res.writeHead(404);
//     res.end();
// })
// .listen(3001, "localhost");