const { users } = require('./users.routes');
const { auth } = require('./auth.routes');
const { chatRooms } = require('./romms.routes');
const { messagesChat } = require('./messages.routes');

module.exports = {
  users,
  auth,
  chatRooms,
  messagesChat,
};
