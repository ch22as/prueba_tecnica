const Ad = require('./Ad');
const { insertMessage } = require('../user');

module.exports = {
    add: (title, description, date) => {
        const newAd = new Ad( {title, description, date} );
        newAd.save();
        
    },
    
    list: async () => {
        const adList = await Ad.find({}).sort({'date': -1}).lean();
        return adList;
    },
    
    remove: async (id) => {
        const ad = await Ad.findById(id);
        const adUsers = ad.favUser;
        msg = `Ad with title:${ad.title} removed`;
        for(const userid of adUsers){
            insertMessage( userid, msg);            
        };
        await Ad.findByIdAndDelete({_id:id})
    },

    findById: async id => await Ad.findById(id).lean(),

    insertUserId: async (adId, userId) =>{
        console.log(`Ad Id: ${adId}\nUser Id: ${userId}`);
        const ad = await Ad.findById(adId);
        const favUser = ad.favUser;
        if(!favUser.includes(userId)){
            favUser.push(userId);
        }
        const newFavUser = favUser;
        await Ad.findByIdAndUpdate({_id: adId},{favUser: newFavUser})
    },

};