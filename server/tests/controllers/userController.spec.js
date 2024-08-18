const passport = require('passport');
const { authenticateUser, registerUser } = require('../../src/controllers/userController');
const User = require('../../src/models/user');

jest.mock('passport');
jest.mock('passport-local-mongoose')

describe('Auth Controller', () => {
  describe('authenticateUser', () => {
    it('should authenticate registered User', async () => {
        const req = {
            user: {username: 'validUser'},
        };
        const res = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
        const next = jest.fn();
        passport.authenticate.mockImplementation((strategy, options, callback) => {
            return (req, res, next) => {
                callback(null, req.user);
            }
        });

        await authenticateUser(req, res, next);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith('This is a protected route');
    });

    it('should not authenticate unregistered User', async () => {
        const req = {
            user: {username: 'invalidUser'},
        };
        const res = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
        const next = jest.fn();
        passport.authenticate.mockImplementation((strategy, options, callback) => {
            return (req, res, next) => {
                callback(null, false);
            }
        });

        await authenticateUser(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ error: 'User credentials are not correct' });
    });
  });

  describe('registerUser', () => {
    it('should register user', async () => {
        const req = {
            body: {
                username: 'testuser',
                password: 'pass',
                role: 'user'
            },
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        User.register = jest.fn((user, password, callback)=>{
            callback(null, user);
        });

        await registerUser(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'User registered successfully' });
        delete User.register;
    });

    it('should not register User', async () => {
        const req = {
            body: {
                username: 'testuser',
                password: 'pass',
                role: 'user'
            },
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        User.register = jest.fn((user, password, callback)=>{
            callback(new Error('Registration failed'));
        });

        await registerUser(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Registration failed' });
        delete User.register;
    });
  });
});

    
