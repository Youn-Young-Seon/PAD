module.exports = {
    isLogin(req, res, next){        
        if(req.user) next();
        else res.redirect('/');
    }    
}