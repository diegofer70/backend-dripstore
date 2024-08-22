const request = require('supertest');
const app = require('../src/app');

describe('Product Image API', () => {
  it('should create a product image', async () => {
    const response = await request(app)
      .post('/product-images')
      .send({
        product_id: 1,
        path: 'images/produto.jpg',
        enabled: true,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
