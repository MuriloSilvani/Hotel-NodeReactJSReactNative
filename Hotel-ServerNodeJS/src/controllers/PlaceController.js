const Place = require("../models/Place");
const User = require("../models/User");

module.exports = {
    async store(req,res){
        const user = await User.findOne({ _id:req.headers.user_id });
        if(!user){
            return res.json({status:"Usuário não cadastrado!"});
        }else{
            var place = await Place.findOne({
                name: req.body.name,
                techs: req.body.techs.split(",").map(tech => tech.trim()),
                ativo: 1,
                user:req.headers.user_id
            });
            if(!place){
                place = await Place.create({
                    thumbnail: req.file.filename,
                    name: req.body.name,
                    techs: req.body.techs.split(",").map(tech => tech.trim()),
                    ativo: 1,
                    user:req.headers.user_id
                });
                return res.json({place:place,status:"Lugar criado com sucesso!"});
            };
            return res.json({place:place,status:"Lugar já existente!"});
        };
    },
    // update(req,res){
    //     return res.json({controll :"update"});
    // },
    // destroy(req,res){
    //     return res.json({controll :"destroy"});
    // },
    async index(req,res){
        const places = await Place.find({
            techs: req.query.tech
        });
        if(!places){
            return res.json({places:places,status:"Sem lugares!"});
        }else{
            return res.json({places:places,status:"Listagem de lugares!"});
        };
    },
    // show(req,res){
    //     return res.json({controll :"show"});
    // },
};