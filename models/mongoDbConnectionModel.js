//mongoose bağlanmak için require ile dahil ediyoruz
//burada dikkat edilmesi gereken önemli faktör
const mongoose = require('mongoose');

//mongodb uzakta mlab.com da
mongoose.connect('mongodb+srv://mazharselvitopi:mazharselvitopi@cluster0-08chr.mongodb.net/test?retryWrites=true&w=majority', err => console.log(err ? err : 'Mongo connected.'));

module.exports = mongoose;

/************************************************************
 * kullanımı
 * let User = require('/model/mongoDbConnectionModel');
 * let newUser = new User({
 *      name : 'Mazhar',
 *      lastName : 'Selvitopi',
 *      userName : 'mazharselvitopi',
 *      email : 'selvitopi_25@hotmail.com',
 *      password: 'm123456'
 * });
 * newUser.save((err) => {
 *      if(err)
 *          {
 *          console.log(err);
 *      }else{
 *          console.log('Kullanıcı kaydedildi');
 *      }
 * });
 ************************************************************/