//Require the Express router.
const router = require('express').Router();

//Require Comments, Posts and User routes.
const commentsRoutes = require('./comments-routes');
const postsRoutes = require('./posts-routes');
const usersRoutes = require('./users-routes');


//Use created routes.
router.use('/comment', commentsRoutes);
router.use('/post', postsRoutes);
router.use('/user', usersRoutes);

//Export the router.
module.exports = router;