const router = require("express").Router();
const bookingController = require('../controllers/bookingController');
const {verifyToken} = require("../middleware/jwt_token")

router.post('/',verifyToken, bookingController.addBooking)
router.get('/:id', bookingController.getBookingByUser)
router.delete('/', verifyToken, bookingController.deleteBooking);

module.exports = router;