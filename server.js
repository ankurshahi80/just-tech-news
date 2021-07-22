const path = require('path');
const express = require('express');
const routes = require('./controllers');
// import the connection to sequelize
const sequelize = require('./config/connection');

// set up express app
const app = express();
const PORT = process.env.PORT || 3001

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

// middleware
// parses incoming requests with JSON payloads and return an object
app.use(express.json());
// Parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

//turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({force:false}).then(()=>{
    // listen for requests
    app.listen(PORT,()=> console.log('Now listening'));
})
