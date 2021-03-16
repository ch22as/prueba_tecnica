'use strict';

const Ad = require('../Ads/Ad');
const User = require('./User');

module.exports = {
    create: nameSended => {
        const newUser = new User({name:nameSended});
        newUser.save();
    },
    findOne: idUser => User.findById(idUser).lean().then(user => user),

    insertAdId: async(idUser, idAd) => {
        const user = await User.findById(idUser);
        let favAds = user.favAds;
        favAds.push(idAd);
        await User.findByIdAndUpdate({_id: user._id}, {favAds : favAds });
    },    

    deleteAdId: (idUser, idAd) => User.findById(idUser).then(user => 
        user.filter(id => id != idAd )
    ),

    listUsers: _ => User.find({}).lean(),

    insertMessage: async (userId, msg) =>{
        let user = await User.find({_id: userId});
        user.msg.push(msg);
        const newMsg = user.msg;
        await User.findByIdAndUpdate({_id: userId}, {msg: newMsg });
    } 
    
    
};