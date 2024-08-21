const request = require('supertest');
const app = require('../../../../app');
const { connect, close } = require('../setup');

beforeAll(async () => {
    await connect();
  });
  
  afterAll(async () => {
    console.log("closing db")
    await close();
  });

describe('User Routes', () => {
    describe('Register User', () => {
        it('should register a new user', async () => {
            const response = await request(app)
                .post('/api/v1/users/')
                .send({
                    username: 'testuser',
                    password: 'pass',
                    role: 'agent'
                });

            expect(response.status).toBe(200);
            expect(response.body.message).toBe('User registered successfully');
        });

        it('should not register a user with missing fields', async () => {
            const response = await request(app)
                .post('/api/v1/users')
                .send({
                    username: 'testuser'
                });

            expect(response.status).toBe(400);
            expect(response.body.error).toBe('A user with the given username is already registered');
        });
    });
});