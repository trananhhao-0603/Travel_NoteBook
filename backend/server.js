const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const errorHandler = require('./middleware/errorHandling');
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const countryRouter = require("./routes/country");
const placeRouter = require("./routes/place");
const hotelRouter = require("./routes/hotel");
const reviewRouter = require("./routes/review");
const roomRouter = require("./routes/room");
const bookingRouter = require('./routes/booking')
const port = 5003


dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("database connected"))
.catch((err)=> console.log(err))


app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: "10mb", extended: true}));

app.use(errorHandler);
app.use('/api/', authRouter);
app.use('/api/users', userRouter);
app.use('/api/countries', countryRouter);
app.use('/api/places', placeRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/bookings', bookingRouter);


app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT }!`))