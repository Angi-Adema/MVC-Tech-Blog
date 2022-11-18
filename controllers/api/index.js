//Require the Express router.
const router = require('express').Router();

//Require api and home routes.
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

//Use created routes.
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

//Export the router.
module.exports = router;