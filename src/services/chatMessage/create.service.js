const { chatMessageRepository } = require('../../repositories');

module.exports = {
  create: async (params) => {
    const message = await chatMessageRepository.create({
      ...params,
      sentBy: params.idUser,
      read: false,
      updatedBy: params.idUser,
      createdBy: params.idUser,
    });

    return message;
  },
};
