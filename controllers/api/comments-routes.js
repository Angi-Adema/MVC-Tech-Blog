const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

//Require authorization from user to post a new comment.
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comments.create(
            req.body,
            {
                where: req.session.userId,
            });

            res.json(newComment);
        } catch (err) {
        res.status(500).json(err);
    }
});

//Export the routes.
module.exports = router;
