const Place = require("../models/Place");
const User = require("../models/User");

module.exports = {
    async show(req, res){
        const user = await User.findOne({_id:req.headers.user_id});
        if(!user){
            return res.json({status:"Usuário não cadastrado!"});
        }else{
            const places = await Place.find({
                user: req.headers.user_id,
             });
            if(places.length == 0){
                return res.json({places:places,status:"Sem lugares!"});
            }else{
                return res.json({places:places,status:"Listagem de lugares!"});
            };
        };
    },

};