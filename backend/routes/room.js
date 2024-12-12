const router = require("express").Router();
const roomController = require('../controllers/roomController')
const {verifyToken} = require("../middleware/jwt_token")

router.post('/',verifyToken, roomController.addRoom)
router.get('/:id',roomController.getRoomById)
router.get('/',roomController.getRooms)

module.exports = router;