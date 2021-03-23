const { chatRoomRepository } = require('../../repositories');

module.exports = {
  getUserRoom: async (idUser) => {
    let room = await chatRoomRepository.get({ where: { idUser } });

    if (!room) {
      room = await chatRoomRepository.create({
        name: `${process.env.NODE_ENV}_USER_${idUser}`,
        idUser,
        createdBy: idUser,
        updatedBy: idUser,
      });
    }

    return room;
  },
};
