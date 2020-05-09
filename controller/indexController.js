
//burada aslında normalde app.js tarafında oluşturacağımız req res alanını
//burada oluşturuyoruz ki bize kolaylık sağlasın
//buralarla biz model ve view bağlantılarını yapacağız inşaallah

exports.renderIndexView = (req, res) => {

    if(req.session.username){
        res.render('indexView', {'userSession' : 'true', 'username': req.session.username});
    }else{
        res.render('indexView', {'userSession': 'false', 'info': ' '});
    }
};