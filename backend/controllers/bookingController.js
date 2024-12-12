const Booking = require('../models/Booking');
const User = require('../models/User');
const Hotel = require('../models/Hotel');

module.exports = {
    addBooking: async (req, res, next) => {
        const { user_id, hotel_id, room_id, daystay } = req.body; // Thêm room_id vào yêu cầu
        try {
            // Kiểm tra user
            const user = await User.findById(user_id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            // Kiểm tra hotel
            const hotel = await Hotel.findById(hotel_id);
            if (!hotel) {
                return res.status(404).json({ error: "Hotel not found" });
            }

            // Kiểm tra xem booking với cùng hotel_id đã tồn tại hay chưa
            let booking = await Booking.findOne({ user_id, hotel_id });

            if (booking) {
                // Nếu đã có booking, kiểm tra xem phòng đã tồn tại trong rooms chưa
                const existingRoom = booking.rooms.find(r => r.room.toString() === room_id);

                if (existingRoom) {
                    return res.status(400).json({ 
                        error: "This room is already booked in this booking. Please update the booking instead."
                    });
                }

                // Thêm phòng mới vào booking hiện có
                booking.rooms.push({ room: room_id, daystay });
                await booking.save();

                return res.status(200).json({
                    message: "Room added to existing booking successfully",
                    booking,
                });
            }

            // Nếu chưa có booking, tạo booking mới
            const newBooking = new Booking({
                user_id,
                hotel_id,
                rooms: [{ room: room_id, daystay }],
            });

            await newBooking.save();

            return res.status(201).json({
                message: "New booking created successfully",
                booking: newBooking,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "An error occurred while adding the booking" });
        }
    },
    getBookingByUser: async (req, res, next) => {
        const user_id  = req.params.id
        try {
            const bookings = await Booking.find({ user_id })

            if (!bookings || bookings.length === 0) {
                return res.status(404).json({ error: "No bookings found for this user" });
            }

            return res.status(200).json(
                bookings
            );
        } catch (error) {
            return next(error)
        }
    }
};
