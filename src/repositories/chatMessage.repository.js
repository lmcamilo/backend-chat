const { ChatMessage } = require('../models');

module.exports = {
  list: (query) => ChatMessage.findAndCountAll(query),
  findById: (id) => ChatMessage.findByPk(id),
  get: (params) => ChatMessage.findOne({ where: params }),
  create: (params) => ChatMessage.create(params),
  delete: (id) => ChatMessage.destroy({ where: { id } }),
};
