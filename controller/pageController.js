let pageModel = require('../models/pageModel');

//daha yarim tamamlanmadi
exports.renderPageView = (req, res) => {
        pageModel.getAllPagesWithRender(req, req.params.category, req.params.pageOrder, res);
        //req.body.getData = 'data gelen';
};