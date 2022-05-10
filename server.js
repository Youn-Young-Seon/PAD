// express
const express = require("express");
const app = express();
const path = require('path');
require('dotenv').config();
const { sequelize } = require('./models');
const port = process.env.PORT || 5000;
const stock = require('./routes/stock/index');


// DB 연동
sequelize.sync({ force: true })
    .then(() => console.log('성공'))
    .catch((err) => console.log(err));


// 서버 실행
app.listen(port, () => {
    console.log('start');
});


// 정적 파일
app.use('/static', express.static(__dirname + '/views/static'));


// 루트 페이지
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});


// stock
app.use('/api', stock);




