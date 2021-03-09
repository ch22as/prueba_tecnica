const { dateFormater, inputsValidation } = require('./ad.functions');
const {add, list, remove} = require('./ad.handler');

let error = {};

module.exports = {
    
    createForm : (req, res) => {
        list()
        .then(adList =>  {
            console.log(error);          
            res.render('templates/createForm',{ adList, error });
        })
        .catch(error => res.send( error ));
    },
    
    add: (req, res) =>{
        const title = req.body.title;
        const description = req.body.description;
        const date = dateFormater();
        error = {};
        const validate = inputsValidation(title, description);
        console.log(validate);

        if(!validate){
            add(title, description, date);
            res.redirect('/');
            return;
        };
        error.add={e: "Title and description can´t be equal"};
        res.redirect('/')
    },
    
    remove: (req, res) =>{
        remove(req.params.id);
        res.redirect('/')
    },
    
};