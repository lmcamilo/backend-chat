const router = require('express').Router();
const { chatRoomController } = require('../controllers');
const { isAuthorized, validate } = require('../middlewares');
const {
  validationSchemas: { users },
} = require('../validations');

router.get('/', isAuthorized, validate(users.list), chatRoomController.list);
router.post('/', isAuthorized, chatRoomController.create);

module.exports.chatRooms = router;
