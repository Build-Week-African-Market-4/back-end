const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const restricted = require('./middlewares/restricted');
const authRouter = require('./auth/auth-router');
const marketRouter = require('./market/market-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser);

server.use('/api/auth', authRouter);
server.use('/api/market', restricted, marketRouter);

server.get('/', (req, res, next) => {
    res.json({
        api: 'up'
    })
    next()
});

server.use((err, req, res, next) =>  {
    res.status(err.status).json({
        message: err.message,
        stack: err.stack
    })
});

server.use('*', (req, res, next) => {
    res.status(404).json({
        message: 'Sorry, not found!'
    })
});

module.exports = server;