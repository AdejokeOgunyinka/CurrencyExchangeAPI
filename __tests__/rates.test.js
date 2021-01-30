const request = require('supertest');
const app = require('../app');

describe('', () => {
	test('', (done) => {
        request(app).get('/api/rates')
        .then((response) => {
			expect(response.statusCode).toBe(200);
			done();
		});
    });
    test('', (done) => {
        request(app).get('/api/rates?base=CZK&currency=IDR,EUR,SEK')
        .then((response) => {
			expect(response.statusCode).toBe(200);
			done();
		});
    });
    test('', (done) => {
        request(app).get('/api/rates?base=CZY&currency=KOL,EUR,SEK')
        .then((response) => {
			expect(response.statusCode).toBe(400);
			done();
		});
    });
    test('', (done) => {
        request(app).get('/api/rates')
        .then((response) => {
			expect(response.body).toBeInstanceOf(Object);
			done();
		});
    })
});
