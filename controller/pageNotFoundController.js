//sayfa bulunamadığında view pageNotFound u getireceğiz yani render edeceğiz
exports.pageNotFoundView = (req, res) => {

    if(req.session.username){
        res.render('pageNotFoundView', {'userSession' : 'true', 'username': req.session.username});
    }else{
        res.render('pageNotFoundView', {'userSession': 'false', 'info': ' '});
    }
};