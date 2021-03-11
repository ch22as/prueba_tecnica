'use strict';

const { list, remove } = require('./ad.handler');

const allAd = list;
const adToDelete = [];

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

    selectByDate: (year, month, day) =>{
       
        list.map((ad)=>{
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
    },

    deletedByIdArray: ( idArray ) =>{
        for (const id of idArray) {
            remove(id);
        }
    },

    dateToRemoveValidation: (day, moth, year) =>{
        return (isNaN(day) || 1 > day > 31 || day.length()  || isNaN(month) || 1 > month > 31  
        || isNaN(year) ||  > year > 3000)? true:false;
    }

};




