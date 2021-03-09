const Ad = require('./Ad');

module.exports = {
    add: (title, description, date) => {
        const newAd = new Ad( {title, description, date} );
        newAd.save();
        
    },
    
    list: async () => {
        const adList = await Ad.find({}).lean();
        return adList;
    },
    
    remove: async (id) => await Ad.findByIdAndDelete({_id:id})
};