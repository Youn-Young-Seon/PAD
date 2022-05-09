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

const stock = {
    getPAD(req, res) {
        axios.get(URL)
            .then(response => {
                res.json(_.go(
                    response.data.response.body.items.item,
                    _.map((data) => ({...data, id: 1})),
                    _.reject(data => data.stckDvdnRcdNm === '무배당')
                ))
            })
            .catch(err => new Error(err + '에러 ??'))
    }
}

module.exports = stock;