
exports.renderPageAdminView = (req, res) => {
    if(req.session.username){
        res.render('pageAdminView', {'userSession' : 'true', 'username': req.session.username});
    }else{
        res.render('adminLoginView', {'userSession': 'false', 'info': ' '});
    }
};

let pageModel = require('../models/pageModel');

exports.addPage = (req, res) => {
    if(req.session.username){
        pageModel.addPage(req.body.category, req.body.pageTitle, req.body.pageOrder, req.body.unprocessedPageContent, req.body.pageContent, res);
        //req.body.getData = 'data gelen';
    }else{
        res.render('adminLoginView', {'userSession': 'false', 'info': ' '});
    }
};

exports.getPageOrder= (req, res) => {
    if(req.session.username){
        pageModel.getPageOrder(req.body.category, res);
        //req.body.getData = 'data gelen';
    }else{
        res.render('adminLoginView', {'userSession': 'false', 'info': ' '});
    }
};

//daha yarim tamamlanmadi
exports.getAllPages = (req, res) => {
    if(req.session.username){
        pageModel.getAllPages(req.body.category, res);
        //req.body.getData = 'data gelen';
    }else{
        res.render('adminLoginView', {'userSession': 'false', 'info': ' '});
    }
};