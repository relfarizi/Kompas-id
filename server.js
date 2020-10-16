const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { authJwt } = require("./app/middleware");
const userController = require("./app/controllers/user.controller");
const authController = require("./app/controllers/auth.controller");
const { verifySignUp } = require("./app/middleware");
const app = express();

var corsOptions = {
    origin : "https://localhost:8081"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./app/models");

// Database create
db.sequelize.sync();
  /*
  ({force: true}).then(() => {
  console.log('Drop and Resync Db');
});
*/


// root
app.get("/", (req, res) => {
    res.json({ message: "Welcome to simple API." });
  });


// handle header
app.use(function(req,res,next) {
  res.header(
      "Access-Control-Allow-Headers",
       "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// hit sign-up
app.post(
  "/api/auth/signup",
  (req,res,next) => {verifySignUp.checkDuplicateEmail(req,res,next)
  },
  (req1,res1) =>{authController.signUp(req1,res1)}
);

// hit sign-in

app.post("/api/auth/signin", (req,res) =>{authController.signIn(req,res)});


// hit profile page
app.get(
  "/api/test/user", 
  [authJwt.verifyToken],
  userController.allAccess

);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});