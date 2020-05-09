/**
 * **************************************************************************
 * Bu projede kullanılan paketler                                           *
 * -express                                                                 *
 * -nodemon                                                                 *
 * -bootstrap 4                                                             *
 * -bootstrap hazır blog teması kendi sitesinde                             *
 * -şablon motoru olarak ejs                                                *
 * -mongodb için mongoose paketi                                            *
 * kullanılmıştır                                                           *
 * -body-parser post işlemleri için kullanılmıştır                          *
 * -yazılım tasarım yöntemi olarak mvc tasarım yöntemi kullanılmıştır       *
 * author: Mazhar Selvitopi                                                 *
 ****************************************************************************
 */

 /**
  * mongodb bağlantı linki
  * mongodb+srv://mazharselvitopi:<password>@cluster0-08chr.mongodb.net/test?retryWrites=true&w=majority
  * username: mazharselvitopi
  * password: group05
  * 
  */

let express     = require('express');
let app         = express();
let router      = require('./routers/routers');
let path        = require('path');
let bodyparser  = require('body-parser');
let session     = require('express-session');


app.use(bodyparser.urlencoded({'extended':'true'}));
app.use(session({'secret': 'Bismillahirrahmenirrahim'})); //session başlatıyoruz

//ejs yi varsayılan görüntü motoru yapıyoruz
//burada varsayılan olarak ejs uzantısını her seferinde yazmamak için bunu yapıyoruz
app.set('view engine', 'ejs');

//ejs için varsayılan yere bakmasını söylüyoruz
app.set('views', './views');

//şimdi public klasörümüze erişim izni vereceğiz
//app.use(express.static('public')) yazınca olmuyor ulaşamıyoruz
app.use('/public',express.static(path.join(__dirname,'public')));

//şimdi yönlendirmelerimizi router imize yollayacağız
//buradaki use middleware yapımızı oluşturuyor aslında burada birde next olacak ama
//biz buradaki next i kullanmayacağımız için tekrar bu tarafa koyduk
app.use('/', router);

//sunucumuzu 9933 portunda çalıştırıyoruz
app.listen(9933, () => {
    console.log('Sunucumuz çalışıyor');
});
