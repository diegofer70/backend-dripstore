const { sequelize } = require('../config/database');
const { Model, DataTypes } = require('sequelize');

class Options extends Model { };

Options.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Product',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        shape: {
            type: DataTypes.ENUM('square', 'circle'),
            defaultValue: 'square'
        },
        radius: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        type: {
            type: DataTypes.ENUM('text', 'color'),
            defaultValue: 'text'
        },
        values: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'options',

    }
)
module.exports = Options;