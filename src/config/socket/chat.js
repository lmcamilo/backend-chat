// const { promisify } = require('util');
const socketIO = require('socket.io');
// const { jwt, encryptor, socketAuth } = require('../../helpers');
// const chatRoomsService = require('../../services/chatRooms');
// const { create } = require('../../services/chatMessages/create');
// const { list } = require('../../services/chatMessages/list');
// const { destroy } = require('../../services/chatMessages/destroy');

// const verify = promisify(jwt.verify);
let io = null;

module.exports = {
  connect: (server) => {
    io = socketIO(server, {
      path: `/api/v1/socket/chat`,
    });

    io.on('connection', async (socket) => {
      try {
        console.log('chat', socket.id);
        socket.emit('allowed', 'teste allowed');
      } catch (error) {
        console.error('ERROR', error);
      }
    });
  },
};
