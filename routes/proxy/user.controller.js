// fx.js
const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");

const { User } = require('../../models/index');

const output = {
    async getAllUsers(req, res){
        const allUser = await User.findAll();
        const allUserId = _.go(
                                allUser,
                                _.map(user => user.userId)
                            );
        res.send(allUserId);
    }
}

const process = {
    async join(req, res){
        await User.create(req.body);
        res.redirect('/login');
    },
    login(req, res){
        res.json(req.user);
    },
    loginSuccess(req, res){
        if(req.user){
            res.json({
                success: true,
                message: "successfull",
                user: req.user
            });
        } 
    },
    logout(req, res){
        req.logout();
        res.redirect('/');
    }
}

module.exports = { output, process };