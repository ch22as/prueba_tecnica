const { Schema, model } = require('mongoose');

const adSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required : true },
    date:{ type: Object, required: true }
});


module.exports = model('Ad', adSchema, 'ads');