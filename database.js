'use strict';

const mongoose = require('mongoose');
const BD = process.env.URI || "mongodb://localhost/adBD"; 

mongoose.connect(BD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(db => console.log(`BD conected`))
    .catch( e => console.error(`Error en BD: ${e}`));

