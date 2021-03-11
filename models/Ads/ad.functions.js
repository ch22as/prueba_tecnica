'use strict';

module.exports = {
    dateFormater: ()=>{
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const formatedDate ={day, month, year};
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
    }
};




