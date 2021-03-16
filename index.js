'use strict';

require('./database');

const express = require('express');
const { Router } = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const { adRoutes } = require('./models/Ads');
const {userRoutes } = require('./models/user');

const app = express();
// const router = Router();

app.set('port', process.env.PORT || 4000);


app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join( __dirname, 'views/layouts'),
    partialsDir: path.join( __dirname, 'views/partials'),
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use( adRoutes );
app.use('/user', userRoutes)




app.listen(app.get('port'), console.log(`Escuchando puerto: http://localhost:4000/ `));
