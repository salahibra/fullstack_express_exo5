const express = require('express');
require('dotenv').config({path: './.env'});
const path = require('path');



const port = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use(express.static(path.join(__dirname, 'public')));

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', './layouts/layout');


app.use((req, res, next)=>{
    const now = new Date().toDateString();
    console.log(`${now}: une requete ${req.method} est arrivee !`);
    next();
}),
app.get('/date', (req, res)=>{
    let query = req.query;
    res.render('pages/show_user_params', {query});
}),
app.get('/form', (req, res)=>{
    res.render('pages/simple_form');
});
app.post('/form', (req, res, next)=>{
    let data = req.body;
    res.render('pages/show_post_data', { data });
})

const homeRouter = require('./routes/homeRoute');
app.use('/', homeRouter);

const researchRouter = require('./routes/researchRouter');
app.use('/research', researchRouter);

const teachingRouter = require('./routes/teachingRouter');
app.use('/teaching', teachingRouter);

app.use('/*path', (req, res)=>{
    res.redirect('/');
})



app.listen(port, ()=>{
    console.log(`le serveur ecoute sur : http:127.0.0.1:${port}`);
})