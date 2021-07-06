const router = require('express').Router();
const apiRoutes = require('./api');
// collect the packaged group of API endpoints and prefix them with the `/api` path. 
router.use('/api',apiRoutes);

// Returns a 404 if a request to made to a non existing endpoint
router.use((req,res)=> {
    res.status(404).end()
});

module.exports = router;