module.exports = (sequelize, DataTypes) => {
    const ProductImage = sequelize.define('ProductImage', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Products', // Nome da tabela de produtos
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: 'product_images', // Nome da tabela
    });
  
    // Relacionamento entre Product e ProductImage
    
    ProductImage.associate = function(models) {
      ProductImage.belongsTo(models.Product, {
        foreignKey: 'product_id',
        as: 'product',
      });
    };
  
    return ProductImage;
  };
  