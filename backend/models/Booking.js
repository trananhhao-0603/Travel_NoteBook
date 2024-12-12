const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    user_id: {type: String, required: true},
    hotel_id: {type: String, required: true},
    rooms: [
        {
            room: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Room",
            },
            daystay: {
                type: Number, 
                required: true, 
            }
        }
    ]

}, {timestamps: true});

module.exports = mongoose.model("Booking", BookingSchema);