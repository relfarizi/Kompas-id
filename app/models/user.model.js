// create database

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("accounts", {
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      nama : {
          type: Sequelize.STRING
      }
    });
  
    return User;
  };