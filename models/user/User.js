'use strict';

const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name:{type:String, required:true},
    favAds:{type: Array},
    msg:{type: Array},
});

module.exports = model('User', userSchema, 'users');