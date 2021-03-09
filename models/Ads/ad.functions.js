'use strict';

module.exports = {
    dateFormater: ()=>{
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const formatedDate ={day, month, year};
        console.log(formatedDate);
        return formatedDate;
    },

    inputsValidation : (title, description)=>{
        return title==description? true:false;
    }
};




