const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// express app require handler
app.use(require('cors')({ origin: 'http://localhost:3000' }));
app.use('/static', express.static('watch'));
app.use('/', express.static('client/dist'));

// socket.io app i/o
// io.on('connection', (socket) => {});

module.exports = {
  expressApp: app,
  http: server,
  socketApp: io
};
