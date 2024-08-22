const { ProductImage } = require('../models');

module.exports = {
  async findByProductId(productId) {
    return await ProductImage.findAll({ where: { product_id: productId } });
  },
};