const request = require('supertest');
const app =require('../app');

describe('POST' /auth/register', () => {
    it('rejects a bad email (400)',async () => {
        const res = await request(app)
        .post(./auth/resgister')
            .send({name: 'Asha',email: 'abc',
                password: 'secret123'});

                expect(res.status).toBe(400);
    });
});
