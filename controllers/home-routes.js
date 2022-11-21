const router = require('express').Router();
const { Comment, Post, User } = require('../models');

//GET all posts for the homepage including associated Users data.
router.get('/', async (req, res) => {
    try {
        const dbPostsData = await Post.findAll({
            include: [User, {
                model: Comment, 
                include: [User]
            }], 
        });

        const posts = dbPostsData.map((post) => post.get({ plain: true }));

        res.render('get-posts', { posts });

    } catch (err) {
        res.status(500).json(err);
    }
});

//GET a single post.
router.get('/posts/:id', async (req, res) => {
    try {
        const singlePostData = await Post.findByPk(req.params.id, {
            include: [User, {
                model: Comment,
                include: [User]
            }],
            
        });
        if (singlePostData) {
            const post = singlePostData.get({ plain: true});

            res.render('single-post', { post });
        } else {
            if (!singlePostData) {
                res.status(404).json({ message: 'No post found with that id!' });
                return;
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login route.
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

//Sign-up route.
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

//Export the routes.
module.exports = router;