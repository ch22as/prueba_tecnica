'use strict';

const { dateFormater, inputsValidation, titleLengthValidation, titleDescriptionValidate, dateToRemoveValidation, selectByDate, deletedByIdArray, numberOfAdValiation} = require('./ad.functions');
const {add, list, remove, findById} = require('./ad.handler');

let error = {};
const adLimit = 10;

module.exports = {
    
    createForm : (req, res) => {
        list()
        .then(adList =>  {          
            res.render('templates/createForm',{ adList, error });
            error = {};
        })
        .catch(error => res.send( error ));
    },
    
    add: async(req, res) =>{
        const title = req.body.title || '';
        const description = req.body.description || '';
        const date = dateFormater();
        const allAds = await list();
        
        error = {};
       
        if(!titleDescriptionValidate(title, description)){
            error.add={e: "Title and description must be defined."};
            res.redirect('/');
            return;
        };
        if(inputsValidation(title, description)){
            error.add={e: "Title and description can´t be equals"};
            res.redirect('/');
            return;
        };
       
        if(!titleLengthValidation(title)){
            error.add={e: "Title max lenght 50 characters"};
            res.redirect('/');
            return;
        };

        if(numberOfAdValiation(allAds, adLimit)){
            
            for(let i=(adLimit-1); i < allAds.length; i++){
                remove(allAds[i]._id);
            }
        };

        add(title, description, date);
        res.redirect('/');
    },
    
    remove: (req, res) =>{
        remove(req.params.id);
        res.redirect('/')
    },

    removeByDate:  async (req, res) =>{
        const day = req.body.day;
        const month = req.body.month;
        const year = req.body.year ;

        const dateValidation = dateToRemoveValidation(day, month, year);
        error = {};
        if(dateValidation){
            error.add={e: "No valid date"};
            res.redirect('/');
            return;
        };

        const adsToDelete = await selectByDate(year, month, day);
        console.log(`Received: ${adsToDelete}`);
        deletedByIdArray(adsToDelete);

        res.redirect('/');

    },

    detail: (req, res) =>{
        findById(req.params.id).then(ad =>{
            console.log(ad)
            res.render('templates/detail',{ad})
        });
    }
    
};