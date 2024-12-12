const Place = require("../models/Places");
const Hotel = require('../models/Hotel')

module.exports = {
    addPlaces: async (req, res, next) => {
        const { country_id, description, imageUrl, location, title, rating, review, latitude, longitude, contact_id } = req.body;

        try {
            const newPlace = new Place({
                country_id,
                description,
                imageUrl,
                location,
                contact_id,
                title,
                rating,
                review,
                latitude,
                longitude
            })

            await newPlace.save();

            res.status(201).json({ status: true })
        } catch (error) {
            return next(error)
        }
    },

    getPlaces: async (req, res, next) => {
        try {
            const limitParams = req.query.limit;
            let query =  Place.find({}, '_id review rating imageUrl title country_id location latitude longitude');

            if(limitParams !== 'all'){
                const limit = parseInt(limitParams);
                query = query.limit(limit);
            }

            const places = await query.exec();

            res.status(200).json({ places })

        } catch (error) {
            return next(error)
        }
    },

    getPlace: async (req, res, next) => {
        const placeId = req.params.id;

        try {

            const place = await Place.findById(placeId, {createdAt: 0, updatedAt: 0, __v: 0})
            .populate({
                path: 'popular',
                select: 'title rating review imageUrl location'
            });

            res.status(200).json({ place })

        } catch (error) {
            return next(error)
        }
    },

    getPlacesByCountry: async (req, res, next) => {
        const countryId = req.params.id;
        try {

            const places = await Place.find({country_id: countryId}, {createdAt: 0, updatedAt: 0, __v: 0})

            if(places.length === 0){
                return res.status(200).json([])
            }

            res.status(200).json({ places })

        } catch (error) {
            return next(error)
        }
    },

   
    search: async (req, res, next) =>{
       try {
        const results = await Place.aggregate(
            [
                {
                  $search: {
                    index: "places",
                    text: {
                      query: req.params.key,
                      path: {
                        wildcard: "*"
                      }
                    }
                  }
                }
              ]
        )
        res.status(200).json(results)
       } catch (error) {
        return next(error)
       }
    },

    addHotelsToAllPlaces: async (req, res, next) => {
        try {
            // Lấy tất cả các Place từ cơ sở dữ liệu
            const places = await Place.find();
    
            if (!places || places.length === 0) {
                return res.status(404).json({ message: "No places found" });
            }
    
            // Tạo một map lưu danh sách các khách sạn theo country_id
            const hotelsByCountry = {};
    
            // Tìm tất cả các khách sạn một lần để tối ưu hóa
            const hotels = await Hotel.find();
    
            hotels.forEach(hotel => {
                const { country_id } = hotel;
                if (!hotelsByCountry[country_id]) {
                    hotelsByCountry[country_id] = [];
                }
                hotelsByCountry[country_id].push(hotel._id.toString());
            });
    
            // Duyệt qua từng place và cập nhật danh sách popular
            for (const place of places) {
                const { country_id } = place;
    
                // Lấy danh sách khách sạn tương ứng với country_id
                const matchingHotels = hotelsByCountry[country_id] || [];
    
                // Cập nhật danh sách popular (đảm bảo không trùng lặp)
                place.popular = Array.from(new Set([...place.popular, ...matchingHotels]));
    
                // Lưu lại các thay đổi
                await place.save();
            }
    
            res.status(200).json({ status: true, message: "Hotels added to all places successfully" });
        } catch (error) {
            return next(error);
        }
    }   


    
}