let express = require('express');
let router = express.Router();

//anasayfa controller
let indexController = require('../controller/indexController');

//admin login
let adminLoginController = require('../controller/adminController');

//sayfa bulunamadığında 404 hatası gibi birşey
//pageNotFoundController
let pageNotFoundController = require('../controller/pageNotFoundController');

//sayfa yonetimi
//icerik ekleme falan buradan olacak insaallah
let pageAdminController = require('../controller/pageAdminController');

//sayfa gösterici
let pageController = require('../controller/pageController'); 

//burada eğer direk siteye hiçbir parametre olmaksızın girilirse
//direk anasayfa render edilmesi için bir durum oluşturduk
router.get('/', indexController.renderIndexView);

router.get('/adminLogin', adminLoginController.renderAdminLoginView);//tamamlandı

router.post('/adminLogin', adminLoginController.accessControl);//tamamlandı-giriş

router.get('/adminLogout', adminLoginController.renderAdminLogout); //çıkış

router.get('/adminHome', adminLoginController.renderAdminHomeView); //admin page view

router.get('/pageAdmin', pageAdminController.renderPageAdminView);//sayfa yonetimi

router.post('/addPage', pageAdminController.addPage);//sayfa ekleme

router.post('/getPageOrder', pageAdminController.getPageOrder); //sayfa sirasi getirme

router.post('/getAllPages', pageAdminController.getAllPages); //tum sayfalari getirme admin için

router.get('/getPage/:category/:pageOrder', pageController.renderPageView);//sayfa getir

//şimdi hiç sayfa bulunamazsa nereye yönlendireceğiz onu yapıyoruz
router.get('*',pageNotFoundController.pageNotFoundView);


//router nesnemizi exports ettik
module.exports = router;