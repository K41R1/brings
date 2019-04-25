const axios = require('axios');
const end_point = 'https://api.nasa.gov/planetary/apod?api_key=';

module.exports = async function () {
    return await axios.get(end_point + process.env.API_KEY).then( function (response) {
        return response.data
    })
};