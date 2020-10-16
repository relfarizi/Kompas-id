const db = require("../models");
const User = db.user;

checkDuplicateEmail = (req,res,next) => {
    console.log(req.body.email);
    User.findOne({
        where : {
            email : req.body.email
        }
    }).then((user) => {
        if(user) {
            res.status(400).send({
                message : "Sorry, Email is Already Use"
            })
        return;
        }
        next();
    });

};

module.exports = {
    checkDuplicateEmail : checkDuplicateEmail
}

