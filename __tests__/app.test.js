'use strict';

const app = require('../app.js');
const supertest = require('supertest');
const { expect, it } = require('@jest/globals');

const request  = supertest(app);

describe('This is to test my Express Server', () => {

  it('This should response with a string upon POST /talk', async () => {
    let param = 'Screaming into the Void';''
    let response = await request.post('/talk').send({
      words: param,
    });

    expect(response.status).toBe(200);
    expect(typeof(response.text)).toBe('string');
    expect(response.text).toBe(param);
  });

  it('This should respond with a string upon GET /repeat', async () => {

    let response = await request.get('/repeat');

    expect(response.status).toBe(200);
    expect(typeof response.text).toBe('string');
  });
});