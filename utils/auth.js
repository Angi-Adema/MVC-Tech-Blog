//Verification of login, if not logged in then redirect to the login page or else move forward to homepage.
const withAuth = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect("/login");
    } else {
        next();
    }
};

//Export the file.
module.exports = withAuth;