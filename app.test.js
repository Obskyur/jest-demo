import supertest from 'supertest';
import app from './app.js';

const request = supertest(app);

describe('Testing the app endpoints', () => {
  test('GET "/" must return "Hello, world!" and a correct status', () => {
    return request.get('/').then((response) => {
      expect(response.status).toBe(200);
      expect(response.text).toBe('Hello, world!');
    })
  });

  test('POST "/users" must return correct user data in JSON format and a correct status', () => {
    return request.post('/users').then((response) => {
      expect(response.status).toBe(201);
      expect(response.headers['content-type']).toMatch('application/json');
      expect(response.body.message).toBe('success');
      expect(response.body.data.isDeveloper).toBeTruthy();
      expect(response.body.data.followersOnGithub).toBeGreaterThan(10);
    });
  });
});
