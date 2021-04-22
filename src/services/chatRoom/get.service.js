const { chatRoomRepository } = require('../../repositories');

module.exports = {
  getUserRoom: async (params) => {
    let room = await chatRoomRepository.get({
      userId: params.idUser,
    });

    if (!room) {
      room = await chatRoomRepository.create({
        name: `${process.env.NODE_ENV}_USER_${params.idUser}`,
        userId: params.idUser,
        createdBy: params.idUser,
        updatedBy: params.idUser,
      });
    }

    return room;
  },
};
