const { ChatRoom } = require('../models');

module.exports = {
  create: (params) => ChatRoom.create(params),
  list: (query) => ChatRoom.findAndCountAll(query),
  findOne: (params) => ChatRoom.findOne(params),
  findByPk: (id) => ChatRoom.findByPk(id),
  addUser: (user) => ChatRoom.addUser(user),
};
