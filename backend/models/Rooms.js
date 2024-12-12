const mongoose = require("mongoose");

const RoomsSchema = new mongoose.Schema({
    title: {type: String, require: true},
    imageUrl: {type: String, require: true},
    review: {type: String, require: true },
    rating: {type: Number, require: true},
    price: {type: Number, require: true}
}, {timestamps: true});

module.exports = mongoose.model("Room", RoomsSchema);