const { ProductImage } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const { product_id, path, enabled } = req.body;
      const productImage = await ProductImage.create({ product_id, path, enabled });
      return res.status(201).json(productImage);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar imagem do produto' });
    }
  },

  async index(req, res) {
    try {
      const images = await ProductImage.findAll();
      return res.status(200).json(images);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao listar imagens do produto' });
    }
  },
};
