'use strict';

const { list } = require('../Ads/ad.handler');
const {create,findOne ,insertAdId, deleteAdId} = require('./user.handlers');

const error = [];

module.exports = {
    createUser: (req, res) => {
        const name = req.body.name;
        create(name);
        res.redirect('/');
    },

    login:(req, res) => {
        const userid = req.body.user_id;
        res.redirect(`/${userid}`)
    },

    form: async(req, res) =>{
        const userId = req.params.userId;
        const user = await findOne(userId);
        res.render('templates/createForm', {adList, error, user})
    }

};


