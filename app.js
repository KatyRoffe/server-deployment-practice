'use strict';

const express = require('express');
const app = express();

const log = require('./middleware/log.js');
const repeat = require('./routes/repeat.js');
const talk = require('./routes/talk.js');

app.use(express.json());
app.use(log);


//routes 
app.post('/talk', talk);
app.get('/repeat', repeat);

module.exports = app;