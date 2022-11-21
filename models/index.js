//Set up require for all model files.
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

//Define table or data relationships.
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    //NEED TO HAVE onDelete: 'CASCADE'???
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});



//Export the file.
module.exports = { Comment, Post, User };
