const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
// collect the packaged group of API endpoints and prefix them with the `/api` path. 
router.use('/',homeRoutes);
router.use('/api',apiRoutes);

module.exports = router;