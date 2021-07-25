const path = require('path');
const express = require('express');
<<<<<<< HEAD
const routes = require('./routes/Index');
// import the connection to sequelize
const sequelize = require('./config/connection');
=======
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
// const routes = require('./controllers/');
>>>>>>> develop

// set up express app
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db:sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({helpers});

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(require('./controllers/'));


// import the connection to sequelize

//turn on connection to db and server
sequelize.sync({force:false}).then(()=>{
    // listen for requests
    app.listen(PORT,()=> console.log('Now listening'));
<<<<<<< HEAD
})
// this is just a comment
=======
});
>>>>>>> develop
