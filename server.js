// express
const express = require("express");
const app = express();
const path = require('path');

const port = 5000;

app.listen(port, () => {
    console.log('start');
});

app.use('/static', express.static(__dirname + '/views/static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

// const getStock = async (URL) => {
//     const response = await axios.get(URL);
//     return response;
// }

const stock = require('./routes/stock/index');
app.use('/api', stock);




