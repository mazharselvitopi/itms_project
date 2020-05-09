const mongoose = require('./mongoDbConnectionModel');

//veriyi modellemek için Schema sınıfı kullanılıyor
const Schema = mongoose.Schema;

//bir şema oluşturuyoruz
//schema bir class sınıf gibi nesne elemanlarının tiplerini belirtir
let pageSchema = new Schema({
    category : {type: String, required: true},
    pageTitle : {type: String, required: true},
    pageOrder : {type: Number, required: true},
    unprocessedPageContent : {type: String, required: true},
    pageContent : {type: String, required: true},
    pageOrderAndCategory : {type: String, required : true, unique: true}
});
//şimdi schema'yı oluşturduk şimdi sıra geldi modele
//yani bir döküman nesnesi oluşturacağızki içini doldurabilelim

//burada modeli oluşturduk artık burayı kullanarak rahatça veritabanı
//işlemleri yapabiliriz
let Page = mongoose.model('Pages', pageSchema);

module.exports.Page = Page;

module.exports.addPage = (category, pageTitle, pageOrder, unprocessedPageContent, pageContent, res)=>{
    let newPage = new Page({
        category: category,
        pageTitle: pageTitle,
        pageOrder: pageOrder,
        unprocessedPageContent: unprocessedPageContent,
        pageContent: pageContent,
        pageOrderAndCategory : category + pageOrder
      });
      
      newPage.save((err, result) => {
        if (err) res.json(err);
        res.json(result);      
      });
    };

//sadece belli kategorideki veriler
//burada biz res ile response ögesi içerisine gelen dataları gömüp export ediyoruz
//res.json içerisine verileri atıyoruz daha sonra ejs sayfalarından çekiyoruz
module.exports.getAllPages = (category, res) => { // onerilen isim fetchAllPages
    Page.find({ category: category }, (err, pages) => {
        if (err) res.json(err);
        else res.json(pages);
      });
      
};

//burasi ajax isteklerinde rahatlik saglar
//sayfa sirasini alma sadece son sayfanin numarasini alir
module.exports.getPageOrder = (category, res) => {//onerilen isim fetchByPageOrder
    Page.findOne( {category}).sort({pageOrder : -1}).limit(1).exec((err, page) => {
        if (err) res.json(err);
        else res.json(page);
    });
}

//yazilari getir
module.exports.getPageInCategory = (category, pageOrder, res) => {
    Page.find({ category: category , pageOrder: pageOrder}, (err, page) => {
        if (err) res.json(err);
        else res.json(page);
      });
};

module.exports.getAllPagesWithRender = (req, category, pageOrder, res) => { // onerilen isim fetchAllPages
    Page.find({ category: category }, (err, pages) => {
        if (err) {
            if(req.session.username){
                res.render('pageView', {'userSession' : 'true', 'username': req.session.username, 'allPages':err, 'pageContent': 'lutfen sag taraftan secim yapiniz'});
            }else{
                res.render('pageView', {'userSession': 'false', 'info': ' ', 'allPages':err, 'pageContent': 'lutfen sag taraftan secim yapiniz'});
            }
        }
        else {
            if(req.session.username){
                //sayfalari cektik daha sonra icerigi cekiyoruz
                Page.find({ category: category, pageOrder:pageOrder }, (err2, pageContent) => {
                    if (err2) {
                        //if(pageOrder === 1)pageContent = 'Lutfen sagdan icerik seciniz';
                            res.render('pageView', {'userSession' : 'true', 'username': req.session.username, 'allPages':pages, 'pageContent': 'lutfen sag taraftan secim yapiniz'});
                    }
                    else {
                            res.render('pageView', {'userSession' : 'true', 'username': req.session.username, 'allPages':pages, 'pageContent':pageContent});
                    };
                  });
            }else{

                Page.find({ category: category, pageOrder:pageOrder }, (err2, pageContent) => {
                    if (err2) {
                        //if(pageOrder === 1)pageContent = 'Lutfen sagdan icerik seciniz';
                            res.render('pageView', {'userSession': 'false', 'info': ' ', 'allPages':pages, 'pageContent': 'lutfen sag taraftan secim yapiniz'});
                    }
                    else {
                            res.render('pageView', {'userSession': 'false', 'info': ' ', 'allPages':pages, 'pageContent':pageContent});
                    };
                  });
            }
        };
      });
      
};