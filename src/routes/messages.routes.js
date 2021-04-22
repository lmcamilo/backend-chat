const router = require('express').Router();
const { chatMessageController } = require('../controllers');
const { isAuthorized, validate } = require('../middlewares');
const {
  validationSchemas: { users },
} = require('../validations');

// router.get('/', isAuthorized, validate(users.list), chatRoomController.list);
router.post('/:idChat', isAuthorized, chatMessageController.create);

module.exports.messagesChat = router;
