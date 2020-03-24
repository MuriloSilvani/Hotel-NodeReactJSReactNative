const Place = require("../models/Place");
const User = require("../models/User");
const Booking = require("../models/Booking");

module.exports = {
    async store(req, res){
        const user = await User.findOne({_id:req.headers.user_id});
        if(!user){
            return res.json({status:"Usuário não cadastrado!"});
        }else{
            const place = await Place.findOne({_id:req.params.place_id});
            if(!place){
                return res.json({status:"Lugar não cadastrado!"});
            }else{
                const booking = await Booking.create({
                    user: req.headers.user_id,
                    place: req.params.place_id,
                    date: req.body.date,
                    status: 1,
                });
                await booking.populate('user').populate('place').execPopulate();
                return res.json({booking:booking,status:"Reserva cadastrada!"});
            };
        };
    },
};