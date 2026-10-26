
const request = require('supertest');
const app = require('../app');

describe('POST /register', () => {
    it('rejects a bad email (400)', async () => {
        const res = await request(app)
            .post('/register')
            .send({
                name: 'Bhuvan',
                email: 'bhuvanesh',
                password: 'Bhuvan14$'
            });

        expect(res.status).toBe(400);
        expect(res.body.message).toBe('Validation failed');
        expect(res.body.errors[0].field).toBe('email');
    });

    it('rejects a name that is too short (400)', async () => {
        const res = await request(app)
            .post('/register')
            .send({
                name: 'Arun',
                email: 'arunkumar.com',
                password: 'arun123'
            });

        expect(res.status).toBe(400);
        expect(res.body.message).toBe('Validation failed');
    });

    it('rejects a short password (400)', async () => {
        const res = await request(app)
            .post('/register')
            .send({
                name: 'kiran',
                email: 'kirankumar@.com',
                password: 'kiran123'
            });

        expect(res.status).toBe(400);
        expect(res.body.errors[0].field).toBe('password');
    });

    it('registers successfully with valid data (201)', async () => {
        const res = await request(app)
            .post('/register')
            .send({
                name: 'Rahul',
                email: 'Rahul.s@.com',
                password: 'RAHUL123'
            });

        expect(res.status).toBe(201);
        expect(res.body.message).toBe('Validation successful');
        expect(res.body.user).toEqual({
            name: 'Ram',
            email: 'Ram1122@.com'
        });
    });

    it('converts email to lowercase (201)', async () => {
        const res = await request(app)
            .post('/register')
            .send({
                name: 'Raj',
                email: 'rajkumar@.COM',
                password: 'RAJ123'
            });

        expect(res.status).toBe(201);
        expect(res.body.user.email).toBe('.com');
    });
});
