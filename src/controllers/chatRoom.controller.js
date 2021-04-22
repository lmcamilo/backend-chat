const { StatusCodes } = require('http-status-codes');
const { chatRoomService } = require('../services');
const { catchAsync } = require('../utils');

module.exports = {
  list: catchAsync(async (req, res) => {
    const { page, perPage, sortBy } = req.query;
    const response = await chatRoomService.list({ page, perPage, sortBy });

    if (!response || response.data.length === 0) {
      return res.status(StatusCodes.NO_CONTENT).end();
    }

    return res.status(StatusCodes.OK).json(response);
  }),

  create: catchAsync(async (req, res) => {
    const {
      body,
      session: { id },
    } = req;

    const finalbody = {
      ...body,
      idUser: id,
      createdBy: id,
      updatedBy: id,
    };

    const chatRoom = await chatRoomService.getUserRoom(finalbody);

    return res.status(StatusCodes.OK).json(chatRoom);
  }),
};
