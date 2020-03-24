const User = require("../models/User");

module.exports = {
    async store(req,res){
        var user = await User.findOne({email:req.body.email});
        if(!user){
            user = await User.create({
                name: req.body.name,
                email:req.body.email,
                password: req.body.password,
                ativo: 1,
            });
            return res.json({user:user,status:"Usuário criado com sucesso!"});
        };
        return res.json({user:user,status:"Email já utilizado!"});
    },
    // update(req,res){
    //     return res.json({controll :"update"});
    // },
    // destroy(req,res){
    //     return res.json({controll :"destroy"});
    // },
    // index(req,res){
    //     return res.json({controll :"index"});
    // },
    // show(req,res){
    //     return res.json({controll :"show"});
    // },
};
