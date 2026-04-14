const request = require('supertest');
const app = require('./index');

describe('API Tests', () => {
  test('GET /api/hello returns status 200', async () => {
    const response = await request(app)
      .get('/api/hello')
      .expect(200);
    
    expect(response.body).toHaveProperty('message');
  });
});