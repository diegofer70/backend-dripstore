const Sequelize = require('sequelize');
const config = require('../config/database');
const ProductImage = require('./productImage');

const sequelize = new Sequelize('');

const models = {
  Product,
  ProductImage,
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
