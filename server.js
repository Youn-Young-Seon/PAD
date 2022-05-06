// express
const express = require("express");
const app = express();
const path = require('path');

// axios
const axios = require('axios');

// fx.js
const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");

// stock api
const BADANG_URL = `http://apis.data.go.kr/1160100/service/GetStocDiviInfoService/getDiviInfo`;
const SERVICE_KEY = `NTVoNqBCa6w4WY0zqtP488WlWdVMsK4H4z%2BanvgdokVDEjJOsFtXTI98sRy2NUrAaw3IUMu0izHR0DFo%2F2XqHA%3D%3D`;
const URL = `${BADANG_URL}?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=2000&resultType=json`;

app.listen(5000, () => {
    console.log('start');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// const getStock = async (URL) => {
//     const response = await axios.get(URL);
//     return response;
// }

const count = iter => {
    let i = 0;
    for(const a of iter) i++;
    return i;
};

const count1 = (i=0) => iter => {
    for(const a of iter) i++;
    return i;
}

const count2 = _.curry((i, iter) => {
    for(const a of iter) i++;
    return i;
});

app.get('/api/stock', (req, res) => {
    axios.get(URL)
        .then(response => {
            res.json(_.go(
                response.data.response.body.items.item,
                _.map((data) => ({...data, id: 1})),
                _.reject(data => data.stckDvdnRcdNm === '무배당')
                // _.filter(data => data.stckIssuCmpyNm === '포스코케미칼')
                // count2(1)
                // iter => count2(0, iter)
            ))

            // const pip = _.pipe(
            //     _.filter(data => data.stckIssuCmpyNm === '우리은행')
            // )
            // res.json(pip(response.data.response.body.items.item));
        })
        .catch(err => new Error(err + '에러 ??'))
})


