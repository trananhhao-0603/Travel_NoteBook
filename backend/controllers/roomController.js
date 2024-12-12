const Room = require('../models/Rooms')

module.exports = {
    addRoom : async (req, res, next) =>{
        const {title, imageUrl, review, rating, price} = req.body

        try {
            const newRoom =  new Room({
                title,
                imageUrl,
                review,
                rating,
                price
            })

            await newRoom.save()
            res.status(201).json({ status: true })
        } catch (error) {
            return next(error)
        }
    },
    getRooms: async (req, res, next) =>{
        try {
            const rooms = await Room.find({}, '_id title imageUrl review rating price')

            if(rooms.length === 0){
                return res.status(200).json([]);
            }

            res.status(200).json(rooms)
        } catch (error) {
            return next(error)
        }
    },
    getRoomById: async (req, res, next) =>{
        const roomId = req.params.id

        try {
            const room = await Room.findById(roomId)

            if(!room){
                return res.status(404).json({status: false, message: "Room does not exist"})
            }

            res.status(200).json(room)
        } catch (error) {
            return next(error)
        }
    }
}