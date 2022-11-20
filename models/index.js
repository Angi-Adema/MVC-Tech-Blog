//Set up require for all model files.
const Comments = require('./Comments');
const Posts = require('./Posts');
const Users = require('./Users');

//Define table or data relationships.
Comments.belongsTo(Users, {
    foreignKey: 'users_id'    //NEED TO HAVE onDelete: 'CASCADE'???
});

Comments.belongsTo(Posts, {
    foreignKey: 'posts_id'
});

Posts.belongsTo(Users, {
    foreignKey: 'users_id'
});

Posts.hasMany(Comments, {
    foreignKey: 'posts_id'
});

Users.hasMany(Comments, {
    foreignKey: 'users_id'
});

Users.hasMany(Posts, {
    foreignKey: 'users_id'
});
//Export the file.
module.exports = { Comments, Posts, Users };
