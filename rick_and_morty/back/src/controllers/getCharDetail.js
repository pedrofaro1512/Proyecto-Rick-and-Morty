const axios = require("axios");
const { KEY, URL_BASE } = process.env;

const successH = (response, res) => {
    const { image, name, gender, status, origin, species } = response.data;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ image, name, gender, status, origin, species }));
};
const errorH = (error, res) => {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(error.message);
};
const getCharDetail = (res, id) => {
    axios
        .get(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then((response) => successH(response, res))
        .catch((error) => errorH(error, res));
};

module.exports = getCharDetail;