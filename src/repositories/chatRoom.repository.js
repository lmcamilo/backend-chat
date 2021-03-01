const { ChatRoom } = require('../models');

module.exports = {
  list: (query) => ChatRoom.findAndCountAll(query),
  findByPk: (id) => ChatRoom.findByPk(id),
  get: (args) => ChatRoom.findOne(args),
  create: (params) => ChatRoom.create(params),
  addUser: (user) => ChatRoom.addUser(user),
};
