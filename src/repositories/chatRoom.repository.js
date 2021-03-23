const { ChatRoom } = require('../models');

module.exports = {
  list: (query) => ChatRoom.findAndCountAll(query),
  findById: (id) => ChatRoom.findByPk(id),
  get: (params) => ChatRoom.findOne({ where: params }),
  create: (params) => ChatRoom.create(params),
};
