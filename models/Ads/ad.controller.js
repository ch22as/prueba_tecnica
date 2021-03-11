'use strict';

const { dateFormater, inputsValidation, titleLengthValidation, titleDescriptionValidate } = require('./ad.functions');
const {add, list, remove} = require('./ad.handler');

let error = {};

module.exports = {
    
    createForm : (req, res) => {
        list()
        .then(adList =>  {          
            res.render('templates/createForm',{ adList, error });
            error = {};
        })
        .catch(error => res.send( error ));
    },
    
    add: (req, res) =>{
        const title = req.body.title || '';
        const description = req.body.description || '';
        const date = dateFormater();

        const titleDescriptionDefined = titleDescriptionValidate(title, description);
        const equalInputs = inputsValidation(title, description);
        const titleMaxLenghtValidation = titleLengthValidation(title);
        
        error = {};
        console.log(titleDescriptionDefined);
        if(!titleDescriptionDefined){
            error.add={e: "Title and description must be defined."};
            res.redirect('/');
            return;
        };
        if(equalInputs){
            error.add={e: "Title and description can´t be equals"};
            res.redirect('/');
            return;
        };
       
        if(!titleMaxLenghtValidation){
            error.add={e: "Title max lenght 50 characters"};
            res.redirect('/');
            return;
        };
        console.log("guardado")
        add(title, description, date);
        res.redirect('/');
    },
    
    remove: (req, res) =>{
        remove(req.params.id);
        res.redirect('/')
    },
    
};