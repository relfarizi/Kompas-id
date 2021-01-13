// create database

module.exports = (sequelize, Sequelize) => {
    const News = sequelize.define("news", {
      judul: {
        type: Sequelize.STRING
      },
      berita: {
        type: Sequelize.STRING
      },
    });
  
    return News;
  };