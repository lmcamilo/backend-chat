const { StatusCodes } = require('http-status-codes');
const { chatMessageService } = require('../services');
const { catchAsync } = require('../utils');

module.exports = {
  create: catchAsync(async (req, res) => {
    const {
      body,
      session: { id },
    } = req;

    const finalbody = {
      ...body,
      sentBy: id,
      createdBy: id,
      updatedBy: id,
    };

    const chatMessage = await chatMessageService.create(finalbody);

    return res.status(StatusCodes.OK).json(chatMessage);
  }),
};
