const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

signUp = (req,res) => {
    console.log(req.body.email);
    User.create({
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 8),
        fullName : req.body.fullName,
        gender : req.body.gender 
    })
    .catch((err) => {
            res.status(500).send({ message : err.message });
        });
    res.status(200).send({
        email : user.email,
        fullName : user.fullName,
        gender : user.gender,
    })
    
    };

    
signIn = (req,res) => {
    console.log(req.body)
    User.findOne({
        where : {
            email: req.body.email
        }
    })
    .then((user) => {
        if(!user) {
            return res.status(404).send({message : "User Not Found !"})
        }

        let passwordisValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!passwordisValid) {
            return res.status(401).send({
                accessToken:null,
                message: "Password is Invalid"
            });
        }
        else{  
            let token = jwt.sign(
                {id : user.id},
                config.secret,
                {
                    expiresIn:86400 // expired time for token
                });
            
            res.status(200).send({
                email : user.email,
                fullName : user.fullName,
                gender : user.gender,
                accessToken : token
            })
        }
        
    })
    .catch((err) => {
        res.status(500).send({message:err.message, position :"email problem"});
    });
};

module.exports = {
    signUp :signUp,
    signIn : signIn
}