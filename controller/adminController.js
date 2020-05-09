//admin girişi
exports.renderAdminLoginView = (req, res) => {
    if(req.session.username){
        res.render('adminLoginView', {'userSession': 'true', 'info': ' '});
    }else{
        res.render('adminLoginView', {'userSession': 'false', 'info': ' '});
    }
};


//giriş kontrolü
exports.accessControl = (req, res) =>{
    let username = 'grouprandom';
    let password = 'grouprandom';
    let loginUsername = req.body['username'];
    let loginPassword = req.body['password'];

    if(username === loginUsername && password === loginPassword){
        req.session.username = username;
        res.render('adminHomeView', {'userSession' : 'true', 'username': username});
    }else{
        res.render('adminLoginView', {'userSession': 'false', 'info': 'Kullanıcı Adınız veya Şifreniz Hatalı'});
    }
};

//admin anasayfa
exports.renderAdminHomeView = (req, res) => {
    if(req.session.username){
        res.render('adminHomeView', {'userSession' : 'true', 'username': req.session.username});
    }else{
        res.render('adminLoginView', {'userSession': 'false', 'info': ' '});
    }
};

exports.renderArticleAdminView = (req, res) => {
    if(req.session.username){
        res.render('articleAdminView', {'userSession' : 'true', 'username': req.session.username});
    }else{
        res.render('adminLoginView', {'userSession': 'false', 'info': ' '});
    }
};

//çıkış için
exports.renderAdminLogout = (req, res) => {
    delete req.session.username;
    res.redirect('adminLogin');
};