require('dotenv').config()

const { app } = require('./src/server');
const { sequelize } = require('./src/config/database');