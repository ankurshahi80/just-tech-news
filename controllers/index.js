const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
// collect the packaged group of API endpoints and prefix them with the `/api` path. 
router.use('/api',apiRoutes);
router.use('/',homeRoutes);

// Returns a 404 if a request to made to a non existing endpoint
router.use((req,res)=> {
    res.status(404).end()
});

module.exports = router;