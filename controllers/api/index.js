//Require the Express router.
const router = require('express').Router();

//Require Comments, Posts and User routes.
const commentsRoutes = require('./comments-routes');
const postsRoutes = require('./posts-routes');
const usersRoutes = require('./users-routes');


//Use created routes.
router.use('/comments', commentsRoutes);
router.use('/posts', postsRoutes);
router.use('/users', usersRoutes);

//Export the router.
module.exports = router;