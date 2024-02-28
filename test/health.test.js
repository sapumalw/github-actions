import request from 'supertest';
import express from 'express';
import healthRouter from '../src/modules/health';

const app = express();
app.use('/api', healthRouter);

describe('Health Endpoint', () => {
    test('GET /api/v1/health', async () => {
        const response = await request(app).get('/api/v1/health');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello World!');
    });
});
