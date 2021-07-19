const express = require('express');
const routes = require('./routes/Index');
// import the connection to sequelize
const sequelize = require('./config/connection');

// set up express app
const app = express();
const PORT = process.env.PORT || 3001

// middleware
// parses incoming requests with JSON payloads and return an object
app.use(express.json());
// Parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({extended: true}));

//turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({force:false}).then(()=>{
    // listen for requests
    app.listen(PORT,()=> console.log('Now listening'));
})
// this is just a comment