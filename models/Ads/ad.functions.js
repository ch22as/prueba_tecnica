'use strict';

const { list, remove } = require('./ad.handler');

const allAd = list;


module.exports = {
    dateFormater: ()=>{
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const formatedDate ={ year, month, day};
        return formatedDate;
    },
    titleDescriptionValidate: (title, description) =>{
        return title != '' && description != ''? true:false; 
    },

    inputsValidation : (title, description)=>{
        return title==description? true:false;
    },

    titleLengthValidation : title => {
        return title.length<=50? true:false;
    },

    selectByDate: async ( year, month, day) =>{
        let adToDelete = [];

        const allAds = await list();
        allAds.forEach(ad =>{   
                if(ad.date.year < year) {
                    adToDelete.push(ad._id);
                    
                    return
                };
                if(ad.date.year == year && ad.date.month < month) {
                adToDelete.push(ad._id);
                return;
                };
                if(ad.date.year == year && ad.date.month == month && ad.date.day < day){
                adToDelete.push(ad._id)
                };      
            });
        return adToDelete;           
    },

    deletedByIdArray: ( idArray ) =>{
       for(const id of idArray) {
            remove(id);
        };
    },

    dateToRemoveValidation: (day, month, year) =>{
        return (day == /^[1-31]/ || month == /^[1-12]/ || year == /^[1900-3000]/ )?
        true:false;
    }

};

