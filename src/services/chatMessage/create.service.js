const { chatMessageRepository } = require('../../repositories');

module.exports = {
  create: async (params) => {
    const message = await chatMessageRepository.create({
      ...params,
      sentBy: params.sentBy,
      read: false,
      updatedBy: params.sentBy,
      createdBy: params.sentBy,
    });

    return message;
  },
};
