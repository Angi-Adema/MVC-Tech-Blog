const router = require('express').Router();
const { Comments, Posts, Users } = require('../models');

//GET all posts for the homepage including associated Users data.
router.get('/', async (req, res) => {
    try {
        const dbPostsData = await Posts.findAll({
            include: [{ model: Comments, through: Users }],
        });
        res.status(200).json(dbPostsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET a single post.
router.get('/:id', async (req, res) => {
    try {
        const singlePostData = await Posts.findByPk(req.params.id, {
            include: [{ model: Comments, through: Users }],
            
        });
        const post = singlePostData.get({ plain: true});

        if (!singlePostData) {
            res.status(404).json({ message: 'No post found with that id!' });
            return;
        }
        res.status(200).json(singlePostData);
    } catch (err) {
        res.status(500).json(err);
    }
});