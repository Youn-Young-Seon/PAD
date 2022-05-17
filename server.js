// express
const express = require("express");
const app = express();
const path = require('path');
require('dotenv').config();
const { sequelize } = require('./models');
const port = process.env.PORT || 5000;
const proxy = require('./routes/proxy');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./passport');



// DB 연동
sequelize.sync({ force: false })
.then(() => console.log('성공'))
.catch((err) => console.log(err));


// 서버 실행
app.listen(port, () => {
    console.log(`start ${ port }`);
});

// 세션
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.COOKIE,
    // cookie: {
    //     httpOnly: true,
    //     sameSite: 'none'        
    // }
}));


// 패스포트 인증
app.use(passport.initialize());
app.use(passport.session());
passportConfig();


// 정적 파일
app.use('/static', express.static(__dirname + '/views/static'));


// 루트 페이지
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/index.html'));
// });


// proxy
app.use('/api', proxy);




